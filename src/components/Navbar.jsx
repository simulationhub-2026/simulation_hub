import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن المحرك', path: '/about' },
    { name: 'أساسيات المحاكاة', path: '/basics' },
    { name: 'المحتوى التعليمي', path: '/learning' },
    { name: 'المشاريع', path: '/projects' },
    { name: 'المدونة', path: '/blog' },
    { name: 'الموارد', path: '/resources' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Simulation Hub" className="logo-img" />
          <div className="logo-text">
            <span className="hub">Simulation</span>
            <span className="hub-alt">Hub</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/get-started" className="btn btn-primary btn-sm">
              ابدأ الآن
              <ChevronRight size={16} />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/get-started" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                ابدأ الآن
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
