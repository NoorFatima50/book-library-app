# backend/main.py
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import engine, SessionLocal

# Create tables if they don't exist
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Book Library API")

# Allow all origins for development (frontend can be at localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency: get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# -------------------
# STARTUP: seed default books once (if DB empty)
# -------------------
@app.on_event("startup")
def seed_default_books_if_empty():
    db = SessionLocal()
    try:
        has_any = db.query(models.Book).first() is not None
        if not has_any:
            defaults = [
                schemas.BookCreate(title="The Alchemist", author="Paulo Coelho"),
                schemas.BookCreate(title="1984", author="George Orwell"),
                schemas.BookCreate(title="Atomic Habits", author="James Clear"),
            ]
            for b in defaults:
                crud.create_book(db, b)
    finally:
        db.close()


# -------------------
# USER ROUTES
# -------------------
@app.post("/register", response_model=schemas.User)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.post("/login")
def login_user(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if not db_user or db_user.password != user.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    # Placeholder token, implement JWT if needed
    return {"message": "Login successful", "user_id": db_user.id}


# -------------------
# BOOK ROUTES
# -------------------
@app.post("/books/", response_model=schemas.Book)
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db)):
    return crud.create_book(db=db, book=book)


@app.get("/books/", response_model=list[schemas.Book])
def get_books(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_books(db, skip=skip, limit=limit)


@app.get("/books/{book_id}", response_model=schemas.Book)
def get_book(book_id: int, db: Session = Depends(get_db)):
    db_book = crud.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return db_book


# -------------------
# BORROW ROUTES
# -------------------
@app.post("/borrow/", response_model=schemas.BorrowRecord)
def borrow_book(borrow: schemas.BorrowRecordCreate, db: Session = Depends(get_db)):
    return crud.create_borrow_record(db=db, borrow=borrow)


@app.get("/borrow/{user_id}", response_model=list[schemas.BorrowRecord])
def get_borrow_records(user_id: int, db: Session = Depends(get_db)):
    return crud.get_borrow_records(db, user_id=user_id)
