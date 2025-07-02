'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Users, 
  Video, 
  FileText, 
  MessageSquare, 
  BarChart3,
  Settings,
  Home
} from 'lucide-react';

interface NavigationProps {
  user: any; // We'll type this properly later
}

const studentNavItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/courses', label: 'My Courses', icon: BookOpen },
  { href: '/classrooms', label: 'Classrooms', icon: Users },
  { href: '/lectures', label: 'Lectures', icon: Video },
  { href: '/tests', label: 'Tests', icon: FileText },
  { href: '/chat', label: 'Chat', icon: MessageSquare },
];

const adminNavItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/admin/courses', label: 'Manage Courses', icon: BookOpen },
  { href: '/admin/classrooms', label: 'Manage Classrooms', icon: Users },
  { href: '/admin/lectures', label: 'Manage Lectures', icon: Video },
  { href: '/admin/tests', label: 'Manage Tests', icon: FileText },
  { href: '/admin/students', label: 'Students', icon: Users },
  { href: '/admin/reports', label: 'Reports', icon: BarChart3 },
  { href: '/chat', label: 'Chat', icon: MessageSquare },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function Navigation({ user }: NavigationProps) {
  const pathname = usePathname();
  const navItems = user?.role === 'admin' ? adminNavItems : studentNavItems;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-blue-600">
                Logicology Learning
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {user?.role === 'admin' ? 'Teacher' : 'Student'}
              </span>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
}