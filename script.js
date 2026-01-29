const books = [
  { title: "Atomic Habits", author: "James Clear", price: 20, image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 18, image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", price: 15, image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg" },
  { title: "Ikigai", author: "Héctor García", price: 16, image: "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg" },
  { title: "Think Like a Monk", author: "Jay Shetty", price: 17, image: "https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg" },
  { title: "Deep Work", author: "Cal Newport", price: 19, image: "https://images-na.ssl-images-amazon.com/images/I/81JJ7fyyKyS.jpg" },
  { title: "Wings of Fire", author: "A.P.J Abdul Kalam", price: 14, image: "https://images-na.ssl-images-amazon.com/images/I/71KKZlVjbwL.jpg" },
  { title: "The Psychology of Money", author: "Morgan Housel", price: 20, image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg" }
];

const bookList = document.getElementById("bookList");
let selectedBook = null;

books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <img src="${book.image}">
    <div class="book-info">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>₹${book.price} / day</p>
      <button onclick='openModal(${JSON.stringify(book)})'>Rent Now</button>
    </div>
  `;
  bookList.appendChild(card);
});

function openModal(book) {
  selectedBook = book;
  document.getElementById("bookTitle").innerText = book.title;
  document.getElementById("rentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("rentModal").style.display = "none";
}

document.getElementById("toDate").addEventListener("change", calculatePrice);

function calculatePrice() {
  const from = new Date(fromDate.value);
  const to = new Date(toDate.value);
  if (to >= from) {
    const days = (to - from) / (1000 * 60 * 60 * 24) + 1;
    totalPrice.innerText = days * selectedBook.price;
  }
}

function confirmRent() {
  alert(`✅ "${selectedBook.title}" rented successfully!`);
  closeModal();
}
