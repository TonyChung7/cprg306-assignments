"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">Shopping List App</h1>

      {user ? (
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded mr-4"
          >
            Logout
          </button>
          <br />
          <br />
          <Link
            href="/week-9/shopping-list"
            className="text-blue-500 underline"
          >
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <div>
          <button
            onClick={handleSignIn}
            className="bg-slate-800 text-white px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
