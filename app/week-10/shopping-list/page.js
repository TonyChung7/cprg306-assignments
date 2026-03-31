"use client";
import GroceryItemList from "./GroceryItemList";
import { useState } from "react";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  getItems,
  addItem,
} from "@/app/week-10/_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    async function loadItems() {
      try {
        if (user) {
          const fetchedItems = await getItems(user.uid);
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const itemWithId = { ...newItem, id: newItemId };
      setItems((items) => {
        return [...items, itemWithId];
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
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

  if (!user) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4">You must be logged in to view this page.</p>
        <button
          onClick={() => router.push("/week-10")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to Login Page
        </button>
      </main>
    );
  }

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
