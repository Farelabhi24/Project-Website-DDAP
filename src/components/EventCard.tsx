import React from 'react';
import { Calendar, MapPin, Users, Bookmark } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: string;
  imageUrl: string;
  isFree: boolean;
  isBookmarked?: boolean;
}

export function EventCard({ 
  title, 
  date, 
  time, 
  location, 
  attendees, 
  category, 
  imageUrl, 
  isFree,
  isBookmarked = false 
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
            {category}
          </span>
        </div>
        <button className={`absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-colors ${isBookmarked ? 'text-blue-600' : 'text-gray-600'}`}>
          <Bookmark className="h-4 w-4" fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>
        {isFree && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Free
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>{date} • {time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            <span>{attendees} students interested</span>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Register Now
        </button>
      </div>
    </div>
  );
}