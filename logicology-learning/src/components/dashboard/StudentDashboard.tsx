'use client';

import { BookOpen, Clock, Trophy, Calendar } from 'lucide-react';
import { api } from '../../lib/api';

interface StudentDashboardProps {
  user: any;
}

export default function StudentDashboard({ user }: StudentDashboardProps) {
  // const { data: courses } = api.course.getMyCourses.useQuery();
  const courses: any[] = []; // Mock empty array for build

  const stats = [
    {
      title: 'Enrolled Courses',
      value: courses?.length || 0,
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      title: 'Hours Studied',
      value: '12.5',
      icon: Clock,
      color: 'bg-green-500',
    },
    {
      title: 'Tests Completed',
      value: '8',
      icon: Trophy,
      color: 'bg-purple-500',
    },
    {
      title: 'Upcoming Classes',
      value: '3',
      icon: Calendar,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Continue your learning journey
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

      {/* Recent Courses */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">My Courses</h2>
        </div>
        <div className="p-6">
          {courses && courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course: any) => (
                <div key={course._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                    {course.thumbnail ? (
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
              <p className="text-gray-600 mb-4">
                Browse our course catalog to start learning
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Browse Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}