function BookCard({ book }) {
  const handleBorrow = async () => {
    if (!book.available) {
      alert(`${book.title} is already borrowed`);
      return;
    }
    const userRaw = localStorage.getItem("user");
    const user_id = userRaw ? JSON.parse(userRaw)?.user_id : null;
    if (!user_id) return alert("Login first");

    try {
      const res = await fetch("http://127.0.0.1:8000/borrow/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: parseInt(user_id), book_id: book.id }),
      });
      if (res.ok) {
        alert(`Borrowed "${book.title}" successfully`);
      } else {
        const data = await res.json();
        alert(data.detail || "Error borrowing book");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="p-5 rounded-xl bg-white shadow-soft text-center">
      <h3 className="text-lg font-semibold text-brand-text mb-1">{book.title}</h3>
      <p className="text-brand-text-muted mb-2">Author: {book.author}</p>
      <p className="mb-4">
        {book.available ? (
          <span className="text-green-600 font-medium">Available</span>
        ) : (
          <span className="text-red-600 font-medium">Borrowed</span>
        )}
      </p>
      <button
        onClick={handleBorrow}
        disabled={!book.available}
        className="px-4 py-2 rounded-lg bg-brand-primary text-white hover:bg-brand-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition"
      >
        Borrow
      </button>
    </div>
  );
}

export default BookCard;
