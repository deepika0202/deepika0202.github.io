import { useEffect, useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Detection of Social Network Based Cyber Crime Forensics using Apache Spark',
    description: 'Using Apache Spark, clusters of two slave machines and one master computer stream live tweets to identify cyber bullying or hate speech',
    image: '/images/cybercrime.jpg',
    link: 'https://ijesc.org/upload/42c7b1ae59dfb528ae13bd80c55a640c.Detection%20of%20Social%20Network%20Based%20Cyber%20Crime%20Forensics%20Using%20Apache%20Spark%20(2).pdf',
    tags: ['Apache Spark', 'NLP', 'Cybercrime'],
  },
  {
    title: 'UTD Bay: buy, sell, and give away',
    description: 'The web application had the following modules: Signup, Login, Buy, Sell, Search, Logout etc.',
    image: '/images/buysell.jpg',
    link: 'https://github.com/deepika0202/utdbay.git',
    tags: ['Web App', 'Full Stack'],
  },
  {
    title: 'Time Series Prediction on Stock Prices using an LSTM model',
    description: 'Developed a model that could predict stock prices using long short-term memory neural network',
    image: '/images/stock.png',
    link: 'https://github.com/deepika0202/stockpricelstm.git',
    tags: ['Machine Learning', 'LSTM', 'Deep Learning'],
  },
  {
    title: 'All Projects',
    description: 'Below is the link to all my projects. If you are interested, you will be redirected to GitHub. Happy Learning!',
    image: '/images/projects.png',
    link: 'https://github.com/deepika0202',
    tags: ['GitHub', 'Portfolio'],
  },
]

const skills = {
  'Languages': ['Java', 'Python', 'SQL', 'C++'],
  'Data & ML': ['Apache Spark', 'TensorFlow', 'LSTM', 'Data Analysis'],
  'Technologies': ['Web Development', 'Big Data', 'Machine Learning', 'Data Science'],
}

export default function Home() {
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    document.title = 'Deepika Chaturvedi - Software Engineer'
  }, [])

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <section className="hero-gradient grid-bg min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left: text content */}
            <div className="hero-enter">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Master's Student &middot; UT Dallas &middot; Dallas, TX
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                Deepika
                <br />
                Chaturvedi
              </h1>

              <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-2xl font-normal">
                Software Engineer learning and evolving
              </p>
              <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl">
                Masters in Computer Science from The University of Texas at Dallas
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/deepika0202"
                  className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Projects
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg border border-slate-600 text-slate-300 font-medium text-base hover:border-blue-500 hover:text-white transition-colors duration-200"
                >
                  Featured Work
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
                    alt="Deepika Chaturvedi, Software Engineer"
                    width="320"
                    height="320"
                    fetchPriority="high"
                    onError={() => setPhotoFailed(true)}
                    className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover object-top border border-slate-700 bg-slate-900"
                  />
                )}

                <div className="hidden sm:block absolute -bottom-2 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-slate-400">Studying at</p>
                  <p className="text-sm font-bold text-white">UT Dallas</p>
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

      {/* 2. Featured Projects */}
      <section id="projects" className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">
              Notable work and research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="mb-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/30 hover:border-blue-500/30 transition-all duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* 3. Skills */}
      <section className="section-alt py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 reveal">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
        </div>
      </section>

      {/* 4. Ongoing & Publications */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ongoing Projects */}
            <div className="reveal">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ongoing Work
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-400" aria-hidden="true">→</span>
                  <span className="text-slate-300">Modernizing Political Event Data for Big Data Social Science Research</span>
                </li>
              </ul>
            </div>

            {/* Publications */}
            <div className="reveal">
              <h2 className="text-2xl font-bold text-white mb-4">
                Publications
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-400" aria-hidden="true">→</span>
                  <a
                    href="https://ijesc.org/upload/42c7b1ae59dfb528ae13bd80c55a640c.Detection%20of%20Social%20Network%20Based%20Cyber%20Crime%20Forensics%20Using%20Apache%20Spark%20(2).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Detection of Social Network Based Cyber Crime Forensics using Apache Spark
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-20 sm:py-24 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              I'm always interested in discussing software engineering, data science, and new opportunities. Feel free to reach out!
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
