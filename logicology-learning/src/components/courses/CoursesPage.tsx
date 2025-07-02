'use client';

import { useState } from 'react';
import { Search, BookOpen, Clock, Users } from 'lucide-react';
import { api } from '../../lib/api';

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  // Disabled for build
  // const { data: coursesData, isLoading } = api.course.getAll.useQuery({
  //   search: search || undefined,
  //   category: category || undefined,
  //   level: level as 'beginner' | 'intermediate' | 'advanced' || undefined,
  //   page: 1,
  //   limit: 12,
  // });

  // const enrollMutation = api.course.enroll.useMutation({
  //   onSuccess: () => {
  //     alert('Successfully enrolled in course!');
  //   },
  //   onError: (error) => {
  //     alert(error.message);
  //   },
  // });

  const coursesData = { courses: [], pages: 1, currentPage: 1 };
  const isLoading = false;
  const enrollMutation = { isLoading: false, mutate: () => {} };

  const categories = [
    'Programming',
    'Mathematics',
    'Science',
    'Business',
    'Design',
    'Languages',
  ];

  const levels = ['beginner', 'intermediate', 'advanced'];

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <div className="h-48 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Explore Courses
        </h1>
        <p className="text-gray-600">
          Discover new skills and advance your learning journey
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Levels</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      {coursesData?.courses.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No courses found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData?.courses.map((course: any) => (
            <div key={course._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                {course.thumbnail ? (
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="mr-4">{course.duration}h</span>
                  <Users className="w-4 h-4 mr-1" />
                  <span>{course.enrolledStudents?.length || 0} students</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => alert('Enrollment feature coming soon!')}
                    disabled={enrollMutation.isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {enrollMutation.isLoading ? 'Enrolling...' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {coursesData && coursesData.pages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[...Array(coursesData.pages)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-2 rounded ${
                  i + 1 === coursesData.currentPage
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}