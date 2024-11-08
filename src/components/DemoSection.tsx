import React from 'react';
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch how our technology transforms car colors in real-time using computer vision
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000" 
              alt="Demo Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;