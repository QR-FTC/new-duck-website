import React, { useEffect } from 'react';
import './Home.css';

// 1. Import the new Pedro Pathing image directly from assets
import pedroPath from '../assets/pedro_path.png';

export default function TechSpecs() {
  
  // Optional: Scroll reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealOnScroll.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.10, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => revealOnScroll.observe(reveal));
    return () => revealOnScroll.disconnect();
  }, []);

  return (
    <main className="page" id="tech-specs-page">
      <section className="section">
        <div className="container">
          
          {/* Main 2x2 Grid */}
          <div className="specs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '2rem',
            paddingTop: '2rem'
          }}>

            {/* 1. Chassis */}
            <div className="spec-card reveal" style={cardStyle}>
              <img 
                src="" 
                alt="CHASSIS TOP VIEW engineering diagram placeholder" 
                style={imgStyle}
              />
              <div style={labelStyle}>CHASSIS / TOP VIEW</div>
            </div>

            {/* 2. Vision System & Sensor Array */}
            <div className="spec-card reveal delay-1" style={cardStyle}>
              <img 
                src="" 
                alt="VISION SYSTEM AND SENSOR ARRAY engineering diagram placeholder" 
                style={imgStyle}
              />
              <div style={labelStyle}>VISION SYSTEM & SENSOR ARRAY</div>
            </div>

            {/* 3. Wiring Diagram */}
            <div className="spec-card reveal" style={cardStyle}>
              <img 
                src="" 
                alt="WIRING DIAGRAM engineering diagram placeholder" 
                style={imgStyle}
              />
              <div style={labelStyle}>WIRING DIAGRAM</div>
            </div>

            {/* 4. Pedro Pathing Auto Path */}
            <div className="spec-card reveal delay-1" style={cardStyle}>
              <img 
                src={pedroPath} 
                alt="Pedro Pathing Auto Path engineering diagram" 
                style={imgStyle}
              />
              <div style={labelStyle}>PEDRO PATHING AUTO PATH</div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

/* ==========================================================
   INLINE STYLES
========================================================== */
const cardStyle = {
  backgroundColor: 'var(--bg-card, #121826)', 
  border: '1px solid var(--border-subtle, #1f2937)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '350px', 
  overflow: 'hidden',
  position: 'relative'
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  flexGrow: 1,
  color: '#64748b', 
  padding: '1.5rem'
};

const labelStyle = {
  color: 'var(--yellow, #F5C400)',
  fontFamily: 'var(--font-mono, monospace)',
  fontSize: '0.85rem',
  fontWeight: '600',
  letterSpacing: '0.05em',
  padding: '1rem 1.5rem',
  textTransform: 'uppercase',
  borderTop: '1px solid var(--border-subtle, #1f2937)' 
};