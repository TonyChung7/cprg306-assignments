"use client";
import GroceryItem from "./GroceryItem";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

export default function GroceryItemList({ items }) {
  const [sortby, setSortby] = useState("name");
  const sortedItems = [...items].sort((a, b) => {
    if (sortby === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortby === "category" || sortby === "group") {
      const result = a.category.localeCompare(b.category);
      if (result === 0) {
        return a.name.localeCompare(b.name);
      }
      return result;
    }
    //  else if (sortby === "group") {
    //   const result = a.category.localeCompare(b.category);
    //   if (result === 0) {
    //     return a.name.localeCompare(b.name);
    //   }
    //   return result;
    // }
  });
  const group = sortedItems.reduce((groups, item) => {
    const category = item.category;
    groups[category] = groups[category] ?? [];
    groups[category].push(item);
    return groups;
  }, {});

  const categoryList = Object.entries(group);

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
        <button
          className={`px-4 py-2 rounded text-black  hover:bg-gray-500 ${sortby === "group" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setSortby("group")}
        >
          Group by Category
        </button>
      </div>
      {sortby == "group" ? (
        <CategoryItem categoryList={categoryList} />
      ) : (
        //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
        //     {categoryList.map(([category, items]) => (
        //       <div
        //         className="p-4 m-3 bg-white text-slate-900 border-l-4 border-blue-400 border-b-2 rounded-r-lg hover:shadow-lg hover:bg-stone-300 transition-colors duration-300 "
        //         key={category}
        //       >
        //         <h2 className="text-2xl font-bold text-black capitalize">
        //           {category}
        //         </h2>
        //         <ul>
        //           {items.map((item) => (
        //             <li key={item.id} className="capitalize">
        //               {item.name}: Quantity: {item.quantity}
        //             </li>
        //           ))}
        //         </ul>
        //       </div>
        //     ))}
        //   </div>
        // ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {sortedItems.map((item) => (
            <GroceryItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
