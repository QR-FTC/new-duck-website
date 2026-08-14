import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import './Outreach.css';

/* ────────────────────────────────────────────────────────────
   DATA CONFIG
──────────────────────────────────────────────────────────── */
const metrics = [
  { value: 3, label: 'Community Programs' },
  { value: 4, label: 'FTC Teams Mentored' },
  { value: 2, label: 'Leading Sponsors' },
];

const communityItems = [
  {
    id: '01',
    tag: 'JFS_OPEN_HOUSE',
    image: '/images/jfs_event.jpg',
    title: 'JFS Open House',
    meta: 'With Quantum Sparks & Evergreen Techatrons',
    body: 'We brought robotics to the local community, letting kids test-drive our robot, Pegasus, hands-on. Made possible by our sponsors, PixleyAI and TryKinect.',
    tags: ['PixleyAI', 'TryKinect'],
  },
  {
    id: '02',
    tag: 'EMERALD_HS_MENTORSHIP',
    image: '/images/emerald.jpg',
    title: 'Emerald High School',
    meta: 'MIT InvenTeams · Samsung Solve for Tomorrow',
    body: 'Mentored their engineering team through our custom codebase, robot subsystems, and design process, giving them a working reference for their MIT InvenTeams and Samsung Solve for Tomorrow submissions.',
    tags: ['MIT InvenTeams', 'Solve for Tomorrow'],
  },
  {
    id: '03',
    tag: 'FOOTHILL_ROCKETRY',
    image: '/images/foothill.jpg',
    title: 'Foothill High School Rocketry Club',
    meta: 'Applied Physics Workshop',
    body: 'Hosted a free workshop connecting robotics to aerospace, covering the physics of efficiency and altitude for the American Rocketry Challenge. In exchange, the club reviewed our robot and offered design suggestions.',
    tags: ['American Rocketry Challenge'],
  },
];

const ftcItems = [
  {
    number: '25781',
    name: 'Voltage Vanguard',
    tag: 'VOLTAGE_VANGUARD',
    image: '/images/voltage.jpg',
    format: 'In-Person Workshop',
    body: 'Held a hands-on session on rack and pinion transfer mechanisms after Voltage Vanguard ran into build issues. We assisted with their mechanism and traded notes on rapid iteration.',
  },
  {
    number: '3470',
    name: 'The Patriots',
    tag: 'THE_PATRIOTS',
    image: '/images/patriots.jpg',
    format: 'Virtual Design Review',
    body: 'Reviewed autonomous and tele-op design over a call. Advised repositioning their lift motor toward the back of the chassis to improve weight distribution and reduce load on the drivetrain.',
  },
  {
    number: '16234',
    name: 'Tekriot',
    tag: 'TEKRIOT',
    image: '/images/tekriot.jpg',
    format: 'Design Critique',
    body: 'Presented our design process to each other and traded feedback on major mechanisms, strengthening both robots ahead of competition.',
  },
  {
    number: '23524',
    name: 'Robusta',
    tag: 'ROBUSTA',
    image: '/images/robusta.jpg',
    format: 'Portfolio Exchange',
    body: 'Shared engineering portfolios and outreach strategy, and discussed how each team iterates on design after on-field failure.',
  },
];

/* ────────────────────────────────────────────────────────────
   ODOMETER COUNTER 
──────────────────────────────────────────────────────────── */
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(node);
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function Counter({ value, label }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const duration = 1500;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div className="outreach__metric" ref={ref}>
      <span className="outreach__metric-value">{display}</span>
      <span className="outreach__metric-label">{label}</span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────────────────── */
export default function Outreach() {
  
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

  return (
    <main className="outreach-page">
      
      {/* ── HEADER ── */}
      <header className="outreach__header container reveal">
        <span className="outreach__eyebrow delay-1">TEAM 30473 — OUTREACH</span>
        <h1 className="outreach__title delay-2">
          Beyond the <span className="text-yellow">Competition Floor</span>
        </h1>
        <p className="outreach__intro text-muted delay-3">
          A record of the programs, schools, and FTC teams we worked alongside this
          season — where we taught, where we learned, and what came out of it.
        </p>
      </header>

      {/* ── METRICS DASHBOARD ── */}
      <section className="outreach__metrics-section container reveal delay-4">
        <div className="outreach__metrics-row hover-card">
          {metrics.map((m) => (
            <Counter key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      </section>

      {/* ── COMMUNITY IMPACT ── */}
      <section className="outreach__section container">
        <div className="outreach__section-head reveal">
          <h2>Community &amp; STEM Impact</h2>
          <span className="outreach__count">03 PROGRAMS</span>
        </div>

        <div className="outreach__grid">
          {communityItems.map((item, i) => (
            <article key={item.id} className="outreach__card hover-card reveal" data-reverse={i % 2 === 1 ? 'true' : 'false'} style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
              
              <div className="outreach__card-image-wrapper">
                <img src={item.image} alt={item.title} className="outreach__card-image" loading="lazy" onError={(e) => e.target.src="https://via.placeholder.com/600x400/111111/F5C400?text=IMAGE+MISSING"} />
                <span className="outreach__card-img-tag">{item.tag}</span>
              </div>
              
              <div className="outreach__card-content">
                <div className="outreach__card-header">
                  <span className="outreach__card-index">{item.id}</span>
                  <h3 className="outreach__card-title text-yellow">{item.title}</h3>
                </div>
                <span className="outreach__card-meta">{item.meta}</span>
                <p className="outreach__card-body">{item.body}</p>
                
                {item.tags && (
                  <ul className="outreach__pill-list">
                    {item.tags.map((t) => (
                      <li className="outreach__pill" key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FTC TEAM COLLABS ── */}
      <section className="outreach__section container" style={{ marginBottom: '8rem' }}>
        <div className="outreach__section-head reveal">
          <h2>FTC Team Collaborations</h2>
          <span className="outreach__count">04 TEAMS</span>
        </div>

        <div className="outreach__ftc-grid">
          {ftcItems.map((item, i) => (
            <article key={item.name} className="outreach__ftc-card hover-card reveal" style={{ transitionDelay: `${(i % 4) * 100}ms` }}>
              <div className="outreach__image outreach__image--thumb">
                <img
                  className="outreach__image-img"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => e.target.src="https://via.placeholder.com/150x150/111111/F5C400?text=LOGO"}
                />
              </div>
              <div className="outreach__ftc-body">
                <div className="outreach__ftc-heading">
                  <div className="outreach__ftc-title-group">
                    <h3>{item.name}</h3>
                    <span className="outreach__ftc-badge text-yellow">#{item.number}</span>
                  </div>
                  <span className="outreach__ftc-format">{item.format}</span>
                </div>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}