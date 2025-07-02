import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import CoursesPage from '../../components/courses/CoursesPage';

export default async function Courses() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return <CoursesPage />;
}