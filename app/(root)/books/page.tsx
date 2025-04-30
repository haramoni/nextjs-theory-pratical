export default async function BooksPage() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  console.log(books);

  return (
    <div>
      <h1>Books Page</h1>
    </div>
  );
}
