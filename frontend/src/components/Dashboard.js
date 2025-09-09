import { useEffect, useState } from "react";
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
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-primary mb-6">Available Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-6">Borrowed Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {borrowed.length > 0 ? (
          borrowed.map((b) => (
            <div
              key={b.id}
              className="p-4 rounded-xl bg-brand-surface-muted shadow-soft text-center"
            >
              <p className="text-brand-text">Book ID: {b.book_id}</p>
              <p className="text-brand-text-muted">
                Borrowed At: {new Date(b.borrowed_at).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-brand-text-muted">No borrowed books yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
