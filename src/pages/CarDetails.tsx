import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cars } from '../data/cars';

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Car not found</h2>
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
            <p className="text-gray-400 text-lg mb-6">{car.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced color-changing technology</li>
                  <li>• Real-time environmental adaptation</li>
                  <li>• Premium interior finish</li>
                  <li>• State-of-the-art performance</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Dynamic color customization</li>
                  <li>• Smart ambient lighting</li>
                  <li>• Advanced driver assistance</li>
                  <li>• Premium sound system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};