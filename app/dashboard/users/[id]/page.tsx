export default function UserId({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>USER DETAILS PAGE</h1>
      <p>User Profile: {id}</p>
    </div>
  );
}
