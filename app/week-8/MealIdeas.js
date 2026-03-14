"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-950 text-center mb-4">
        Meal Ideas {ingredient ? `for ${ingredient}` : "(select an item)"}
      </h2>

      {!ingredient && (
        <p className="text-slate-950 text-center">
          Choose an item to see ideas.
        </p>
      )}
      {ingredient && meals.length === 0 && (
        <p className="text-slate-950 text-center m-4">No meals found.</p>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {meals.map((meal) => (
          <li
            className="p-4 m-2 bg-white text-slate-900 border-blue-400 border-2 rounded-lg hover:shadow-lg hover:bg-stone-300 transition-colors duration-300 "
            key={meal.idMeal}
          >
            {" "}
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
