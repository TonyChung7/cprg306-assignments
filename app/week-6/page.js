"use client";
import GroceryItemList from "./GroceryItemList";
import GroceryItems from "./GroceryItems.json";
import { useState } from "react";
import NewItem from "./NewItem";

export default function Page() {
  const [items, setItems] = useState(GroceryItems);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-stone-100 p-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-slate-950">
        Shopping List
      </h1>
      <div className="mb-6">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <GroceryItemList items={items} />
    </main>
  );
}
