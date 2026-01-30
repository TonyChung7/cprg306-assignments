import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-extrabold p-6 mb-5 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="text-center text-lg space-y-3">
        <li>
          <Link
            className=" hover:text-blue-700 hover:underline 
            inline-block hover:translate-x-2 transition-all duration-300"
            href="/week-2"
          >
            → Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-blue-700 hover:underline 
            inline-block hover:translate-x-2 transition-all duration-300"
            href="/week-3"
          >
            → Week 3 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
