import React, { useState, useEffect, useRef } from 'react';
import './History.css';

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
   Uses IntersectionObserver — no external libraries
═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const SEASONS = [
  {
    id:        'decode',
    index:     '01',
    game:      'DECODE',
    robot:     'Pegasus',
    yearRange: '2024–2025',
    seasonTag: 'COMPLETED SEASON',
    league:    'East Bay League · Dublin, CA',
    type:      'completed',
    intro:
      'Our debut season. Pegasus — engineered from the ground up in OnShape CAD and driven ' +
      'by a NextFTC Java command-based architecture with Pedro Pathing for trajectory control — ' +
      'competed in four East Bay League events, went 20 matches strong, and brought home the ' +
      'FIRST Tech Challenge Connect Award.',
    stats: [
      { val: '4',      label: 'Events Competed' },
      { val: '20',     label: 'Matches Played'  },
      { val: 'Top 10', label: 'Tournament Rank' },
      { val: '1',      label: 'Award Won'        },
    ],
    award: {
      icon:  '🏆',
      name:  'Connect Award',
      event: 'East Bay League Tournament',
      desc:
        'The FIRST Tech Challenge Connect Award recognizes the team that best exemplifies ' +
        'the FIRST mission — inspiring others to pursue STEM through advocacy, community ' +
        'partnerships, and outreach. Earning this in our rookie season reflects the work we ' +
        'put in off the field: founding BASE Robotics, joining the RISE Foundation, and ' +
        'hosting free STEM workshops across the Tri-Valley.',
      outreachStats: [
        { val: '2',    label: 'Nonprofits Founded / Joined' },
        { val: '100+', label: 'Students Reached'            },
        { val: '4',    label: 'FTC Teams Assisted'          },
      ],
    },
    events: [
      {
        id:      'meet-1',
        index:   '01',
        name:    'East Bay League — Meet 1',
        date:    'Oct 2024',
        venue:   'East Bay Region, CA',
        status:  'debut',
        result:  'Participated',
        isAward: false,
        detail:
          'Pegasus took the competition floor for the very first time. We validated Pedro ' +
          'Pathing trajectory accuracy in a live-match environment, stress-tested autonomous ' +
          'routines against real field conditions, and logged critical telemetry data to ' +
          'drive the next iteration of mechanical and software refinements.',
      },
      {
        id:      'meet-2',
        index:   '02',
        name:    'East Bay League — Meet 2',
        date:    'Nov 2024',
        venue:   'East Bay Region, CA',
        status:  'competed',
        result:  'Participated',
        isAward: false,
        detail:
          'Armed with Meet 1 telemetry and match footage, Pegasus returned with a tighter ' +
          'Pedro Pathing path set, updated hardware geometry, and improved driver-to-robot ' +
          'coordination. Autonomous cycle count increased and teleop scoring consistency ' +
          'improved measurably over the previous outing.',
      },
      {
        id:      'meet-3',
        index:   '03',
        name:    'East Bay League — Meet 3',
        date:    'Dec 2024',
        venue:   'East Bay Region, CA',
        status:  'competed',
        result:  'Participated',
        isAward: false,
        detail:
          'Our most polished regular-season performance. Pinpoint odometry held sub-2 cm ' +
          'positional accuracy across full-field traversals, and our NextFTC command-based ' +
          'architecture allowed seamless subsystem handoffs during autonomous. Alliance ' +
          'coordination reached an all-season high heading into the League Tournament.',
      },
      {
        id:      'tournament',
        index:   '04',
        name:    'East Bay League Tournament',
        date:    'Jan 2025',
        venue:   'East Bay Region, CA',
        status:  'award',
        result:  '🏆 Connect Award',
        isAward: true,
        detail:
          'Pegasus delivered its defining performance: 20 successful matches across 4 ' +
          'competitions, powered by Pinpoint odometry, Pedro Pathing trajectory generation, ' +
          'and our NextFTC Java architecture for reliable, repeatable autonomous cycles. ' +
          'We were selected as the 1st pick of the 3rd Alliance, drove consistent teleop ' +
          'scoring through the playoff bracket, and finished as the 4th place alliance overall. ' +
          'The event ended with Team 30473 taking home the FIRST Tech Challenge Connect Award.',
      },
    ],
  },
  {
    id:        'biobuzz',
    index:     '02',
    game:      'BIOBUZZ',
    robot:     'TBD',
    yearRange: '2025–2026',
    seasonTag: 'UPCOMING SEASON',
    league:    'East Bay League · Dublin, CA',
    type:      'upcoming',
    intro:
      'Our second season is in active preparation. We are applying every lesson from the ' +
      'Decode campaign — refining our Pedro Pathing motion profiles, planning a more ' +
      'aggressive autonomous strategy, and building a stronger mechanical package for the ' +
      'BIOBUZZ game challenge.',
    stats: [
      { val: '4', label: 'Events Scheduled' },
      { val: '—', label: 'Matches Played'   },
      { val: '—', label: 'Current Rank'     },
      { val: '—', label: 'Awards'           },
    ],
    events: [
      {
        id:      'biobuzz-meet-1',
        index:   '01',
        name:    'East Bay League — Meet 1',
        date:    'Fall 2025',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Our first official match of the BIOBUZZ season. Hardware and software development ' +
          'is underway as we adapt our platform architecture to the new game challenge.',
      },
      {
        id:      'biobuzz-meet-2',
        index:   '02',
        name:    'East Bay League — Meet 2',
        date:    'Winter 2025',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Building on Meet 1 field data, we plan to deploy fully refined autonomous routines ' +
          'and a competition-hardened scoring mechanism into our second outing.',
      },
      {
        id:      'biobuzz-meet-3',
        index:   '03',
        name:    'East Bay League — Meet 3',
        date:    'Winter 2025',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Three meets of field data will allow us to push Pedro Pathing trajectory accuracy ' +
          'and teleop execution to their limits, setting us up for the strongest possible ' +
          'League Tournament performance.',
      },
      {
        id:      'biobuzz-tournament',
        index:   '04',
        name:    'East Bay League Tournament',
        date:    'Early 2026',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Our second League Tournament appearance — the first opportunity to defend the ' +
          'standard set during the Decode season and push for a deeper alliance playoff run.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   STATUS TAG
═══════════════════════════════════════════════════════════ */
const STATUS_META = {
  debut:    { label: 'Debut',    cls: 'tag--debut'    },
  competed: { label: 'Competed', cls: 'tag--competed' },
  award:    { label: '🏆 Award', cls: 'tag--award'    },
  upcoming: { label: 'Upcoming', cls: 'tag--upcoming' },
};

function Tag({ status }) {
  const m = STATUS_META[status] ?? STATUS_META.competed;
  return <span className={`ev-tag ${m.cls}`}>{m.label}</span>;
}

/* ═══════════════════════════════════════════════════════════
   CONNECT AWARD BLOCK
═══════════════════════════════════════════════════════════ */
function ConnectAwardBlock({ award, game }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`award-block reveal${visible ? ' revealed' : ''}`}
      id="connect-award"
      aria-label="Connect Award detail"
    >
      <div className="award-block__glow" aria-hidden="true" />
      <div className="award-block__inner">
        <div className="award-block__heading">
          <span className="award-block__trophy" aria-hidden="true">{award.icon}</span>
          <div>
            <p className="award-block__eyebrow">Highest Achievement · {game} Season</p>
            <h3 className="award-block__title">
              {award.name} <span className="acc-yellow">— Winner</span>
            </h3>
          </div>
        </div>
        <p className="award-block__desc">{award.desc}</p>
        <div className="award-block__stats">
          {award.outreachStats.map(({ val, label }) => (
            <div key={label} className="award-block__stat">
              <span className="award-block__stat-val">{val}</span>
              <span className="award-block__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   EVENT CARD (inside accordion)
═══════════════════════════════════════════════════════════ */
function EventCard({ event, robot, delay }) {
  const [ref, visible] = useReveal(0.08);

  /* Highlight first occurrence of robot name in yellow */
  const renderDetail = () => {
    if (!robot || robot === 'TBD') return event.detail;
    const idx = event.detail.indexOf(robot);
    if (idx === -1) return event.detail;
    return (
      <>
        {event.detail.slice(0, idx)}
        <strong className="acc-robot">{robot}</strong>
        {event.detail.slice(idx + robot.length)}
      </>
    );
  };

  return (
    <article
      ref={ref}
      id={event.id}
      className={`ev-card${event.isAward ? ' ev-card--award' : ''} reveal${visible ? ' revealed' : ''}`}
      style={{ transitionDelay: `${delay * 70}ms` }}
      aria-label={event.name}
    >
      {/* Left: index */}
      <div className="ev-card__idx" aria-hidden="true">{event.index}</div>

      {/* Center: content */}
      <div className="ev-card__body">
        <div className="ev-card__top">
          <div className="ev-card__title-group">
            <h4 className="ev-card__name">{event.name}</h4>
            <span className="ev-card__meta">
              {event.date}
              <span className="ev-card__dot" aria-hidden="true" />
              {event.venue}
            </span>
          </div>
          <Tag status={event.status} />
        </div>
        <p className="ev-card__detail">{renderDetail()}</p>
      </div>

      {/* Right: result */}
      <div className="ev-card__result-col">
        <span className={`ev-card__result${event.isAward ? ' ev-card__result--award' : event.status === 'upcoming' ? ' ev-card__result--pending' : ''}`}>
          {event.status === 'upcoming' ? 'Pending' : event.result}
        </span>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS STRIP (inside accordion)
═══════════════════════════════════════════════════════════ */
function StatsStrip({ stats }) {
  return (
    <div className="acc-stats" aria-label="Season statistics">
      {stats.map(({ val, label }) => (
        <div key={label} className="acc-stats__cell">
          <span className="acc-stats__val">{val}</span>
          <span className="acc-stats__label">{label}</span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ACCORDION ITEM — full-width expandable season block
═══════════════════════════════════════════════════════════ */
function AccordionItem({ season, isOpen, onToggle }) {
  const [headerRef, headerVisible] = useReveal(0.1);
  const panelRef = useRef(null);

  /* Animate panel height */
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px';
    } else {
      el.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className={`acc-item${isOpen ? ' acc-item--open' : ''}`} id={`acc-${season.id}`}>

      {/* ── ACCORDION HEADER ── */}
      <button
        ref={headerRef}
        className={`acc-header reveal${headerVisible ? ' revealed' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`acc-panel-${season.id}`}
        id={`acc-trigger-${season.id}`}
      >
        {/* Index */}
        <span className="acc-header__index" aria-hidden="true">
          {season.index}
        </span>

        {/* Center: season identity */}
        <div className="acc-header__identity">
          <span className="acc-header__supertitle">
            {season.yearRange}&nbsp;&nbsp;•&nbsp;&nbsp;{season.seasonTag}
          </span>
          <span className="acc-header__game">{season.game}</span>
        </div>

        {/* Right: league tag + chevron */}
        <div className="acc-header__right">
          <span className="acc-header__league">{season.league}</span>
          <span className="acc-header__chevron" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 7L9 12L14 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </button>

      {/* ── ACCORDION PANEL ── */}
      <div
        ref={panelRef}
        id={`acc-panel-${season.id}`}
        className="acc-panel"
        role="region"
        aria-labelledby={`acc-trigger-${season.id}`}
      >
        <div className="acc-panel__inner">

          {/* Intro + stats */}
          <div className="acc-panel__overview">
            <div className="acc-panel__intro-col">
              <p className="acc-panel__eyebrow">
                {season.robot !== 'TBD'
                  ? <>Robot: <span className="acc-yellow">{season.robot}</span></>
                  : 'Robot: TBD'
                }
              </p>
              <p className="acc-panel__intro">{season.intro}</p>
            </div>
            <StatsStrip stats={season.stats} />
          </div>

          {/* Award pill */}
          {season.award && (
            <div className="acc-award-pill">
              <span className="acc-award-pill__icon" aria-hidden="true">{season.award.icon}</span>
              <span className="acc-award-pill__name">{season.award.name}</span>
              <span className="acc-award-pill__event">{season.award.event}</span>
            </div>
          )}

          {/* Event cards */}
          <div className="acc-panel__feed" role="list" aria-label={`${season.game} events`}>
            <p className="acc-panel__feed-label">Event Feed</p>
            {season.events.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                robot={season.robot}
                delay={i}
              />
            ))}
          </div>

          {/* Connect Award block */}
          {season.award && (
            <ConnectAwardBlock award={season.award} game={season.game} />
          )}

          {/* Upcoming notice */}
          {season.type === 'upcoming' && (
            <p className="acc-panel__upcoming-note">
              Results and recaps will appear here after each event concludes.
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function History() {
  const [openId, setOpenId] = useState('decode');

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <main className="page" id="history-page">

      {/* ── HERO ── */}
      <section className="hist-hero" aria-labelledby="hist-hero-h">
        <div className="hist-hero__bg"   aria-hidden="true" />
        <div className="hist-hero__grid" aria-hidden="true" />
        <div className="container hist-hero__inner">
          <span className="hist-hero__eyebrow">30473 · Season Record</span>
          <h1 id="hist-hero-h" className="hist-hero__title">
            Competition <span className="acc-yellow">History</span>
          </h1>
          <p className="hist-hero__sub">
            Every match. Every award. Every lesson earned on the field.
            This is how <span className="acc-yellow">Pegasus</span> and Team 30473 compete.
          </p>

          {/* Career stats */}
          <div className="hist-hero__qs">
            {[
              { val: '1',      key: 'Award Won'      },
              { val: '4',      key: 'Meets Competed' },
              { val: '2025',   key: 'Rookie Year'    },
              { val: 'Decode', key: 'Last Season'    },
            ].map(({ val, key }, i) => (
              <React.Fragment key={key}>
                {i > 0 && <div className="hist-hero__qs-div" aria-hidden="true" />}
                <div className="hist-hero__qs-cell">
                  <span className="hist-hero__qs-val">{val}</span>
                  <span className="hist-hero__qs-key">{key}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section className="hist-acc" aria-label="Season accordion">
        <div className="hist-acc__list">
          {SEASONS.map((season) => (
            <AccordionItem
              key={season.id}
              season={season}
              isOpen={openId === season.id}
              onToggle={() => toggle(season.id)}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
