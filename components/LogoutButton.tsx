// components/LogoutButton.tsx
'use client';

import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react'; // Import the LogOut icon from lucide-react

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className= "flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 border border-gray-400 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Logout
    </button>
  );
}