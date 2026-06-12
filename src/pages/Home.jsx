import { useEffect, useState } from 'react'
import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const stats = [
  { value: '4+', label: 'Years of engineering experience' },
  { value: '~14M', label: 'Events/day in the pipeline I own' },
  { value: '10×', label: 'Latency cut (~2s → <200ms)' },
  { value: '3', label: 'Industries: fintech, health, telecom' },
]

const experience = [
  {
    company: 'Goldman Sachs',
    via: 'via Insight Global',
    role: 'Software Engineer (Contract)',
    location: 'Dallas, TX',
    period: 'Sep 2024 – Present',
    current: true,
    bullets: [
      'Own a NiFi-based real-time control pipeline processing ~14M events/day — validating incoming transactions, flagging exceptions against supervisory rules, and routing them to downstream workflows and escalation contacts for review.',
      'Cut per-event processing latency from ~2s to under 200ms by replacing an external validation API with a custom in-pipeline Java NiFi processor, removing an inter-team dependency and a network round trip.',
      'Delivered a supervisory exception-management dashboard (React + Spring Boot) used daily by ~50 risk and compliance staff to triage flagged trading exceptions.',
    ],
    tags: ['Java', 'Spring Boot', 'Apache NiFi', 'React', 'PostgreSQL'],
  },
  {
    company: 'Treatment24Seven',
    role: 'Full-Stack Engineer',
    location: 'Remote',
    period: 'Jun 2022 – Jan 2024',
    bullets: [
      'Cut appointment-scheduling API latency from ~450ms to ~120ms by diagnosing slow queries with EXPLAIN ANALYZE and adding composite indexes on high-traffic tables.',
      'Took doctor dashboards from 5–10 second refresh delays to near-real-time by replacing periodic polling with Server-Sent Events for patient status updates.',
      'Stood up a service-health dashboard aggregating Spring Boot Actuator endpoints with Slack alerting on failure, reducing incident detection from hours to minutes.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Server-Sent Events', 'React'],
  },
  {
    company: 'Amdocs',
    via: 'Client: AT&T',
    role: 'Java Backend Engineer',
    location: 'Pune, India',
    period: 'Jan 2020 – Aug 2021',
    bullets: [
      "Developed REST APIs for invoicing workflows and managed database schema changes with Liquibase as part of AT&T's billing platform migration from a monolith to Spring Boot microservices.",
      'Sped up month-end billing settlement runs by introducing parallel batch processing for settlement jobs.',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Liquibase'],
  },
]

const skills = {
  'Languages & Frameworks': ['Java', 'Spring Boot', 'REST APIs', 'React', 'Microservices'],
  'Messaging & Data': ['Apache NiFi', 'Apache Kafka', 'PostgreSQL', 'Snowflake'],
  'DevOps & Testing': ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Maven', 'JUnit', 'Mockito', 'TestContainers', 'Git'],
}

const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'The University of Texas at Dallas',
    period: '2021 – 2023',
  },
  {
    degree: 'B.E. in Computer Science',
    school: 'Pune University',
    period: '2015 – 2019',
  },
]

const projects = [
  {
    title: 'Detection of Social Network Based Cyber Crime Forensics using Apache Spark',
    description: 'Published research: an Apache Spark cluster streaming live tweets to identify cyberbullying and hate speech in real time.',
    image: '/images/cybercrime.jpg',
    link: 'https://ijesc.org/upload/42c7b1ae59dfb528ae13bd80c55a640c.Detection%20of%20Social%20Network%20Based%20Cyber%20Crime%20Forensics%20Using%20Apache%20Spark%20(2).pdf',
    tags: ['Publication', 'Apache Spark', 'NLP'],
  },
  {
    title: 'Time Series Prediction on Stock Prices with LSTM',
    description: 'A long short-term memory neural network that predicts stock prices from historical time-series data.',
    image: '/images/stock.png',
    link: 'https://github.com/deepika0202/stockpricelstm.git',
    tags: ['Machine Learning', 'LSTM', 'Python'],
  },
  {
    title: 'More on GitHub',
    description: 'Full stack web apps, data engineering experiments, and machine learning projects — all open on GitHub.',
    image: '/images/projects.png',
    link: 'https://github.com/deepika0202',
    tags: ['GitHub', 'Open Source'],
  },
]

const RESUME_PATH = '/Deepika_Chaturvedi_Resume.pdf'

export default function Home() {
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    document.title = 'Deepika Chaturvedi - Java Backend Engineer'
  }, [])

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <section className="hero-gradient grid-bg min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left: text content */}
            <div className="hero-enter">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Software Engineer @ Goldman Sachs &middot; Dallas, TX
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 pulse-dot"></span>
                  Open to new roles
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                Deepika
                <br />
                Chaturvedi
              </h1>

              <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-2xl font-normal">
                Java backend engineer building event-driven pipelines and distributed systems
              </p>
              <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl">
                4+ years shipping measurable performance and reliability wins across financial
                services, healthcare, and telecom — with Spring Boot, NiFi, Kafka, PostgreSQL, and React.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={RESUME_PATH}
                  download="Deepika_Chaturvedi_Resume.pdf"
                  className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-600 transition-colors duration-200"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Download Resume
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-slate-600 text-slate-300 font-medium text-base hover:border-blue-500 hover:text-white transition-colors duration-200"
                >
                  View Experience
                  <ArrowRightIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800/50">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Get in touch</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="mailto:deepikachatur97@gmail.com"
                    className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 border border-slate-700/50 bg-slate-800/30"
                  >
                    deepikachatur97@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deepika-chaturvedi"
                    className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 border border-slate-700/50 bg-slate-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="tel:+14692375242"
                    className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 border border-slate-700/50 bg-slate-800/30"
                  >
                    (469) 237-5242
                  </a>
                </div>
              </div>
            </div>

            {/* Right: profile photo */}
            <div className="hero-enter-delayed flex justify-center lg:justify-end">
              <div className="relative">
                {photoFailed ? (
                  <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center">
                    <span className="text-5xl font-black text-slate-500">DC</span>
                  </div>
                ) : (
                  <img
                    src="/images/deepika_port.jpg"
                    alt="Deepika Chaturvedi, Java Backend Engineer"
                    width="320"
                    height="320"
                    fetchPriority="high"
                    onError={() => setPhotoFailed(true)}
                    className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover object-top border border-slate-700 bg-slate-900"
                  />
                )}

                <div className="hidden sm:block absolute -bottom-2 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-slate-400">Currently at</p>
                  <p className="text-sm font-bold text-white">Goldman Sachs</p>
                </div>

                <div className="hidden sm:block absolute -top-2 -left-6 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-slate-400">Based in</p>
                  <p className="text-sm font-bold text-white">Dallas, TX</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Impact stats */}
      <section className="border-t border-slate-800/50 section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience */}
      <section id="experience" className="py-20 sm:py-24 border-t border-slate-800/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Experience
            </h2>
            <p className="text-slate-400 text-lg">
              Backend systems with measurable impact
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((job) => (
              <article
                key={job.company}
                className="relative pl-6 sm:pl-8 border-l-2 border-slate-800"
              >
                <span
                  className={`absolute -left-[7px] top-2 w-3 h-3 rounded-full ${
                    job.current ? 'bg-blue-400 pulse-dot' : 'bg-slate-600'
                  }`}
                  aria-hidden="true"
                ></span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-xl font-bold text-white">{job.company}</h3>
                  {job.via && (
                    <span className="text-sm text-slate-500">{job.via}</span>
                  )}
                </div>
                <p className="text-blue-400 font-medium mb-1">{job.role}</p>
                <p className="text-sm text-slate-500 mb-4">
                  {job.period} &middot; {job.location}
                </p>

                <ul className="space-y-3 mb-4">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 mt-1 text-blue-400" aria-hidden="true">→</span>
                      <span className="text-slate-300">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Skills */}
      <section id="skills" className="section-alt py-20 sm:py-24 border-t border-slate-800/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 reveal">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 border border-slate-700/50 bg-slate-800/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-slate-300 mb-6 uppercase tracking-wider">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-5"
              >
                <p className="text-white font-bold mb-1">{edu.degree}</p>
                <p className="text-slate-400 text-sm">{edu.school}</p>
                <p className="text-slate-500 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Projects & Publications */}
      <section id="projects" className="py-20 sm:py-24 border-t border-slate-800/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Projects &amp; Publications
            </h2>
            <p className="text-slate-400 text-lg">
              Research and side projects beyond the day job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="mb-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/30 hover:border-blue-500/30 transition-all duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section id="contact" className="py-20 sm:py-24 border-t border-slate-800/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Build Something Reliable
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              I'm currently contracting at Goldman Sachs and open to my next full-time
              backend or full-stack role. If you're hiring, I'd love to talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:deepikachatur97@gmail.com"
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/deepika-chaturvedi"
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-blue-500 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={RESUME_PATH}
                download="Deepika_Chaturvedi_Resume.pdf"
                className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-slate-600 text-slate-300 font-medium hover:border-blue-500 hover:text-white transition-colors duration-200"
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
