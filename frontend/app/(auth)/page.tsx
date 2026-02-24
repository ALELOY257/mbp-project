"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* left card*/}
          <div className="bg-[url('/auth-left.jpg')] bg-cover bg-center relative hidden lg:block">

          </div>
          {/*Right card*/}
          <div className="p-8 flex items-center">
            <div className="w-full max-w-sm mx-auto">
              <h1 className="text-2xl font-semibold mb-6">Sign in</h1>
              <form className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="••••••••"
                  />
                </label>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Sign in
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>




    </div>
  );
}
