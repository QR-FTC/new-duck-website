import React from 'react';
import { Link } from 'react-router-dom';
import './TechSpecs.css';

/* ──────────────────────────────────────────────────────────
   SPEC DATA
────────────────────────────────────────────────────────── */

const specs = {
  mechanical: [
    { label: 'Drive Configuration', value: 'Mecanum 4-Wheel Drive',          icon: '⚙️' },
    { label: 'Frame Material',      value: 'CNC-Machined 6061 Aluminum',      icon: '🔧' },
    { label: 'Weight (Drive Base)', value: '≈ 7.8 kg',                        icon: '⚖️' },
    { label: 'Wheel Diameter',      value: '96mm goBILDA Mecanum',            icon: '🔵' },
    { label: 'Linear Actuator',     value: 'Dual-stage lead screw lift',      icon: '📐' },
    { label: 'Claw Mechanism',      value: 'Servo-driven compliant gripper',  icon: '🤖' },
  ],
  software: [
    { label: 'Language',            value: 'Java (OpenJDK 11)',                  icon: '☕' },
    { label: 'Framework',           value: 'NextFTC v2.x',                       icon: '📦' },
    { label: 'Pathing Library',     value: 'Pedro Pathing',                      icon: '🗺️' },
    { label: 'Localization',        value: 'Pedro Pathing — Two-Wheel Odometry', icon: '📡' },
    { label: 'PID Tuning',          value: 'Dashboard via FTC Telemetry',        icon: '📊' },
    { label: 'Vision',              value: 'April Tag + TFOD Pipeline',           icon: '👁️' },
  ],
  electronics: [
    { label: 'Control Hub',         value: 'REV Robotics Control Hub 1.1',   icon: '🔌' },
    { label: 'Expansion Hub',       value: 'REV Robotics Expansion Hub',      icon: '🔋' },
    { label: 'Drive Motors',        value: 'goBILDA 5202 Yellow Jacket',      icon: '⚡' },
    { label: 'Servos',              value: 'Axon Mini + REV Smart Servo',     icon: '🎛️' },
    { label: 'Battery',             value: '12V 5200mAh Li-Ion',              icon: '🔋' },
    { label: 'Camera',              value: 'Limelight 3A',                    icon: '📷' },
  ],
};

const specCategories = [
  { key: 'mechanical',  label: 'Mechanical Systems',   tag: 'MECH' },
  { key: 'software',    label: 'Software Architecture', tag: 'SW'   },
  { key: 'electronics', label: 'Electronics & Control', tag: 'ELEC' },
];

/* ──────────────────────────────────────────────────────────
   SOFTWARE STACK CALLOUT — Java · NextFTC · Pedro Pathing
────────────────────────────────────────────────────────── */

const swPillars = [
  {
    id:    'pillar-java',
    icon:  '☕',
    name:  'Java',
    desc:  'All robot code is written in Java (OpenJDK 11). No other languages are used in our codebase — giving us maximum FTC ecosystem compatibility and long-term maintainability.',
  },
  {
    id:    'pillar-nextftc',
    icon:  '📦',
    name:  'NextFTC',
    desc:  'Our command-based control architecture. NextFTC gives us a clean, composable API for subsystems, commands, and state machines — all in Java. Teleop and autonomous sequences are expressed as declarative command groups.',
  },
  {
    id:    'pillar-pedro',
    icon:  '🗺️',
    name:  'Pedro Pathing',
    desc:  'We use Pedro Pathing for all autonomous trajectory generation, motion profiling, and localization. Its two-wheel odometry pod system gives us accurate field-relative positioning to ±2 cm per traversal, enabling reliable multi-cycle autonomous routines.',
  },
];

function SoftwareCallout() {
  return (
    <section
      className="sw-callout section"
      aria-labelledby="sw-callout-heading"
    >
      <div className="container">
        <div className="section-label">
          <span className="label-tag">Software Stack</span>
        </div>
        <h2
          id="sw-callout-heading"
          className="headline headline-md sw-callout__title"
        >
          Java · NextFTC · <span className="text-yellow">Pedro Pathing</span>
        </h2>
        <p className="sw-callout__sub text-muted">
          Our entire software stack is Java-first. We use the NextFTC command-based
          framework for all teleop and subsystem logic, and Pedro Pathing for
          advanced trajectory generation, motion profiling, and two-wheel odometry
          localization across all autonomous routines.
        </p>

        <div className="sw-callout__pillars">
          {swPillars.map(({ id, icon, name, desc }) => (
            <div key={id} id={id} className="sw-callout__pillar card">
              <span className="sw-callout__pillar-icon" aria-hidden="true">{icon}</span>
              <h3 className="sw-callout__pillar-name headline headline-sm">{name}</h3>
              <p className="sw-callout__pillar-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SPEC TABLE
────────────────────────────────────────────────────────── */

function SpecTable({ category }) {
  const rows = specs[category.key];
  return (
    <div className="spec-table" id={`spec-table-${category.key}`}>
      <div className="spec-table__header">
        <span className="label-tag">{category.tag}</span>
        <h3 className="headline headline-sm spec-table__title">{category.label}</h3>
      </div>
      <div className="spec-table__rows">
        {rows.map(({ label, value, icon }) => (
          <div key={label} className="spec-row">
            <span className="spec-row__icon" aria-hidden="true">{icon}</span>
            <span className="spec-row__label">{label}</span>
            <span className="spec-row__value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PAGE EXPORT
────────────────────────────────────────────────────────── */

export default function TechSpecs() {
  return (
    <main className="page" id="tech-specs-page">

      {/* ── Page Hero ── */}
      <section className="techspecs-hero" aria-labelledby="techspecs-heading">
        <div className="techspecs-hero__bg" aria-hidden="true" />
        <div className="container techspecs-hero__content">
          <div className="section-label">
            <span className="label-tag">30473 / Technical Documentation</span>
          </div>
          <h1
            id="techspecs-heading"
            className="headline headline-lg techspecs-hero__title"
          >
            Robot <span className="text-yellow">Tech Specs</span>
          </h1>
          <p className="techspecs-hero__sub text-muted">
            Full engineering breakdown of Duck 30473's competition robot — from
            drivetrain geometry to Pedro Pathing autonomous trajectories and vision pipelines.
          </p>
        </div>
        <div className="techspecs-hero__cut" aria-hidden="true" />
      </section>

      {/* ── Robot Overview ── */}
      <section
        className="techspecs-overview section"
        aria-labelledby="overview-heading"
      >
        <div className="container">
          <div className="techspecs-overview__grid">
            <div className="techspecs-overview__img-wrap">
              <img
                src="https://via.placeholder.com/560x420/0f172a/F5C400?text=ROBOT+OVERVIEW"
                alt="Team Duck 30473 full robot overview placeholder"
                className="techspecs-overview__img"
                loading="lazy"
                width="560"
                height="420"
              />
              <div className="techspecs-overview__callout" aria-hidden="true">
                <span className="techspecs-overview__callout-num">v4.2</span>
                <span className="techspecs-overview__callout-label">Competition Build</span>
              </div>
            </div>

            <div className="techspecs-overview__text">
              <h2 id="overview-heading" className="headline headline-md">
                The <span className="text-yellow">Duck Bot</span> — Season Overview
              </h2>
              <p className="text-muted techspecs-overview__body">
                The Duck Bot v4.2 is our most competitive machine to date. Built around
                a mecanum drive chassis with full field-centric control, it pairs tight
                mechanical tolerances with a Java software stack powered by{' '}
                <strong className="text-white">NextFTC</strong> for command-based teleop
                and{' '}
                <strong className="text-yellow">Pedro Pathing</strong> for advanced
                trajectory generation, motion profiling, and two-wheel odometry localization.
              </p>
              <div className="techspecs-overview__highlights">
                {[
                  ['Autonomous Cycles', '4+ per 30s'],
                  ['Max Lift Height',   '920mm'],
                  ['Localization Error', '< ±2cm'],
                  ['Teleop Top Speed',  '1.4 m/s'],
                ].map(([k, v]) => (
                  <div key={k} className="techspecs-overview__highlight">
                    <span className="techspecs-overview__highlight-val">{v}</span>
                    <span className="techspecs-overview__highlight-key">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Software Stack Callout ── */}
      <SoftwareCallout />

      {/* ── Spec Tables ── */}
      <section
        className="techspecs-tables section"
        aria-label="Technical specifications tables"
      >
        <div className="container">
          <div className="techspecs-tables__grid">
            {specCategories.map((cat) => (
              <SpecTable key={cat.key} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Artifacts ── */}
      <section
        className="techspecs-previews section"
        aria-label="Engineering media previews"
      >
        <div className="container">
          <div className="section-label">
            <span className="label-tag">Engineering Media</span>
          </div>
          <h2 className="headline headline-md" style={{ marginBottom: '2rem' }}>
            Design <span className="text-yellow">Artifacts</span>
          </h2>
          <div className="techspecs-previews__grid">
            {[
              { label: 'CHASSIS / TOP VIEW',    w: 600, h: 380 },
              { label: 'LIFT ASSEMBLY / SIDE',  w: 600, h: 380 },
              { label: 'WIRING DIAGRAM',         w: 600, h: 380 },
              { label: 'PEDRO PATHING AUTO PATH', w: 600, h: 380 },
            ].map(({ label, w, h }) => (
              <div
                key={label}
                className="techspecs-preview-card"
                id={`preview-${label.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <img
                  src={`https://via.placeholder.com/${w}x${h}/0f172a/F5C400?text=${encodeURIComponent(label)}`}
                  alt={`${label} engineering diagram placeholder`}
                  loading="lazy"
                  width={w}
                  height={h}
                />
                <p className="techspecs-preview-card__label label-tag">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="techspecs-footer-cta section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="label-tag" style={{ marginBottom: '1rem' }}>Explore More</p>
          <h2
            className="headline headline-md"
            style={{ marginBottom: '2rem' }}
          >
            See Our <span className="text-yellow">Competition Record</span>
          </h2>
          <Link
            to="/history"
            className="btn btn-primary"
            id="techspecs-cta-history"
          >
            View Competition History →
          </Link>
        </div>
      </section>

    </main>
  );
}
