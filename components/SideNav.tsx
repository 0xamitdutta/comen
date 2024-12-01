"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Home, User, Search, MessageCircle, Calendar, Users, Edit } from 'lucide-react'
import path from 'path'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'

const navItems = [
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Find Mentor', href: '/searchMentors', icon: Search },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageCircle },
  { name: 'Bookings', href: '/dashboard/bookings', icon: Calendar },
  { name: 'Community', href: '/dashboard/community', icon: Users },
  { name: 'Blogs', href: '/dashboard/blogs', icon: Edit },
]

export default function SideNav() {
  const pathname = usePathname()
  const { user, loading } = useFirebaseAuth();
  console.log(pathname)
  return (
    (user) && (<nav className="bg-blue-50 w-32 min-h-screen flex flex-col items-center py-8">
      <div className="mb-8">
        <Link href="/">
          <Image src="/assets/logo.png" alt="COMEN Logo" width={50} height={50} className="rounded-full" />
        </Link>

      </div>
      <ul className="flex-1 w-full space-y-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}
              className={`flex flex-col items-center justify-center text-center w-full h-16 text-gray-500 hover:text-blue-500 ${item.href === pathname ? 'bg-white' : 'text-gray-500'}`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>)
  )
}