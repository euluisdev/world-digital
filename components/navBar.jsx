import React, { useState, useEffect } from 'react';
import './navBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <img
            src="./img/world-digital-logo01.png"
            alt="Logo"
            className="logoImage"
          />
          World Digital
        </div>

        <div
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
        </div>

        <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-close" onClick={toggleMenu}>
            <div className="close-icon"></div>
          </div>

          <a href="#home">Home</a>
          <a href="#services">Serviços</a>
          <a href="#features">Diferenciais</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


 
 
 
 
 