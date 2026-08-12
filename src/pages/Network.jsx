import React, { useState } from 'react';
import './Network.css';

/* ── Network Data ──────────────────────────────────────── */

const networkTeams = [
  {
    id:     'team-voltage-vanguards',
    number: 25781,
    name:   'Voltage Vanguards',
    tag:    'POWERHOUSE',
    location: 'Bay Area, CA',
    accentColor: '#00cfff',
    glowColor: 'rgba(0, 207, 255, 0.3)',
    logo: 'https://via.placeholder.com/120x120/0d1a2a/00cfff?text=VV',
    stats: [
      { label: 'League Rank', val: '#2'     },
      { label: 'Avg Score',   val: '218 pts' },
      { label: 'Wins',        val: '14'      },
    ],
    bio: 'A precision-focused team known for their ultra-consistent autonomous routines and flawless driver control. Voltage Vanguards are a top-2 alliance pick at every regional they enter.',
    skills: ['Autonomous', 'Alliance Selection', 'Outreach'],
    achievements: ['Inspire Award', 'Connect Award Finalist'],
  },
  {
    id:     'team-tekriot',
    number: 16234,
    name:   'TEKRIOT',
    tag:    'INNOVATORS',
    location: 'Silicon Valley, CA',
    accentColor: '#ff4d4d',
    glowColor: 'rgba(255, 77, 77, 0.3)',
    logo: 'https://via.placeholder.com/120x120/1a0d0d/ff4d4d?text=TR',
    stats: [
      { label: 'League Rank', val: '#5'     },
      { label: 'Avg Score',   val: '196 pts' },
      { label: 'Wins',        val: '11'      },
    ],
    bio: 'TEKRIOT pushes the engineering envelope every season — their custom intake mechanisms and rapid prototyping cycles make them one of the most technically impressive teams in the region.',
    skills: ['Mechanical Design', 'CAD', 'Programming'],
    achievements: ['Think Award', 'Innovate Award'],
  },
  {
    id:     'team-robusta',
    number: 23524,
    name:   'Robusta',
    tag:    'STRATEGISTS',
    location: 'East Bay, CA',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.3)',
    logo: 'https://via.placeholder.com/120x120/130d1a/a855f7?text=RB',
    stats: [
      { label: 'League Rank', val: '#7'     },
      { label: 'Avg Score',   val: '182 pts' },
      { label: 'Wins',        val: '9'       },
    ],
    bio: 'Robusta are master strategists — their scouting system and match analysis is second to none. They consistently put their alliance in a winning position through smart field awareness and match coordination.',
    skills: ['Strategy', 'Scouting', 'Alliance Coordination'],
    achievements: ['Judges Award', 'Think Award Finalist'],
  },
  {
    id:     'team-patriots',
    number: 3470,
    name:   'Patriots',
    tag:    'VETERANS',
    location: 'Dublin, CA',
    accentColor: '#22d3a4',
    glowColor: 'rgba(34, 211, 164, 0.3)',
    logo: 'https://via.placeholder.com/120x120/0d1a16/22d3a4?text=PAT',
    stats: [
      { label: 'League Rank', val: '#1'     },
      { label: 'Avg Score',   val: '231 pts' },
      { label: 'Wins',        val: '16'      },
    ],
    bio: 'One of the most decorated programs in the league, Patriots have been competing since the early days of FTC. Their mentorship culture, engineering journal, and community presence are the gold standard.',
    skills: ['All-Around', 'Mentorship', 'Engineering Docs'],
    achievements: ['Inspire Award', 'Motivate Award', 'Winning Alliance'],
  },
];

/* ── Team Card Component ─────────────────────────────── */

function TeamCard({ team, staggerIndex }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    '--team-accent': team.accentColor,
    '--team-glow':   team.glowColor,
    animationDelay:  `${staggerIndex * 0.12}s`,
  };

  return (
    <article
      className={`network-card ${hovered ? 'network-card--hovered' : ''}`}
      id={team.id}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Team ${team.name}, number ${team.number}`}
    >
      {/* Top accent bar */}
      <div className="network-card__accent-bar" aria-hidden="true" />

      {/* Corner tag */}
      <div className="network-card__corner-tag" aria-hidden="true">{team.tag}</div>

      {/* Header */}
      <div className="network-card__header">
        <div className="network-card__logo-wrap">
          <img
            src={team.logo}
            alt={`${team.name} team logo placeholder`}
            className="network-card__logo"
            width="72"
            height="72"
            loading="lazy"
          />
        </div>
        <div className="network-card__identity">
          <div className="network-card__number">#{team.number}</div>
          <h2 className="network-card__name headline headline-sm">{team.name}</h2>
          <p className="network-card__location">📍 {team.location}</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="network-card__stats">
        {team.stats.map(({ label, val }) => (
          <div key={label} className="network-card__stat">
            <span className="network-card__stat-val">{val}</span>
            <span className="network-card__stat-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Bio */}
      <p className="network-card__bio">{team.bio}</p>

      {/* Skills */}
      <div className="network-card__skills" aria-label="Team strengths">
        {team.skills.map(s => (
          <span key={s} className="network-card__skill">{s}</span>
        ))}
      </div>

      {/* Achievements */}
      <div className="network-card__achievements">
        {team.achievements.map(a => (
          <div key={a} className="network-card__achievement">
            <span aria-hidden="true">🏆</span> {a}
          </div>
        ))}
      </div>

      {/* Hover glow pulse */}
      <div className="network-card__glow-ring" aria-hidden="true" />
    </article>
  );
}

/* ── Page Export ─────────────────────────────────────────── */

export default function Network() {
  return (
    <main className="page" id="network-page">

      {/* ── Page Hero ── */}
      <section className="network-hero" aria-labelledby="network-heading">
        <div className="network-hero__bg" aria-hidden="true" />
        <div className="network-hero__lines" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="network-hero__line" style={{ animationDelay: `${i * 0.4}s` }} />
          ))}
        </div>

        <div className="container network-hero__content">
          <p className="label-tag animate-fadeInUp">◈ Alliance Network · FTC</p>
          <h1
            id="network-heading"
            className="headline headline-lg network-hero__title animate-fadeInUp delay-1"
          >
            Our <span className="text-yellow">FTC Network</span>
          </h1>
          <p className="network-hero__sub text-muted animate-fadeInUp delay-2">
            The teams we've trained alongside, competed with, and learned from. Each one raises the bar in their own way.
          </p>

          <div className="network-hero__count animate-fadeInUp delay-3">
            <div className="network-hero__count-num">{networkTeams.length}</div>
            <div className="network-hero__count-label">Partner Teams</div>
          </div>
        </div>
      </section>

      {/* ── Roster Grid ── */}
      <section className="network-roster section" aria-label="FTC Partner Team Roster">
        <div className="container">
          <div className="section-label" style={{ marginBottom: '3rem' }}>
            <span className="label-tag">Alliance Partners & Rivals</span>
          </div>

          <div className="network-roster__grid">
            {networkTeams.map((team, i) => (
              <TeamCard key={team.id} team={team} staggerIndex={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Join Network CTA ── */}
      <section className="network-join section" aria-labelledby="join-heading">
        <div className="network-join__bg" aria-hidden="true" />
        <div className="container network-join__content">
          <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Connect With Us</p>
          <h2 id="join-heading" className="headline headline-md" style={{ marginBottom: '1rem' }}>
            Want to Join the <span className="text-yellow">Network?</span>
          </h2>
          <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Duck 30473 is always looking to connect with like-minded FTC teams for scrimmages, strategy sessions, and joint outreach events.
          </p>
          <a
            href="mailto:duck30473@example.com"
            className="btn btn-primary"
            id="network-cta-contact"
          >
            ✉ Reach Out to Us
          </a>
        </div>
      </section>

    </main>
  );
}
