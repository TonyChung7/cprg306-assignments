export default function CategoryItem({ categoryList }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
      {categoryList.map(([category, items]) => (
        <div
          className="p-4 m-3 bg-white text-slate-900 border-l-4 border-blue-400 border-b-2 rounded-r-lg hover:shadow-lg hover:bg-stone-300 transition-colors duration-300 "
          key={category}
        >
          <h2 className="text-2xl font-bold text-black capitalize">
            {category}
          </h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="capitalize">
                {item.name}: Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
