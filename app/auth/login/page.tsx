"use client"

import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from 'lucide-react';

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleEmailLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/dashboard/profile');
      } catch (error) {
        console.error('Error signing in with email and password', error);
      }
    };
  
    const handleGoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        router.push('/dashboard/profile');
      } catch (error) {
        console.error('Error signing in with Google', error);
      }
    };

  return (
    <div className="flex h-screen p-12">
      <div className="container mx-auto flex">
        <div className="p-8 flex-1">
          <Link href="/" className="text-blue-500 flex items-center mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <h1 className="text-3xl font-bold mb-2">Your Gateway to Personalized College Guidance!</h1>
          <h2 className="text-2xl font-bold mb-2">Log in</h2>
          <p className="text-gray-500 mb-6">Please login to continue to your account.</p>
          
          <Button variant="outline" className="w-full mb-4 flex items-center justify-center" onClick={handleGoogleLogin}>
            <Image src="/assets/google_logo.jpg" alt="Google logo" width={20} height={20} className="mr-2" />
            Continue with Google
          </Button>
          
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <form onSubmit={handleEmailLogin}>
            <div className="space-y-4">
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required/>
              <Input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required/>
              <Button type="submit" className="w-full">Log in</Button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <div className="mt-6 text-center text-gray-500">
            Need an account? <Link href="/signup" className="text-blue-500 hover:underline">Create one</Link>
          </div>
        </div>
        
        <div className="hidden md:block flex-1">
          <Image
            src="/assets/graduation.jpg"
            alt="Graduates throwing caps"
            width={800}
            height={600}
            className="object-cover h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;