import React, { useState } from 'react';
import PerfumeCard from '../components/PerfumeCard';
import perfumeData from '../data/perfumes.json';
import { Perfume } from '../types/perfume';

type FilterType = 'All' | 'Men' | 'Women' | 'Unisex';

export default function Catalog() {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('All');
  const [companyFilter, setCompanyFilter] = useState('All');

  const filteredPerfumes = perfumeData.perfumes.filter(perfume => {
    const matchesCategory = categoryFilter === 'All' || perfume.category === categoryFilter;
    const matchesCompany = companyFilter === 'All' || perfume.company === companyFilter;
    return matchesCategory && matchesCompany;
  });

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-3xl font-serif text-gray-900 mb-4 md:mb-0">Our Collection</h1>
          <p className="text-gray-600">Discover our premium fragrances inspired by luxury perfumes</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as FilterType)}
                className="w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value="All">All Categories</option>
                {perfumeData.categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <select
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value="All">All Companies</option>
                {perfumeData.companies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPerfumes.map(perfume => (
            <PerfumeCard key={perfume.id} perfume={perfume as Perfume} />
          ))}
        </div>
      </div>
    </div>
  );
}