import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-purple-400" />
            <span className="text-white font-serif text-xl">Black Pegasus</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/brand" current={location.pathname === "/brand"}>Our Brand</NavLink>
            <NavLink to="/catalog" current={location.pathname === "/catalog"}>Collection</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) {
  return (
    <Link
      to={to}
      className={`${
        current
          ? 'text-purple-400 border-purple-400'
          : 'text-gray-300 hover:text-white border-transparent'
      } px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-150`}
    >
      {children}
    </Link>
  );
}