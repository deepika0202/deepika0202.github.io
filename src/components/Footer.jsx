export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:deepikachatur97@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  deepikachatur97@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14692375242"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  (469) 237-5242
                </a>
              </li>
              <li className="text-slate-400">
                Richardson, TX 75080
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/deepika-chaturvedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deepika0202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Deepika Chaturvedi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
