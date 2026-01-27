import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#work" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="text-xl font-black tracking-tighter text-white">REMAP STUDIO</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[15px] uppercase tracking-[0.2em] font-semibold text-zinc-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors uppercase">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button 
          onClick={() => navigate('/contact')}
          className="hidden md:block bg-white cursor-pointer text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all uppercase tracking-wider"
        >
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </>
  );
};