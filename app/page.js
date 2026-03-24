import Link from "next/link";

export default function Home() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9];
  const linkStyle =
    " hover:text-blue-700 hover:underline inline-block hover:translate-x-2 transition-all duration-300";
  return (
    <main>
      <h1 className="text-4xl font-extrabold p-6 mb-5 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="text-center text-lg space-y-3">
        {weeks.map((week) => (
          <li key={week}>
            {" "}
            <Link className={linkStyle} href={`/week-${week}`}>
              {" "}
              → Week {week} Assignment
            </Link>{" "}
          </li>
        ))}
      </ul>
    </main>
  );
}
