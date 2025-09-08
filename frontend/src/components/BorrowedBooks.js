import { useEffect, useState } from "react";
import axios from "axios";

function BorrowedBooks() {
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    // Placeholder API call, will connect to FastAPI later
    axios.get("http://127.0.0.1:8000/borrowed")
      .then(res => setBorrowed(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowed.length > 0 ? borrowed.map(b => (
          <li key={b.id}>
            Book ID: {b.book_id}, Borrowed At: {new Date(b.borrowed_at).toLocaleString()}
          </li>
        )) : <p>No borrowed books yet.</p>}
      </ul>
    </div>
  );
}

export default BorrowedBooks;
