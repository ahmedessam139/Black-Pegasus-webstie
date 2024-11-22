import React from 'react';

export default function Brand() {
  return (
    <div className="pt-16">
      <div className="relative h-[40vh]">
        <img
          src="https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">Our Legacy</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">A Heritage of Excellence</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1985, Black Pegasus has stood as a beacon of luxury in the world of fine perfumery. Our journey began in the heart of Grasse, France, where our founder's passion for exceptional fragrances laid the foundation for what would become a symbol of olfactory excellence.
            </p>
            <p className="text-gray-600">
              Today, we continue to push the boundaries of perfume artistry, combining time-honored techniques with innovative approaches to create fragrances that capture the essence of luxury and sophistication.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800"
              alt="Perfume Creation"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-serif text-gray-900 text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Value
              title="Artisanal Excellence"
              description="Every fragrance is crafted with meticulous attention to detail, ensuring the highest quality in every bottle."
            />
            <Value
              title="Sustainable Luxury"
              description="We believe in responsible luxury, sourcing ingredients ethically and minimizing our environmental impact."
            />
            <Value
              title="Timeless Innovation"
              description="While respecting traditional craftsmanship, we embrace modern techniques to create contemporary classics."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Value({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-serif text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}