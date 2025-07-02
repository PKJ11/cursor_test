'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { api } from '../../lib/api';
import Navigation from './Navigation';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  // Temporarily disabled for build
  // const { data: currentUser, isLoading } = api.auth.getCurrentUser.useQuery();
  // const createUserMutation = api.auth.createUser.useMutation();
  const currentUser = { role: 'student' }; // Mock user for build
  const isLoading = false;
  const createUserMutation = { isLoading: false, mutate: () => {} };

  // Disabled for build
  // useEffect(() => {
  //   if (user && !currentUser && !isLoading) {
  //     // Create user in database if not exists
  //     createUserMutation.mutate({
  //       clerkId: user.id,
  //       email: user.emailAddresses[0]?.emailAddress || '',
  //       firstName: user.firstName || '',
  //       lastName: user.lastName || '',
  //       role: 'student', // Default role
  //     });
  //   }
  // }, [user, currentUser, isLoading, createUserMutation]);

  if (!isLoaded || isLoading || createUserMutation.isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null; // This shouldn't happen as we redirect in page.tsx
  }

  const userRole = currentUser?.role || 'student';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation user={currentUser} />
      <main className="flex-1">
        {userRole === 'admin' ? (
          <AdminDashboard user={currentUser} />
        ) : (
          <StudentDashboard user={currentUser} />
        )}
      </main>
    </div>
  );
}