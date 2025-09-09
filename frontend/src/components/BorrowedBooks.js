import { useEffect, useState } from "react";
import axios from "axios";

function BorrowedBooks() {
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    const userRaw = localStorage.getItem("user");
    const user_id = userRaw ? JSON.parse(userRaw)?.user_id : null;
    if (!user_id) return;
    axios
      .get(`http://127.0.0.1:8000/borrow/${user_id}`)
      .then((res) => setBorrowed(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-primary mb-6">Borrowed Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {borrowed.length > 0 ? (
          borrowed.map((b) => (
            <div key={b.id} className="p-4 rounded-xl bg-white shadow-soft">
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

export default BorrowedBooks;
