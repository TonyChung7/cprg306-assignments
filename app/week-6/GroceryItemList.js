"use client";
import GroceryItem from "./GroceryItem";
import { useState } from "react";

export default function GroceryItemList({ items }) {
  const [sortby, setSortby] = useState("name");
  const sortedItems = [...items].sort((a, b) => {
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortby === "category") {
      const result = a.category.localeCompare(b.category);
      if (result === 0) {
        return a.name.localeCompare(b.name);
      }
      return result;
    }
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-4 mb-4">
        <p className="text-black"> Sort by:</p>
        <button
          className={`px-4 py-2 rounded text-black hover:bg-gray-400 ${sortby === "name" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setSortby("name")}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 rounded text-black  hover:bg-gray-500 ${sortby === "category" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setSortby("category")}
        >
          Category
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {sortedItems.map((item) => (
          <GroceryItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
