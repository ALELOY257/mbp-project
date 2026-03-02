"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Plus, User, Settings } from "lucide-react"

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/feed", icon: Home },
    { href: "/search", icon: Search },
    { href: "/create", icon: Plus, isCenter: true },
    { href: "/profile", icon: User },
    { href: "/settings", icon: Settings}
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(640px,calc(100%-2rem))] z-50">
      
      {/* NAV BACKGROUND WITH NOTCH */}
      <div
        className="relative h-16 bg-white/90 backdrop-blur-xl shadow-xl border border-gray-200"
        style={{
          borderRadius: "24px",
          clipPath:
            "path('M0 24 Q0 0 24 0 H40% Q50% 0 50% 18 Q50% 0 60% 0 Hcalc(100% - 24px) Q100% 0 100% 24 V100% H0 Z')",
        }}
      />

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
              className={`text-gray-600 ${
                active ? "text-pink-600" : ""
              }`}
            >
              <Icon size={22} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}