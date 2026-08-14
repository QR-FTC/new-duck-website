import React, { useState, useEffect } from 'react';
import './Home.css';
import './Sponsors.css';

// 1. We import the images directly so React is forced to bundle them perfectly.
import pixleyLogo from '../assets/pixley.png';
import kinectLogo from '../assets/kinect.png';
import quantumLogo from '../assets/quantum.png';
import gobildaLogo from '../assets/gobilda.png';
import onshapeLogo from '../assets/onshape.png';
import baseLogo from '../assets/base-logo.png';
import riseLogo from '../assets/risefnd.png';

/* ==========================================================
   SPONSOR DATA
========================================================== */
const PLATINUM_SPONSORS = [
  {
    id: 'pixley',
    name: 'Pixley AI',
    logo: pixleyLogo,
    desc: "Pixley AI is a generative AI platform dedicated to giving children aged 2-8 healthy screentime by co-creating AI cartoons for the child, with multiple safeguards installed for the child's absolute safety. They provide us with support and guidance.",
    url: '#',
  },
  {
    id: 'kinect',
    name: 'Kinect',
    logo: kinectLogo,
    desc: 'Kinect is an AI-powered conversational commerce platform that transforms static e-commerce product pages into an intelligent shopping experience. They provide us with support and guidance.',
    url: '#',
  },
  {
    id: 'quantum',
    name: 'Quantum Robotics',
    logo: quantumLogo,
    desc: 'Quantum Robotics is a youth development program that teaches kids skills in STEM in the robotics programs FLL and FTC. Currently, they have 4 FTC teams and 3 FLL teams. They provide us with financial support, resources, and guidance.',
    url: '#',
  },
  {
    id: 'rise',
    name: 'RISE Foundation',
    logo: riseLogo,
    desc: 'RISE Foundation coordinates funding and provides nonprofit backing for our team, ensuring that every contribution goes directly into the robot, the students, and our outreach programs.',
    url: '#',
  },
  {
    id: 'base',
    name: 'BASE Robotics',
    logo: baseLogo,
    desc: 'BASE Robotics supports our core mission by providing educational course offerings, curriculum development, and expanded access to STEM resources throughout the community.',
    url: '#',
  }
];

const GOLD_SPONSORS = [
  {
    id: 'gobilda',
    name: 'goBILDA',
    logo: gobildaLogo,
    desc: 'goBILDA is a company that provides FTC parts to different FTC teams. They support us by giving us discounted rates on the majority of their products.',
    url: '#',
  },
  {
    id: 'onshape',
    name: 'Onshape',
    logo: onshapeLogo,
    desc: 'Onshape is a CAD (Computer Aided Design) platform used by millions of engineers. They support us with the platform used to design and bring our ideas to life.',
    url: '#',
  }
];

/* ==========================================================
   MODAL COMPONENT
========================================================== */
function SponsorModal({ sponsor, onClose }) {
  if (!sponsor) return null;

  return (
    <div className="sponsor-modal-overlay" onClick={onClose}>
      <div className="sponsor-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="sponsor-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h3 className="sponsor-modal-title">{sponsor.name}</h3>
        <p className="sponsor-modal-desc">{sponsor.desc}</p>
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="btn sponsor-modal-btn">
          Visit Website
        </a>
      </div>
    </div>
  );
}

/* ==========================================================
   PAGE COMPONENT
========================================================== */
export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  // Global Engine: Animates anything with className="reveal"
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

  // Lock scrolling when modal is open
  useEffect(() => {
    if (selectedSponsor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedSponsor]);

  return (
    <main className="page" id="sponsors-page">
      
      {/* === Hero === */}
      <section className="sponsor-hero">
        <div className="sponsor-hero__grid" aria-hidden="true" />
        <div className="container sponsor-hero__inner">
          <span className="label-tag reveal">Team 30473 Partners</span>
          <h1 className="headline headline-lg reveal delay-1">
            Powered by the <span className="text-yellow">people who believe.</span>
          </h1>
          <p className="text-muted reveal delay-2 sponsor-hero__sub">
            Every championship robot is kept afloat by an amazing flock. Ours is backed by industry leaders, local businesses, and community organizations, all helping us build, code, and compete at our highest level.
          </p>
        </div>
      </section>

      {/* === Why Sponsor (ROI) === */}
      <section className="sponsor-roi section">
        <div className="container">
          <div className="section-label reveal">
            <span className="label-tag">What you get back</span>
          </div>
          <h2 className="headline headline-md reveal delay-1 sponsor-roi__heading">
            Sponsoring Team 30473 isn't charity. It is an <span className="text-yellow">investment.</span>
          </h2>
          
          <div className="sponsor-roi__grid">
            <div className="roi-card hover-card reveal delay-1">
              <h3 className="roi-card__title text-yellow">Community Impact</h3>
              <p className="roi-card__desc">
                Robotics is notoriously expensive, but your sponsorship ensures that eager students aren't priced out. By funding free STEM education, robot parts, and mentorship, you are directly investing in the problem solvers and leaders of tomorrow.
              </p>
            </div>
            <div className="roi-card hover-card reveal delay-2">
              <h3 className="roi-card__title text-yellow">Networking & Visibility</h3>
              <p className="roi-card__desc">
                Connect with a highly targeted demographic of tech oriented families. Sponsoring places your brand directly alongside established industry names while introducing your company early to a pipeline of next generation talent and future interns.
              </p>
            </div>
            <div className="roi-card hover-card reveal delay-3">
              <h3 className="roi-card__title text-yellow">Premium Brand Placement</h3>
              <p className="roi-card__desc">
                Gain prime visibility at every FIRST Tech Challenge competition. Sponsorship perks include featuring your company's logo directly on our competition robots, official team shirts, and our website, showcasing your brand to thousands of attendees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Sponsorship Tiers === */}
      <section className="sponsor-tiers section">
        <div className="container">
          <div className="sponsor-tiers__header reveal">
            <h2 className="headline headline-md">Robotics Sponsorship Tiers</h2>
            <p className="text-muted">Choose the level of impact that aligns best with your organization. Every contribution directly funds our robotics programs.</p>
          </div>

          <div className="sponsor-tiers__grid">
            <div className="tier-card tier-card--gold reveal delay-1">
              <h3 className="tier-card__title text-yellow">Gold Sponsor</h3>
              <div className="tier-card__price text-yellow">$500+</div>
              <p className="tier-card__desc">
                Logo placement on our website's sponsor page and a dedicated thank you post on our social media platforms.
              </p>
            </div>
            <div className="tier-card tier-card--platinum reveal delay-2">
              <div className="tier-badge">Highest Impact</div>
              <h3 className="tier-card__title text-platinum">Platinum Sponsor</h3>
              <div className="tier-card__price text-platinum">$1000+</div>
              <p className="tier-card__desc">
                Premium logo placement on our competition robot, official team shirts, and website, plus dedicated social media shoutouts and event invitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Current Sponsors Grid === */}
      <section className="sponsor-grid-section section">
        <div className="container">
          
          {/* Platinum Tier */}
          <div className="sponsor-tier-group reveal">
            <h3 className="sponsor-tier-heading text-platinum">Platinum Sponsors</h3>
            <div className="sponsor-grid">
              {PLATINUM_SPONSORS.map((sponsor, i) => (
                <div 
                  key={sponsor.id} 
                  className="sponsor-box sponsor-box--platinum reveal" 
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setSelectedSponsor(sponsor)}
                >
                  <div className="sponsor-box__logo-wrap">
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-box__logo" />
                  </div>
                  <h4 className="sponsor-box__name">{sponsor.name}</h4>
                  <span className="sponsor-box__prompt">Click to learn more</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div className="sponsor-tier-group reveal">
            <h3 className="sponsor-tier-heading text-yellow">Gold Sponsors</h3>
            <div className="sponsor-grid">
              {GOLD_SPONSORS.map((sponsor, i) => (
                <div 
                  key={sponsor.id} 
                  className="sponsor-box sponsor-box--gold reveal" 
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setSelectedSponsor(sponsor)}
                >
                  <div className="sponsor-box__logo-wrap">
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-box__logo" />
                  </div>
                  <h4 className="sponsor-box__name">{sponsor.name}</h4>
                  <span className="sponsor-box__prompt">Click to learn more</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* === Footer CTA === */}
      <section className="sponsor-cta section">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 className="headline headline-md" style={{ marginBottom: '2rem' }}>
            Join the <span className="text-yellow">flock.</span>
          </h2>
          <button className="btn btn-primary">
            Become a Sponsor
          </button>
        </div>
      </section>

      {/* === Modal === */}
      <SponsorModal 
        sponsor={selectedSponsor} 
        onClose={() => setSelectedSponsor(null)} 
      />

    </main>
  );
}