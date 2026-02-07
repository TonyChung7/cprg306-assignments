import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="bg-stone-100 p-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-slate-950">
        Shopping List
      </h1>
      <GroceryItemList />
    </main>
  );
}
