'use client';

import { BookOpen, Users, FileText, BarChart3, Plus } from 'lucide-react';
import { api } from '../../lib/api';

interface AdminDashboardProps {
  user: any;
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  // const { data: courses } = api.course.getMyCourses.useQuery();
  const courses: any[] = []; // Mock empty array for build

  const stats = [
    {
      title: 'Total Courses',
      value: courses?.length || 0,
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Students',
      value: courses?.reduce((acc: number, course: any) => acc + (course.enrolledStudents?.length || 0), 0) || 0,
      icon: Users,
      color: 'bg-green-500',
    },
    {
      title: 'Tests Created',
      value: '12',
      icon: FileText,
      color: 'bg-purple-500',
    },
    {
      title: 'Total Revenue',
      value: '$2,450',
      icon: BarChart3,
      color: 'bg-orange-500',
    },
  ];

  const quickActions = [
    {
      title: 'Create New Course',
      description: 'Add a new course to your catalog',
      icon: BookOpen,
      href: '/admin/courses/new',
      color: 'bg-blue-500',
    },
    {
      title: 'Schedule Class',
      description: 'Schedule a new live class session',
      icon: Users,
      href: '/admin/classrooms/new',
      color: 'bg-green-500',
    },
    {
      title: 'Create Test',
      description: 'Create a new test or quiz',
      icon: FileText,
      href: '/admin/tests/new',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your courses and students
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.title}
                    className="w-full text-left p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className={`${action.color} rounded-lg p-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Courses */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Your Courses</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            {courses && courses.length > 0 ? (
              <div className="space-y-4">
                {courses.slice(0, 3).map((course: any) => (
                  <div key={course._id} className="flex items-center p-3 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600">
                        {course.enrolledStudents?.length || 0} students enrolled
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        course.isPublished 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {course.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
                <p className="text-gray-600 mb-4">
                  Create your first course to get started
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Course
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}