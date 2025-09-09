from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

# Now add this for login
class UserLogin(BaseModel):
    email: str
    password: str
    
# -----------------
# User Schemas
# -----------------
class UserBase(BaseModel):
    username: str
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        from_attributes = True   # Pydantic v2 replacement for orm_mode


# -----------------
# Book Schemas
# -----------------
class BookBase(BaseModel):
    title: str
    author: str


class BookCreate(BookBase):
    pass


class Book(BookBase):
    id: int
    available: bool

    class Config:
        from_attributes = True


# -----------------
# Borrow Schemas
# -----------------
class BorrowRecordBase(BaseModel):
    user_id: int
    book_id: int


class BorrowRecordCreate(BorrowRecordBase):
    pass


class BorrowRecord(BorrowRecordBase):
    id: int
    borrowed_at: datetime

    class Config:
        from_attributes = True
