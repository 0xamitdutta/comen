// components/AuthLayout.tsx
'use client';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useFirebaseAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!user && !pathname.startsWith('/auth')) {
        router.push('/auth/login');
      } 
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}