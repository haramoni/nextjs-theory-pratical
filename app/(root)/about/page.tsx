export default async function About() {
  await new Promise((promise) => setTimeout(promise, 3000));

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
