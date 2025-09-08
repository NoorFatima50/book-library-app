import { useEffect, useState } from "react";
import "./Dashboard.css";
import BookCard from "./BookCard";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    // Placeholder data for now
    const dummyBooks = [
      { id: 1, title: "The Alchemist", author: "Paulo Coelho", available: true },
      { id: 2, title: "1984", author: "George Orwell", available: false },
      { id: 3, title: "Harry Potter", author: "J.K. Rowling", available: true },
    ];

    const dummyBorrowed = [
      { id: 1, book_id: 2, borrowed_at: "2025-09-08T15:30:00Z" }
    ];

    setBooks(dummyBooks);
    setBorrowed(dummyBorrowed);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Available Books</h2>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>Borrowed Books</h2>
      <div className="book-list">
        {borrowed.length > 0 ? borrowed.map(b => (
          <div key={b.id} className="book-card">
            <p>Book ID: {b.book_id}</p>
            <p>Borrowed At: {new Date(b.borrowed_at).toLocaleString()}</p>
          </div>
        )) : <p>No borrowed books yet.</p>}
      </div>
    </div>
  );
}

export default Dashboard;
