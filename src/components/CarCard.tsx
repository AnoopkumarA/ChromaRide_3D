import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, description, image, link }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
        >
          View Model <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CarCard;