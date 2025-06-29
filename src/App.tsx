import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FilterSection } from './components/FilterSection';
import { FeaturedEvents } from './components/FeaturedEvents';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Filter Section */}
          <FilterSection />

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Discover Amazing Events in Malang
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Connect with fellow students, join exciting activities, and
                  make the most of your university life in the beautiful city of
                  Malang.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Explore Events
                  </button>
                  <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Add Event
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Active Events</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">2.5K+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Events */}
          <FeaturedEvents />

          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-lg font-bold mb-4">Infokan.id</h3>
                  <p className="text-gray-400 mb-4">
                    The premier platform for discovering and participating in
                    student events across Malang City. Connect, learn, and grow
                    with your community.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Categories</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Academic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Workshop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Social
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Sports
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; Infokan.id 2025. Made with passion for Malang students.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
