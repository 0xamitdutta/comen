// app/dashboard/page.tsx

"use client"
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import LogoutButton from '@/components/LogoutButton';

export default function DashboardPage() {
  const { user } = useFirebaseAuth();

  return (
    <div>
      <h1>Welcome to your dashboard, {user?.email}</h1>
      <LogoutButton />
    </div>
  );
}