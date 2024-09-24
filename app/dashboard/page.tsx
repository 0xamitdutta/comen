"use client"
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import LogoutButton from '@/components/LogoutButton';

export default function DashboardPage() {
  const { user } = useFirebaseAuth();

  return (
    <div>
      
    </div>
  );
}
