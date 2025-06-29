import React from 'react';
import { EventCard } from './EventCard';

export function FeaturedEvents() {
  const featuredEvents = [
    {
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      time: "09:00 AM",
      location: "Brawijaya University Auditorium",
      attendees: 156,
      category: "Academic",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500",
      isFree: true,
      isBookmarked: true
    },
    {
      title: "Student Startup Workshop",
      date: "March 18, 2024",
      time: "02:00 PM",
      location: "Universitas Negeri Malang",
      attendees: 89,
      category: "Workshop",
      imageUrl: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=500",
      isFree: false
    },
    {
      title: "Cultural Night Malang",
      date: "March 20, 2024",
      time: "07:00 PM",
      location: "Malang City Hall",
      attendees: 234,
      category: "Social",
      imageUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=500",
      isFree: true
    },
    {
      title: "AI & Machine Learning Bootcamp",
      date: "March 22, 2024",
      time: "10:00 AM",
      location: "UB Computer Science Building",
      attendees: 98,
      category: "Workshop",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
      isFree: false,
      isBookmarked: true
    },
    {
      title: "Environmental Awareness Campaign",
      date: "March 25, 2024",
      time: "08:00 AM",
      location: "Malang City Park",
      attendees: 167,
      category: "Social",
      imageUrl: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=500",
      isFree: true
    },
    {
      title: "Photography Exhibition & Contest",
      date: "March 28, 2024",
      time: "01:00 PM",
      location: "Malang Creative Hub",
      attendees: 76,
      category: "Arts",
      imageUrl: "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=500",
      isFree: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Events</h2>
        <p className="text-gray-600">Discover the most popular events happening in Malang for students</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          Load More Events
        </button>
      </div>
    </div>
  );
}