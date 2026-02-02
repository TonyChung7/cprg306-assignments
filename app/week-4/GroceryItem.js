export default function GroceryItem({ name, quantity, category }) {
  return (
    <li
      className="p-4 m-3 bg-white text-slate-900 border-l-4 border-orange-500
    rounded-r-lg hover:shadow-lg hover:bg-stone-300 transition-colors duration-300 "
    >
      <p className="text-lg capitalize">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
