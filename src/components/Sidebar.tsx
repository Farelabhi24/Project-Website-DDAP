import React from 'react';
import { Home, Grid3X3, Bookmark, Bell, Calendar, MapPin, Users, GraduationCap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Grid3X3, label: 'Categories', active: false },
    { icon: Bookmark, label: 'Saved Events', active: false },
    { icon: Bell, label: 'Notifications', active: false, badge: '3' },
  ];

  const categories = [
    { icon: GraduationCap, label: 'Academic', count: '12' },
    { icon: Users, label: 'Social', count: '8' },
    { icon: Calendar, label: 'Workshop', count: '15' },
    { icon: MapPin, label: 'Campus Tours', count: '4' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-gray-600 bg-opacity-75"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Main Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${item.active ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
                {item.label}
                {item.badge && (
                  <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Categories Section */}
          <div className="px-4 py-6 border-t border-gray-200">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Popular Categories
            </h3>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <a
                  key={category.label}
                  href="#"
                  className="group flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <category.icon className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
                    {category.label}
                  </div>
                  <span className="text-xs text-gray-400">{category.count}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}