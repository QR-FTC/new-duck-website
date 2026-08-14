import React, { useState, useEffect } from 'react';
import './Home.css';
import './History.css';

/* ===============================================================
   TROPHY ICON
=============================================================== */
function TrophyIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 4h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 5H4a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 5h3a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 19h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 15.5 8 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 15.5 16 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ===============================================================
   DATA
=============================================================== */
const SEASONS = [
  {
    id:        'biobuzz',
    index:     '01',
    game:      'BIOBUZZ',
    robot:     'TBD',
    yearRange: '2026-2027',
    seasonTag: 'CURRENT SEASON',
    league:    'East Bay League: Dublin, CA',
    type:      'upcoming',
    intro:
      'Our second competitive season is in active development. We are carrying forward what ' +
      'we learned during the Decode campaign: refined Pedro Pathing motion profiles, a ' +
      'revised autonomous strategy, and a stronger mechanical package built on our NextFTC ' +
      'architecture for the Biobuzz game challenge.',
    stats: [
      { val: '4', label: 'Events Scheduled' },
      { val: '-', label: 'Matches Played'   },
      { val: '-', label: 'Current Rank'     },
      { val: '-', label: 'Awards'           },
    ],
    events: [
      {
        id:      'biobuzz-meet-1',
        index:   '01',
        name:    'East Bay League: Meet 1',
        date:    'Nov 2026',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'First match of the Biobuzz season. Hardware and software are being adapted to the ' +
          'new game challenge ahead of Meet 1.',
      },
      {
        id:      'biobuzz-meet-2',
        index:   '02',
        name:    'East Bay League: Meet 2',
        date:    'Dec 2026',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Second outing of the season, incorporating field data from Meet 1 into an updated ' +
          'autonomous routine and scoring mechanism.',
      },
      {
        id:      'biobuzz-meet-3',
        index:   '03',
        name:    'East Bay League: Meet 3',
        date:    'Jan 2027',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Final regular-season meet before the League Tournament, used to lock in trajectory ' +
          'accuracy and teleop execution.',
      },
      {
        id:      'biobuzz-tournament',
        index:   '04',
        name:    'East Bay League Tournament',
        date:    'Feb 2027',
        venue:   'East Bay Region, CA',
        status:  'upcoming',
        result:  'TBD',
        isAward: false,
        detail:
          'Our second League Tournament appearance, and the first chance to build on the standard ' +
          'set during the Decode season.',
      },
    ],
  },
  {
    id:        'decode',
    index:     '02',
    game:      'DECODE',
    robot:     'Pegasus',
    yearRange: '2025-2026',
    seasonTag: 'COMPLETED SEASON',
    league:    'East Bay League: Dublin, CA',
    type:      'completed',
    intro:
      'Our first competitive season. Pegasus was designed in Onshape CAD and built on a ' +
      'NextFTC Java command-based architecture with Pedro Pathing for autonomous trajectory ' +
      'control. The robot competed in four East Bay League events, completed 20 matches, and ' +
      'won the FIRST Tech Challenge Connect Award.',
    stats: [
      { val: '4',      label: 'Events Competed' },
      { val: '20',     label: 'Matches Played'  },
      { val: 'Top 10', label: 'Tournament Rank' },
      { val: '1',      label: 'Award Won'        },
    ],
    award: {
      name:  'Connect Award',
      event: 'East Bay League Tournament',
      desc:
        'The FIRST Tech Challenge Connect Award recognizes the team that best exemplifies the ' +
        'FIRST mission through community outreach and partnership. Team 30473 earned this ' +
        'award in its rookie season by founding BASE Robotics, joining the RISE Foundation, ' +
        'and running free STEM workshops across the Tri-Valley.',
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
        name:    'East Bay League: Meet 1',
        date:    'Nov 2025',
        venue:   'East Bay Region, CA',
        status:  'debut',
        result:  'Participated',
        isAward: false,
        detail:
          'Pegasus took the competition floor for the first time. We validated Pedro Pathing ' +
          'trajectory accuracy under live-match conditions and logged telemetry to drive the ' +
          'next round of mechanical and software refinements.',
      },
      {
        id:      'meet-2',
        index:   '02',
        name:    'East Bay League: Meet 2',
        date:    'Dec 2025',
        venue:   'East Bay Region, CA',
        status:  'competed',
        result:  'Participated',
        isAward: false,
        detail:
          'Using telemetry from Meet 1, Pegasus returned with a tighter Pedro Pathing path set ' +
          'and updated hardware geometry. Autonomous cycle count and teleop scoring ' +
          'consistency both improved over the previous outing.',
      },
      {
        id:      'meet-3',
        index:   '03',
        name:    'East Bay League: Meet 3',
        date:    'Jan 2026',
        venue:   'East Bay Region, CA',
        status:  'competed',
        result:  'Participated',
        isAward: false,
        detail:
          'Our most consistent regular-season performance. Pinpoint odometry held sub-2 cm ' +
          'positional accuracy across full-field traversals heading into the League ' +
          'Tournament.',
      },
      {
        id:      'tournament',
        index:   '04',
        name:    'East Bay League Tournament',
        date:    'Feb 2026',
        venue:   'East Bay Region, CA',
        status:  'award',
        result:  'Connect Award',
        isAward: true,
        detail:
          'Pegasus executed 20 successful matches at the East Bay League Tournament using ' +
          'Pinpoint odometry, Pedro Pathing, and our NextFTC architecture. Team 30473 was ' +
          'selected 1st pick of the 3rd Alliance, finished 4th place alliance overall, and ' +
          'won the FIRST Tech Challenge Connect Award.',
      },
    ],
  },
];

/* ===============================================================
   STATUS TAG
=============================================================== */
const STATUS_META = {
  debut:    { label: 'Debut',    cls: 'tag--debut'    },
  competed: { label: 'Competed', cls: 'tag--competed' },
  award:    { label: 'Award',    cls: 'tag--award'    },
  upcoming: { label: 'Upcoming', cls: 'tag--upcoming' },
};

function Tag({ status }) {
  const m = STATUS_META[status] ?? STATUS_META.competed;
  return (
    <span className={`ev-tag ${m.cls}`}>
      {status === 'award' && <TrophyIcon className="ev-tag__icon" />}
      {m.label}
    </span>
  );
}

/* ===============================================================
   CONNECT AWARD BLOCK
=============================================================== */
function ConnectAwardBlock({ award, game }) {
  return (
    <div className="award-block hover-card" id="connect-award" aria-label="Connect Award detail">
      <div className="award-block__inner">
        <div className="award-block__heading">
          <TrophyIcon className="award-block__trophy" />
          <div>
            <p className="award-block__eyebrow">Highest Achievement: {game} Season</p>
            <h3 className="award-block__title">
              {award.name} <span className="acc-yellow">: Winner</span>
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

/* ===============================================================
   EVENT CARD 
=============================================================== */
function EventCard({ event, robot }) {
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
      id={event.id}
      className={`ev-card hover-card${event.isAward ? ' ev-card--award' : ''}`}
      aria-label={event.name}
    >
      <div className="ev-card__idx" aria-hidden="true">{event.index}</div>
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
      <div className="ev-card__result-col">
        <span className={`ev-card__result${event.isAward ? ' ev-card__result--award' : event.status === 'upcoming' ? ' ev-card__result--pending' : ''}`}>
          {event.status === 'upcoming' ? 'Pending' : event.result}
        </span>
      </div>
    </article>
  );
}

/* ===============================================================
   STATS STRIP
=============================================================== */
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

/* ===============================================================
   ACCORDION ITEM
=============================================================== */
function AccordionItem({ season, isOpen, onToggle }) {
  return (
    <div className={`acc-item hover-card${isOpen ? ' acc-item--open' : ''}`} id={`acc-${season.id}`}>
      <button
        type="button"
        className="acc-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`acc-panel-${season.id}`}
        id={`acc-trigger-${season.id}`}
      >
        <span className="acc-header__index" aria-hidden="true">
          {season.index}
        </span>
        <div className="acc-header__identity">
          <span className="acc-header__supertitle">
            {season.yearRange}&nbsp;&nbsp;•&nbsp;&nbsp;{season.seasonTag}
          </span>
          <span className="acc-header__game">{season.game}</span>
        </div>
        <div className="acc-header__right">
          <span className="acc-header__league">{season.league}</span>
          <span className="acc-header__chevron" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>

      {/* Modern CSS-Grid Accordion Wrapper */}
      <div
        id={`acc-panel-${season.id}`}
        className="acc-panel"
        role="region"
        aria-labelledby={`acc-trigger-${season.id}`}
      >
        <div className="acc-panel__inner-wrapper">
          <div className="acc-panel__inner">
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

            {season.award && (
              <div className="acc-award-pill">
                <TrophyIcon className="acc-award-pill__icon" />
                <span className="acc-award-pill__name">{season.award.name}</span>
                <span className="acc-award-pill__event">{season.award.event}</span>
              </div>
            )}

            <div className="acc-panel__feed" role="list" aria-label={`${season.game} events`}>
              <p className="acc-panel__feed-label">Event Feed</p>
              {season.events.map((event) => (
                <EventCard key={event.id} event={event} robot={season.robot} />
              ))}
            </div>

            {season.award && <ConnectAwardBlock award={season.award} game={season.game} />}

            {season.type === 'upcoming' && (
              <p className="acc-panel__upcoming-note">
                Results and recaps will appear here after each event concludes.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   ACCORDION CONTAINER (State Isolation to stop disappearing bugs)
=============================================================== */
function AccordionContainer() {
  const [openId, setOpenId] = useState('decode');
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
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
  );
}

/* ===============================================================
   PAGE
=============================================================== */
export default function History() {
  
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
    <main className="page" id="history-page">
      <section className="hist-hero" aria-labelledby="hist-hero-h">
        <div className="hist-hero__grid" aria-hidden="true" />
        <div className="container hist-hero__inner">
          <span className="hist-hero__eyebrow reveal">30473 : Season Record</span>
          <h1 id="hist-hero-h" className="hist-hero__title reveal delay-1">
            Competition <span className="acc-yellow">History</span>
          </h1>
          <p className="hist-hero__sub reveal delay-2">
            Every match. Every award. Every lesson earned on the field.
            This is how <span className="acc-yellow">Pegasus</span> and Team 30473 compete
            in the East Bay League.
          </p>

          <div className="hist-hero__qs hover-card reveal delay-3">
            {[
              { val: '1',      key: 'Award Won'     },
              { val: '4',      key: 'Competitions'  },
              { val: '2025',   key: 'Rookie Year'   },
              { val: 'Decode', key: 'Last Season'   },
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

      <section className="hist-acc reveal delay-4" aria-label="Season accordion">
        <AccordionContainer />
      </section>
    </main>
  );
}