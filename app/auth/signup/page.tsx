"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Upload, X } from 'lucide-react';
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  UserCredential 
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getFirestore, 
  getDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const db = getFirestore();
  const storage = getStorage();

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size should be less than 5MB');
        return;
      }

      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPhoto = async (uid: string): Promise<string> => {
    if (!photoFile) return '';
    
    try {
      // Create a user-specific folder using their UID
      const fileExtension = photoFile.name.split('.').pop();
      const fileName = `profile-photos/${uid}/${Date.now()}.${fileExtension}`;
      const storageRef = ref(storage, fileName);
  
      // Add metadata
      const metadata = {
        contentType: photoFile.type,
        customMetadata: {
          'uploadedBy': uid,
          'uploadedAt': new Date().toISOString()
        }
      };
  
      const snapshot = await uploadBytes(storageRef, photoFile, metadata);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error: any) {
      console.error('Error uploading photo:', error);
      
      // More specific error messages
      if (error.code === 'storage/unauthorized') {
        throw new Error('Permission denied. Please make sure you are logged in.');
      } else if (error.code === 'storage/quota-exceeded') {
        throw new Error('Storage quota exceeded. Please contact support.');
      } else if (error.code === 'storage/invalid-format') {
        throw new Error('Invalid file format. Please upload an image file.');
      } else {
        throw new Error('Failed to upload photo. Please try again.');
      }
    }
  };

  const createUserDocument = async (userCredential: UserCredential, displayName?: string, photoURL?: string) => {
    const user = userCredential.user;
    
    if (!user) {
      throw new Error('No user found');
    }

    const userRef = doc(db, 'users', user.uid);
    
    try {
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: displayName || user.displayName || '',
        photoURL: photoURL || user.photoURL || '',
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        profileComplete: false,
        role: 'user',
      };

      await setDoc(userRef, userData, { merge: true });
      console.log('User document created/updated successfully');
      
    } catch (error: any) {
      console.error('Error creating user document:', error);
      if (error.code === 'permission-denied') {
        throw new Error('Permission denied. Please check Firebase security rules.');
      }
      throw error;
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Upload photo if selected
      let photoURL = '';
      if (photoFile) {
        photoURL = await uploadPhoto(userCredential.user.uid);
      }
      
      await createUserDocument(userCredential, name, photoURL);
      
      console.log('User created successfully');
      router.push('/complete-profile');
    } catch (error: any) {
      console.error('Error in signup process:', error);
      
      if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters');
      } else if (error.code === 'permission-denied') {
        setError('Permission denied. Please contact support.');
      } else {
        setError(error.message || 'Failed to sign up. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setError('');
    setIsLoading(true);
    
    try {
      const userCredential = await signInWithPopup(auth, provider);
      await createUserDocument(userCredential);
      console.log('Google sign-in successful');
      router.push('/auth/signup/complete-profile');
    } catch (error: any) {
      console.error('Error in Google sign-in:', error);
      if (error.code === 'permission-denied') {
        setError('Permission denied. Please contact support.');
      } else {
        setError(error.message || 'Failed to sign in with Google. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
          <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-500 mb-6">Please Sign up to continue to your account.</p>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <Button 
            variant="outline" 
            className="w-full mb-4 flex items-center justify-center" 
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <Image src="/assets/google_logo.jpg" alt="Google logo" width={20} height={20} className="mr-2" />
            Continue with Google
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <div className="mt-6 text-center text-gray-500">
            Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link>
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

export default SignupComponent;