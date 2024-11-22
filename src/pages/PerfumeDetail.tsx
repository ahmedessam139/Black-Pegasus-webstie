import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
import perfumeData from '../data/perfumes.json';
import { Perfume } from '../types/perfume';

export default function PerfumeDetail() {
  const { id } = useParams();
  const perfume = perfumeData.perfumes.find(p => p.id === id) as Perfume | undefined;

  if (!perfume) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Perfume not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/catalog"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-serif text-gray-900 mb-2">
              {perfume.name}
            </h1>
            <p className="text-purple-600 mb-2">{perfume.category}</p>
            <div className="mb-6">
              <p className="text-sm text-gray-500">Inspired by</p>
              <p className="text-lg font-medium">{perfume.inspiredBy}</p>
          
            </div>
            <p className="text-gray-600 mb-8">{perfume.description}</p>

            <div className="mb-8">
              <h2 className="text-xl font-serif text-gray-900 mb-4">
                Fragrance Notes
              </h2>
              <div className="space-y-4">
                <NoteSection title="Top Notes" notes={perfume.notes.top} />
                <NoteSection title="Heart Notes" notes={perfume.notes.middle} />
                <NoteSection title="Base Notes" notes={perfume.notes.base} />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-serif text-gray-900 mb-4">
                Sizes & Prices
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {Object.keys(perfume.price).map(size => (
                  <PriceCard key={size} size={size} price={perfume.price[size]} />
                ))}
                
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif text-gray-900 mb-4">
                Community Feedback
              </h2>
              <div className="flex space-x-8">
                <VoteCount
                  icon={<ThumbsUp className="h-5 w-5 text-green-500" />}
                  count={perfume.votes.positive}
                  label="Positive"
                />
                <VoteCount
                  icon={<Minus className="h-5 w-5 text-gray-500" />}
                  count={perfume.votes.neutral}
                  label="Neutral"
                />
                <VoteCount
                  icon={<ThumbsDown className="h-5 w-5 text-red-500" />}
                  count={perfume.votes.negative}
                  label="Negative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoteSection({ title, notes }: { title: string; notes: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {notes.map(note => (
          <span
            key={note}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}

function PriceCard({ size, price }: { size: string; price: number }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg text-center">
      <p className="text-sm text-gray-500 mb-2">{size}</p>
      <p className="text-xl font-medium text-purple-600">{price}EGP</p>
    </div>
  );
}

function VoteCount({ icon, count, label }: { icon: React.ReactNode; count: number; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <div>
        <p className="font-medium">{count}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}