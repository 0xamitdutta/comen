"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Home, Search, MessageCircle, Calendar, Users, Edit } from 'lucide-react'
import path from 'path'

const navItems = [
  { name: 'Home', href: '/dashboard/profile', icon: Home },
  { name: 'Find Mentor', href: '/dashboard/searchMentors', icon: Search },
  { name: 'Bookings', href: '/bookings', icon: Calendar },
]

export default function SideNav() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="bg-blue-50 w-32 min-h-screen flex flex-col items-center py-8">
      <div className="mb-8">
        <Image src="/assets/logo.png" alt="COMEN Logo" width={50} height={50} className="rounded-full" />
      </div>
      <ul className="flex-1 space-y-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}
              className="flex flex-col items-center justify-center text-center w-lvw h-16 text-gray-500 hover:text-blue-500"
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}