"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Plus, User, Bookmark } from "lucide-react"

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/feed", icon: Home },
    { href: "/search", icon: Search },
    { href: "/create", icon: Plus, isCenter: true },
    { href: "/profile", icon: User },
    { href: "/bookmarks", icon: Bookmark}
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(640px,calc(100%-2rem))] h-16 z-50 bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm">
      
      
      

      {/* NAV CONTENT */}
      <div className="absolute inset-0 flex items-center justify-around px-6">
        {navItems.map(({ href, icon: Icon, isCenter }) => {
          const active = pathname?.startsWith(href)

          if (isCenter) {
            return (
              <Link
                key={href}
                href={href}
                className="relative -translate-y-6"
              >
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-pink-600 text-white shadow-2xl ring-4 ring-white">
                  <Icon size={24} />
                </div>
              </Link>
            )
          }

          return (
            <Link
              key={href}
              href={href}
              className={`text-gray-600 ${active ? "text-pink-600" : ""}`}
            >
              <div className={`p-2 rounded-full transition-shadow ${active ? "bg-white shadow-lg ring-2 ring-white" : "hover:bg-white/5"}`}>
                <Icon size={22} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}