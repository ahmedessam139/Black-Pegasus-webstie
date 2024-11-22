import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Droplets } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615228939096-9ead6c74008e?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Crafting Moments of
              <span className="block text-purple-400">Timeless Elegance</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience the artistry of fine perfumery where each fragrance tells a story of sophistication and grace.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-150"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Why Choose Black Pegasus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We blend tradition with innovation to create exceptional fragrances that capture the essence of luxury perfumery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Feature
              icon={<Star className="h-8 w-8 text-purple-500" />}
              title="Artisanal Craftsmanship"
              description="Each fragrance is meticulously crafted by master perfumers using the finest ingredients."
            />
            <Feature
              icon={<Award className="h-8 w-8 text-purple-500" />}
              title="Timeless Elegance"
              description="Our collections embody sophistication that transcends trends and seasons."
            />
            <Feature
              icon={<Droplets className="h-8 w-8 text-purple-500" />}
              title="Sustainable Luxury"
              description="Committed to ethical sourcing and environmental responsibility in every creation."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Commitment to Excellence</h2>
              <p className="text-gray-600 mb-8">
                At Black Pegasus, we believe that luxury should be accessible without compromising on quality. Our fragrances are crafted with the same attention to detail and premium ingredients as the world's most prestigious perfumes.
              </p>
              <ul className="space-y-4">
                {[
                  'Premium quality ingredients sourced globally',
                  'Extensive testing for longevity and sillage',
                  'Eco-friendly packaging and sustainable practices',
                  'Cruelty-free development process'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-purple-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590736969955-71cc94901adf?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Perfume Production"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-serif text-purple-600 mb-1">35+</p>
                <p className="text-gray-600">Unique Fragrances</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}