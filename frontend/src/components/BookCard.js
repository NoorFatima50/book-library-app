import React from "react";

function BookCard({ book }) {
  const handleBorrow = () => {
    // Placeholder, connect to backend later
    if (book.available) {
      alert(`Borrowed "${book.title}"`);
    } else {
      alert(`${book.title} is already borrowed`);
    }
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Status: {book.available ? "✅ Available" : "❌ Borrowed"}</p>
      <button onClick={handleBorrow} disabled={!book.available}>
        Borrow
      </button>
    </div>
  );
}

export default BookCard;
