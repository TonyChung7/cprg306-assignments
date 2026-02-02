import GroceryItem from "./GroceryItem";
import GroceryItems from "./GroceryItems";

export default function GroceryItemList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {GroceryItems.map((item) => (
        <GroceryItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
