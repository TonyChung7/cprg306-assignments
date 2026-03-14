"use client";
import GroceryItemList from "./GroceryItemList";
import GroceryItems from "./GroceryItems.json";
import { useState } from "react";
import NewItem from "./NewItem";
import MealIdeas from "../week-8/MealIdeas";

export default function Page() {
  const [items, setItems] = useState(GroceryItems);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((items) => {
      const currentItems = items.map((item) => ({ ...item }));
      const existingItem = currentItems.find(
        (item) =>
          item.name.toLowerCase() === newItem.name.toLowerCase() &&
          item.category === newItem.category,
      );
      if (existingItem) {
        existingItem.quantity =
          Number(existingItem.quantity) + Number(newItem.quantity);
        return currentItems;
      }
      return [...currentItems, newItem];
    });
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        "",
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-stone-100 p-2 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center m-12 text-slate-950">
        Shopping List + Meal Ideas
      </h1>
      <div className="flex gap-2">
        <div className="flex-1 border-r-2 border-stone-300 border-dashed">
          <div className="mb-6">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <GroceryItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
