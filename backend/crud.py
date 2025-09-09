from sqlalchemy.orm import Session
from . import models, schemas


# -----------------
# User CRUD
# -----------------
def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        username=user.username,
        email=user.email,
        password=user.password  # (in real apps, hash this!)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


# -----------------
# Book CRUD
# -----------------
def create_book(db: Session, book: schemas.BookCreate):
    db_book = models.Book(title=book.title, author=book.author)
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book


def get_books(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Book).offset(skip).limit(limit).all()


def get_book(db: Session, book_id: int):
    return db.query(models.Book).filter(models.Book.id == book_id).first()


# -----------------
# Borrow CRUD
# -----------------
def create_borrow_record(db: Session, borrow: schemas.BorrowRecordCreate):
    db_record = models.BorrowRecord(
        user_id=borrow.user_id,
        book_id=borrow.book_id
    )
    db.add(db_record)
    db.commit()
    db.refresh(db_record)

    # mark book unavailable
    book = db.query(models.Book).filter(models.Book.id == borrow.book_id).first()
    if book:
        book.available = False
        db.commit()

    return db_record


def get_borrow_records(db: Session, user_id: int):
    return db.query(models.BorrowRecord).filter(models.BorrowRecord.user_id == user_id).all()
