"use client";
import { useState } from "react";
import { CategoryOptions } from "./CategoryOptions";
export default function NewItem({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState(CategoryOptions[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    console.log(newItem);

    onAddItem(newItem);
    // console.log(onAddItem);
    // alert(
    //   `"Added: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}"`,
    // );

    setItemName("");
    setItemQuantity(1);
    setItemCategory(CategoryOptions[0]);
  };

  return (
    <form
      className="bg-gray-200 text-black p-4 items-center rounded-lg w-[80%] max-w-3xl mx-auto flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="item-name" className="sr-only">
        Item Name
      </label>
      <input
        id="item-name"
        name="item-name"
        className="text-center p-2 rounded-md border-2 border-gray-300 w-full"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
        placeholder="Item Name"
      />

      <div className="flex w-full">
        <div className="flex flex-1">
          <label htmlFor="item-quantity">Quantity:</label>
          <input
            id="item-quantity"
            name="item-quantity"
            className="flex-1 text-center border-r-2 border-gray-300"
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            min="1"
            max="99"
            placeholder="Quantity"
          />
        </div>

        <label htmlFor="item-category" className="sr-only  ">
          Category Options
        </label>
        <select
          name="item-category"
          id="item-category"
          className="capitalize flex-1 text-center bg-gray-200"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
        >
          {CategoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded-full  hover:bg-blue-800"
        type="submit"
      >
        Add Item +
      </button>
    </form>
  );
}
