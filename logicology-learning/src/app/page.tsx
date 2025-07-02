import Image from "next/image";
import Link from "next/link";
import { BrainIcon, CheckCircleIcon, ZapIcon, LogicologyLogo } from "@/components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <LogicologyLogo />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Logicology Learning</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#courses" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Courses</Link>
              <Link href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</Link>
              <Link href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Master the Art of
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Logical Thinking</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Develop critical thinking skills, understand logical fallacies, and master formal logic with our comprehensive courses and interactive exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                Start Learning Free
              </button>
              <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Logicology Learning?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our platform combines rigorous academic content with modern learning techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <BrainIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Interactive Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">Engage with dynamic exercises, puzzles, and real-world scenarios to reinforce logical thinking concepts.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Expert Content</h3>
              <p className="text-slate-600 dark:text-slate-300">Learn from philosophy professors and logic experts with decades of teaching experience.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <ZapIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Progressive Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">Start with basics and gradually advance to complex logical systems and critical analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Course Offerings
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive curriculum designed to build your logical reasoning skills from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="p-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Beginner
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Introduction to Logic</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Learn the fundamentals of logical thinking, argument structure, and basic reasoning principles.</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Argument identification</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Premise and conclusion analysis</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Basic logical operators</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Start Course
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="p-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Intermediate
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Logical Fallacies</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Master the identification and analysis of common logical fallacies in everyday reasoning.</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Formal fallacies</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Informal fallacies</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Real-world applications</li>
                </ul>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Start Course
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="p-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Advanced
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Formal Logic Systems</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Dive deep into propositional logic, predicate logic, and advanced logical systems.</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-6">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Propositional calculus</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Predicate logic</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Modal logic</li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Start Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Transform Your Thinking
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Logicology Learning was founded on the belief that clear thinking is the foundation of good decision-making. Our comprehensive platform helps you develop the logical reasoning skills needed for academic success, professional advancement, and everyday problem-solving.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Evidence-Based Curriculum</h3>
                    <p className="text-slate-600 dark:text-slate-300">Our courses are built on proven pedagogical methods and current research in cognitive science.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Practical Applications</h3>
                    <p className="text-slate-600 dark:text-slate-300">Learn to apply logical principles to real-world scenarios, from academic writing to business decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
                <p className="mb-6">Join thousands of students who have improved their critical thinking skills with our platform.</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-blue-100">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-blue-100">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-blue-100">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LogicologyLogo />
                <span className="text-xl font-bold">Logicology Learning</span>
              </div>
              <p className="text-slate-300 text-sm">
                Empowering minds through logical thinking and critical reasoning education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white transition-colors">Introduction to Logic</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Logical Fallacies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Formal Logic Systems</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Critical Thinking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white transition-colors">Study Guides</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Practice Exercises</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Logic Puzzles</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Academic Papers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Logicology Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
