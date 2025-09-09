#  Book Library Management System

A full-stack web application for managing a digital book library with user authentication, book borrowing functionality, and a modern React frontend.

##  Features

- **User Authentication**: Register and login system
- **Book Management**: Add, view, and manage books in the library
- **Borrowing System**: Users can borrow and return books
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **RESTful API**: FastAPI backend with comprehensive endpoints
- **Database Integration**: MySQL database with SQLAlchemy ORM

##  Tech Stack

### Frontend
- **React 19.1.1** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.8.2** - Client-side routing
- **Axios 1.11.0** - HTTP client for API calls
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Scripts 5.0.1** - Build tools and development server

### Backend
- **FastAPI 0.116.1** - Modern, fast web framework for building APIs
- **SQLAlchemy 2.0.43** - Python SQL toolkit and ORM
- **Pydantic 2.11.7** - Data validation using Python type annotations
- **MySQL** - Relational database management system
- **Uvicorn 0.35.0** - ASGI server for running FastAPI applications

##  Project Structure

```
book-library-app/
├── backend/                 # FastAPI backend
│   ├── __init__.py
│   ├── main.py             # FastAPI application and routes
│   ├── models.py           # SQLAlchemy database models
│   ├── schemas.py          # Pydantic schemas for data validation
│   ├── crud.py             # Database operations
│   ├── auth.py             # Authentication utilities
│   ├── database.py         # Database configuration
│   └── venv/               # Python virtual environment
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Landing.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── BookList.js
│   │   │   ├── BookCard.js
│   │   │   ├── BorrowedBooks.js
│   │   │   └── About.js
│   │   ├── api/            # API service functions
│   │   │   ├── axios.js
│   │   │   ├── books.js
│   │   │   ├── borrow.js
│   │   │   └── users.js
│   │   ├── App.js          # Main React component
│   │   └── index.js        # React entry point
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

##  Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **Python** (v3.8 or higher)
- **MySQL** (v8.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/NoorFatima50/book-library-app.git>
   cd book-library-app
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   
   # Create and activate virtual environment
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   
   # Install dependencies
   pip install fastapi uvicorn sqlalchemy mysql-connector-python pydantic python-multipart python-jose passlib bcrypt
   ```

3. **Set up the Database**
   ```sql
   -- Create database
   CREATE DATABASE library_db;
   
   -- Create user (optional, or use your existing MySQL credentials)
   CREATE USER 'library_user'@'localhost' IDENTIFIED BY 'libpass123';
   GRANT ALL PRIVILEGES ON library_db.* TO 'library_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Set up the Frontend**
   ```bash
   cd ../frontend
   
   # Install dependencies
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   venv\Scripts\activate  # On Windows
   # source venv/bin/activate  # On macOS/Linux
   
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
   The API will be available at `http://localhost:8000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   The application will be available at `http://localhost:3000`

##  API Documentation

Once the backend is running, you can access the interactive API documentation at:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

### API Endpoints

#### User Management
- `POST /register` - Register a new user
- `POST /login` - User login

#### Book Management
- `GET /books/` - Get all books
- `POST /books/` - Create a new book
- `GET /books/{book_id}` - Get a specific book

#### Borrowing System
- `POST /borrow/` - Borrow a book
- `GET /borrow/{user_id}` - Get user's borrowed books

##  Usage

1. **Register/Login**: Create an account or login to access the library
2. **Browse Books**: View all available books in the library
3. **Borrow Books**: Select books to borrow from your dashboard
4. **Track Borrowed Books**: View your currently borrowed books
5. **Return Books**: Manage your borrowed books

##  Configuration

### Database Configuration
Update the database connection string in `backend/database.py`:
```python
SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://username:password@localhost/database_name"
```

### CORS Configuration
The backend is configured to allow all origins for development. For production, update the CORS settings in `backend/main.py`.



##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



##  Author

Created  by Noor Fatima

## Acknowledgments

- FastAPI for the excellent web framework
- React team for the amazing frontend library
- Tailwind CSS for the utility-first CSS framework


---

**Happy Reading! **
