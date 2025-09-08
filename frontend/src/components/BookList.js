import { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // For now, we will test with dummy data
    // Once backend is ready, change the URL to: "http://127.0.0.1:8000/books"
    axios.get("http://127.0.0.1:8000/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Books</h2>
      <ul>
        {books.length > 0 ? books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - 
            {book.available ? " ✅ Available" : " ❌ Borrowed"}
          </li>
        )) : <p>No books available yet.</p>}
      </ul>
    </div>
  );
}

export default BookList;

