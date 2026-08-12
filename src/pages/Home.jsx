import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ──────────────────────────────────────────────────────────
   HERO SECTION
────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      {/* Background decorations */}
      <div className="hero__bg-grid"  aria-hidden="true" />
      <div className="hero__bg-glow"  aria-hidden="true" />
      <div className="hero__stripe hero__stripe--1" aria-hidden="true" />
      <div className="hero__stripe hero__stripe--2" aria-hidden="true" />

      <div className="container hero__content">

        {/* ── Left: Copy ── */}
        <div className="hero__text animate-fadeInLeft">
          <p className="label-tag animate-fadeInUp delay-1">
            ◈ FIRST Tech Challenge · Dublin, CA
          </p>

          <h1
            id="hero-headline"
            className="headline headline-xl hero__headline animate-fadeInUp delay-2"
          >
            Welcome to<br />
            <span className="text-yellow">FTC Team</span><br />
            <span className="hero__number">30473</span>
          </h1>

          <p className="hero__tagline animate-fadeInUp delay-3">
            We are a competitive robotics team pushing the boundaries of mechanical design
            and software engineering in the FIRST Tech Challenge. From prototyping custom
            drivetrains to writing precise autonomous routines in Java, we are dedicated to
            building high-performance robots for the competition field.
          </p>
          <p className="hero__tagline animate-fadeInUp delay-3" style={{ marginTop: '1rem' }}>
            Whether we are refining our mechanisms in the shop, debugging code on the fly,
            or tracking our tournament advancements, our focus is always on execution,
            innovation, and pushing our limits.
          </p>

          <div className="hero__actions animate-fadeInUp delay-4">
            <a
              href="https://www.firstinspires.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="hero-cta-support"
            >
              ★ Support Our Journey
            </a>
            <Link
              to="/tech-specs"
              className="btn btn-outline"
              id="hero-cta-techspecs"
            >
              View Tech Specs →
            </Link>
          </div>

          {/* Quick stats */}
          <div className="hero__stats animate-fadeInUp delay-5">
            {[
              { val: '30473', label: 'Team #'         },
              { val: '2025',  label: 'Rookie Season'  },
              { val: '100+',  label: 'Students Reached' },
              { val: 'FTC',   label: 'Division'       },
            ].map(({ val, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-val">{val}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Action Shot Placeholder ── */}
        <div className="hero__visual animate-fadeInUp delay-3">
          <div className="hero__img-frame">
            <div className="hero__img-corner hero__img-corner--tl" aria-hidden="true" />
            <div className="hero__img-corner hero__img-corner--br" aria-hidden="true" />
            <img
              src="https://via.placeholder.com/680x520/161616/F5C400?text=ROBOT+ACTION+SHOT"
              alt="Team Duck 30473 robot in action during FTC competition"
              className="hero__img"
              loading="eager"
              width="680"
              height="520"
            />
            <div className="hero__img-badge" aria-hidden="true">
              <span className="hero__img-badge-dot" />
              LIVE COMPETITION
            </div>
          </div>
        </div>
      </div>

      <div className="hero__bottom-cut" aria-hidden="true" />
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   COMMUNITY IMPACT — "Beyond the Robot"
────────────────────────────────────────────────────────── */

const topStats = [
  { val: '2',    label: 'Nonprofits Backed'  },
  { val: '2',    label: 'School Workshops'   },
  { val: '100+', label: 'Students Reached'   },
  { val: '4',    label: 'FTC Teams Assisted' },
];

const initiatives = [
  {
    id:    'init-base',
    icon:  '🚀',
    tag:   'NONPROFIT / STEM ACCESS',
    title: 'BASE Robotics',
    body:  'We founded BASE Robotics to provide free, accessible STEM access through the FIRST Tech Challenge to underprivileged students — removing financial barriers so every young engineer can compete at the highest level.',
  },
  {
    id:    'init-rise',
    icon:  '🌱',
    tag:   'NONPROFIT / EQUITY',
    title: 'RISE Foundation',
    body:  'We joined the RISE Foundation to provide high-quality robotics education to all students, regardless of financial circumstances — because engineering talent isn\'t tied to a zip code.',
  },
  {
    id:    'init-jfs',
    icon:  '🏫',
    tag:   'Community Event',
    title: 'JFS Elementary Open House',
    body:  'We presented at the JFS Elementary Open House to display our mission, showcase our impact, and introduce the exciting world of competitive robotics to the younger generation of students.',
  },
  {
    id:    'init-stem-workshops',
    icon:  '🔬',
    tag:   'Academic Collaboration',
    title: 'High School STEM Workshops',
    body:  'Collaborated with the Emerald High School Engineering team to aid their MIT InvenTeams and Samsung Solve for Tomorrow projects. Additionally, hosted a physics workshop for the Foothill High School Rocketry Club to exchange hardware feedback.',
  },
];

function CommunityImpact() {
  return (
    <section className="impact section" aria-labelledby="impact-heading">
      <div className="skew-stripe" aria-hidden="true" />

      <div className="container section-inner">
        {/* Section label */}
        <div className="section-label">
          <span className="label-tag">Community Impact</span>
        </div>

        <h2 id="impact-heading" className="headline headline-lg impact__heading">
          Beyond the <span className="text-yellow">Robot</span>
        </h2>
        <p className="impact__sub text-muted">
          Competition wins are milestones. Building the next generation of engineers is our mission.
        </p>

        {/* Stat bar */}
        <div className="impact__stats" aria-label="Key community impact statistics">
          {topStats.map(({ val, label }) => (
            <div key={label} className="impact__stat-item">
              <span className="impact__stat-val">{val}</span>
              <span className="impact__stat-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Initiative cards */}
        <div className="impact__cards">
          {initiatives.map(({ id, icon, tag, title, body }, i) => (
            <div
              key={id}
              id={id}
              className={`impact__card card animate-fadeInUp delay-${(i % 5) + 1}`}
            >
              <div className="impact__card-icon" aria-hidden="true">{icon}</div>
              <p className="label-tag impact__card-tag">{tag}</p>
              <h3 className="headline headline-sm impact__card-title">{title}</h3>
              <p className="impact__card-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   OUTREACH SECTION
────────────────────────────────────────────────────────── */
const outreachCards = [
  {
    id:    'outreach-emerald',
    icon:  '🔬',
    school: 'Emerald High School',
    body: (
      <>
        Our team inspired STEM and robotics in our community by collaborated with the{' '}
        <strong>Emerald High School Engineering competition team</strong>, showing them our
        robot, engineering process, the different subsystems present, and the code behind the
        robot. We helped them use the information in their{' '}
        <strong>MIT InvenTeams</strong> and <strong>Samsung Solve for Tomorrow</strong>{' '}
        competitions.
      </>
    ),
  },
  {
    id:    'outreach-foothill',
    icon:  '🚀',
    school: 'Foothill High School',
    body: (
      <>
        Our team also reached out to the{' '}
        <strong>Foothill High School Rocketry Club</strong>, providing them a free workshop
        where we explained how <strong>physics concepts</strong> can be used for rocket
        efficiency and to achieve more height. We also presented to them our robot, explaining
        the major components and code behind it. They applied these learned concepts to the{' '}
        <strong>American Rocketry competition</strong> while also checking our robot and
        providing us design suggestions.
      </>
    ),
  },
];

function OutreachSection() {
  return (
    <section className="outreach section" aria-labelledby="outreach-heading">
      <div className="container">
        <div className="section-label">
          <span className="label-tag">Community Outreach</span>
        </div>

        <h2 id="outreach-heading" className="headline headline-lg outreach__heading">
          Beyond the <span className="text-yellow">Competition Floor</span>
        </h2>
        <p className="outreach__sub text-muted">
          Sharing knowledge, inspiring students, and strengthening the STEM community
          across the Tri-Valley.
        </p>

        <div className="outreach__cards">
          {outreachCards.map(({ id, icon, school, body }, i) => (
            <div
              key={id}
              id={id}
              className={`outreach__card card animate-fadeInUp delay-${i + 1}`}
            >
              <div className="outreach__card-header">
                <span className="outreach__card-icon" aria-hidden="true">{icon}</span>
                <span className="label-tag outreach__card-tag">{school}</span>
              </div>
              <p className="outreach__card-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   ENGINEERING TEASER
────────────────────────────────────────────────────────── */
function EngineeringTeaser() {
  return (
    <section className="eng-teaser section" aria-labelledby="eng-heading">
      <div className="container">
        <div className="section-label">
          <span className="label-tag">Engineering</span>
        </div>

        <h2 id="eng-heading" className="headline headline-lg eng-teaser__heading">
          Built from the <span className="text-yellow">Ground Up</span>
        </h2>
        <p className="eng-teaser__sub text-muted">
          We prototype custom drivetrains in CAD, write precise autonomous routines in Java,
          and use the NextFTC architecture to build scalable, competition-ready software.
          Execution isn't an afterthought — it's the entire design philosophy.
        </p>

        <div className="eng-teaser__grid">

          {/* Card 1 — Chassis */}
          <div className="eng-teaser__card card" id="eng-card-chassis">
            <div className="eng-teaser__card-accent" aria-hidden="true" />
            <div className="eng-teaser__card-top">
              <img
                src="https://via.placeholder.com/560x320/111111/F5C400?text=CHASSIS+CAD+RENDER"
                alt="Custom mechanical chassis CAD render placeholder"
                className="eng-teaser__img"
                loading="lazy"
                width="560"
                height="320"
              />
            </div>
            <div className="eng-teaser__card-body">
              <p className="label-tag">Mechanical Design</p>
              <h3 className="headline headline-sm eng-teaser__title">
                Custom Drivetrain Prototyping
              </h3>
              <p className="eng-teaser__desc text-muted">
                Every mechanical system starts in CAD and survives multiple design reviews before
                a single bolt is cut. We prototype custom drivetrains optimized for rapid direction
                changes, low center-of-gravity stability, and sub-50ms encoder feedback loops.
              </p>
              <ul className="eng-teaser__bullets">
                <li>Prototyped mecanum and custom drive configurations</li>
                <li>CNC-iterated aluminum chassis plates</li>
                <li>Modular subsystem mounting for rapid changes</li>
                <li>Optimized gear ratios per competition task</li>
              </ul>
            </div>
          </div>

          {/* Card 2 — Software */}
          <div className="eng-teaser__card card" id="eng-card-software">
            <div className="eng-teaser__card-accent" aria-hidden="true" />
            <div className="eng-teaser__card-top">
              <div className="eng-teaser__code-preview">
                <div className="eng-teaser__code-bar" aria-hidden="true">
                  <span /><span /><span />
                  <span className="eng-teaser__code-filename">AutonomousRoutine.java</span>
                </div>
                <pre className="eng-teaser__code" aria-label="Java autonomous routine code preview">
{`@Autonomous(name = "Duck Auto — Full Cycle")
public class DuckAutonomous extends LinearOpMode {

  @Override
  public void runOpMode() {
    // NextFTC command-based init
    CommandScheduler scheduler = new CommandScheduler();

    DriveSubsystem drive  = new DriveSubsystem(hardwareMap);
    LiftSubsystem  lift   = new LiftSubsystem(hardwareMap);
    ClawSubsystem  claw   = new ClawSubsystem(hardwareMap);

    scheduler.schedule(
      new SequentialCommandGroup(
        new DriveToScoringZone(drive),   // Pedro Pathing trajectory
        new ExtendLiftCommand(lift, 920),// mm — max height
        new PlaceSampleCommand(claw),
        new RetractAndPark(drive, lift)
      )
    );

    waitForStart();
    while (opModeIsActive()) scheduler.run();
  }
}`}
                </pre>
              </div>
            </div>
            <div className="eng-teaser__card-body">
              <p className="label-tag">Software Architecture</p>
              <h3 className="headline headline-sm eng-teaser__title">
                Java + NextFTC Architecture
              </h3>
              <p className="eng-teaser__desc text-muted">
                Our autonomous routines are written in Java using the NextFTC command-based
                architecture. We integrate Pedro Pathing for advanced trajectory generation,
                smooth motion profiling, and two-wheel odometry localization accurate to
                ±2 cm per field traversal — enabling reliable multi-cycle autonomous runs.
              </p>
              <ul className="eng-teaser__bullets">
                <li>NextFTC command-based Java architecture</li>
                <li>Pedro Pathing trajectory generation &amp; motion profiling</li>
                <li>Two-wheel odometry localization (±2 cm accuracy)</li>
                <li>Automated multi-cycle autonomous routines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="eng-teaser__cta">
          <Link to="/tech-specs" className="btn btn-primary" id="eng-cta-techspecs">
            Explore Full Tech Specs →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   PAGE EXPORT
────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="page" id="home-page">
      <HeroSection />
      <CommunityImpact />
      <OutreachSection />
      <EngineeringTeaser />
    </main>
  );
}
