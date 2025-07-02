import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Dashboard from '../../components/dashboard/Dashboard';

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return <Dashboard />;
}