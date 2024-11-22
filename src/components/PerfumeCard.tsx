import React from 'react';
import { Link } from 'react-router-dom';
import { Perfume } from '../types/perfume';

export default function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <Link
      to={`/perfume/${perfume.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-light">Inspired by</p>
          <p className="font-medium">{perfume.inspiredBy}</p>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-serif font-medium text-gray-900">{perfume.name}</h3>
              <p className="text-sm text-gray-500">{perfume.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-900">From</p>
              <p className="text-lg font-medium text-purple-600">{perfume.price.ml30}EGP</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{perfume.description}</p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm text-gray-500">
            <span>👍 {perfume.votes.positive}</span>
            <span>Available in 3 sizes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}