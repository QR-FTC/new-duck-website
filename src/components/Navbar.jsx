import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/tech-specs', label: 'Tech Specs' },
  { to: '/history',   label: 'Competition History' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  /* Shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">

        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" aria-label="Team Duck 30473 Home">
          <div className="navbar__logo-icon" aria-hidden="true">
            <span className="navbar__logo-duck">🦆</span>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">DUCK</span>
            <span className="navbar__logo-number">30473</span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              id={`nav-link-${label.toLowerCase().replace(/\s/g, '-')}`}
            >
              {label}
              <span className="navbar__link-underline" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>

        {/* ── CTA ── */}
        <Link to="/#support" className="btn btn-primary navbar__cta" id="nav-cta-support">
          Support Us
        </Link>

        {/* ── Hamburger ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          <span className="bar bar-top"    aria-hidden="true" />
          <span className="bar bar-middle" aria-hidden="true" />
          <span className="bar bar-bottom" aria-hidden="true" />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/#support"
          className="btn btn-primary navbar__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Support Us
        </Link>
      </nav>
    </header>
  );
}
