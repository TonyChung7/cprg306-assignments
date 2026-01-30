export default function GroceryItem({ name, quantity, category }) {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
