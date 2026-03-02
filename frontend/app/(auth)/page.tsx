"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { fonts } from "@/lib/fonts";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);
    await signIn("google", {
      callbackUrl: "/feed",
    });
  }



  return (
    <div className="h-screen bg-gray-100 p-6">
      <div className="grid min-h-[calc(100vh-3rem)] grid-cols-1 lg:grid-cols-[70%_30%] gap-6">


        {/* left card*/}
        <div className="relative hidden lg:block rounded-3xl shadow-2xl overflow-hidden bg-[url('/auth-left.jpg')] bg-cover bg-center">

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-10 left-10">
            <h1 className={`${fonts.playfair.className} text-7xl leading-tight text-white`}>
              Ready To Create?
            </h1>
          </div>

        </div>
        {/*Right card*/}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md absolute bottom-30">
            <h1 className="text-4xl font-semibold mb-6">Welcome Back!</h1>
            <form className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full shadow-2xl rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full shadow-2xl rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="••••••••"
                />
              </label>

              <button className="w-full bg-black text-white py-2 rounded hover:bg-[#15616d] transition-colors duration-300 ease-in-out">
                Sign in
              </button>
              <button
              disabled={loading}
                type="button"
                onClick={handleGoogleLogin}
                className="w-full bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
              >{loading ? "Redirecting..." : "Continue with Google"}</button>
            </form>

          </div>
        </div>
      </div>






    </div>
  );
}
