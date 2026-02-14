"use client";
import { useState } from "react";

export default function NewItem() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    console.log(newItem);

    alert(
      `"Added: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}"`,
    );

    setItemName("");
    setItemQuantity(1);
    setItemCategory("produce");
  };

  return (
    <form
      className="bg-gray-200 p-4 items-center rounded-lg w-[80%] max-w-lg mx-auto flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        className="text-center p-2 rounded-md border-2 border-gray-300 w-full"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
        placeholder="Item Name"
      />
      <div className="flex w-full">
        <div className="flex flex-1">
          <p>Quantity:</p>
          <input
            className="flex-1 text-center border-r-2 border-gray-300"
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            min="1"
            max="99"
            placeholder="Quantity"
          />
        </div>
        <select
          className="flex-1 text-center bg-gray-200 "
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          placeholder="Category"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen food">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white p-2 w-10 h-10 rounded-full hover:bg-blue-800"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
