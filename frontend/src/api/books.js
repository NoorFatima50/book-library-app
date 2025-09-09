// src/api/books.js
const API_URL = "http://127.0.0.1:8000"; // your FastAPI backend

export async function getBooks() {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) throw new Error("Failed to fetch books");
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function borrowBook(bookId) {
  try {
    const response = await fetch(`${API_URL}/borrow/${bookId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 1 }), // replace with logged-in user
    });
    if (!response.ok) throw new Error("Failed to borrow book");
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
