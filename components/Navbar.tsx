"use client"

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import LogoutButton from './LogoutButton';
import { UserCircle2 } from 'lucide-react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

// Type for Firestore user data
interface FirestoreUser {
  displayName: string;
  photoURL: string;
  email: string;
}

const Navbar = () => {
  const { user } = useFirebaseAuth();
  const [firestoreUser, setFirestoreUser] = useState<FirestoreUser | null>(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setFirestoreUser(userDoc.data() as FirestoreUser);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setFirestoreUser(null);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user?.uid, db]);

  // Get display name from Firestore or fallback to auth user
  const displayName = firestoreUser?.displayName || user?.displayName || user?.email?.split('@')[0];
  // Get first name only
  const firstName = displayName?.split(' ')[0];

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-200">
      <div className="container px-8 mx-auto relative lg:text-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image src="/assets/logo.png" alt="Logo" height={50} width={50} className="mr-2" />
          </div>
          <ul className="hidden lg:flex space-x-12">
            <li><a href="#get-started">Get Started</a></li>
            <li><a href="#find-mentors">Find Mentors</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm">Hi, {firstName}</span>
                  <div className="relative w-8 h-8">
                    {!loading && (
                      firestoreUser?.photoURL ? (
                        <Image
                          src={firestoreUser.photoURL}
                          alt="Profile photo"
                          fill
                          className="rounded-full object-cover border border-gray-200"
                          sizes="32px"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <UserCircle2 className="w-6 h-6 text-gray-500" />
                        </div>
                      )
                    )}
                  </div>
                </div>
                <LogoutButton />
              </div>
            ) : (
              <>
                <Link href="/auth/login" className={buttonVariants({ variant: "outline" })}>Log In</Link>
                <Link href="/auth/signup" className={buttonVariants({ variant: "default" })}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;