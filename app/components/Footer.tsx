import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Top Section: Brand + CTA */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pb-12 border-b border-slate-800">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold shadow-lg shadow-cyan-500/30">
                E
              </div>
              <span className="text-2xl font-bold tracking-tight">eufta.in</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              <strong className="text-slate-300">eufta.in (EUFTA)</strong> is a Rotterdam-based EU market entry platform for Indian exporters under the 2026 India-EU Free Trade Agreement. We provide 3PL warehousing, Article 23 VAT deferment, regulatory compliance (EFSA, EMA, REACH, CBAM), and pan-European marketplace enablement.
            </p>
            <a 
              href="mailto:info@eufta.in" 
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Get Started
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">All Services</Link></li>
                <li><Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/fta-industries" className="text-slate-400 hover:text-white transition-colors">FTA Industries</Link></li>
                <li><Link href="/fiscal-representation" className="text-slate-400 hover:text-white transition-colors">Fiscal Representation</Link></li>
                <li><Link href="/marketplace-enablement" className="text-slate-400 hover:text-white transition-colors">Marketplace Enablement</Link></li>
                <li><Link href="/compliance-bridge" className="text-slate-400 hover:text-white transition-colors">Compliance Bridge</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog & Guides</Link></li>
                <li><Link href="/final-text" className="text-slate-400 hover:text-white transition-colors">Final Agreement</Link></li>
                <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About EUFTA</Link></li>
              </ul>
              
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 mt-8">Regions</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Gujarat (Ahmedabad/Sanand)</li>
                <li>Tamil Nadu (Tiruppur/Chennai)</li>
                <li>UP (Noida/Jewar)</li>
                <li>Odisha (Paradip)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <p className="text-slate-400">Rotterdam, Netherlands</p>
                <a href="mailto:info@eufta.in" className="block text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  info@eufta.in
                </a>
              </div>
              
              <div className="mt-8 rounded-lg bg-slate-800/50 border border-slate-700/50 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Company</h4>
                <p className="text-sm font-semibold text-white">Sanjan Venture</p>
                <div className="mt-2 space-y-1 text-xs text-slate-500">
                  <p>KVK: 86318179</p>
                  <p>BTW: NL863929771B01</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Authorities</h4>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.commerce.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors border border-slate-700/50 rounded-lg px-2.5 py-1.5">
                    Min. of Commerce
                  </a>
                  <a href="https://www.efsa.europa.eu" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors border border-slate-700/50 rounded-lg px-2.5 py-1.5">
                    EFSA
                  </a>
                  <a href="https://www.portofrotterdam.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors border border-slate-700/50 rounded-lg px-2.5 py-1.5">
                    Port of Rotterdam
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Entity Definition */}
        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            <strong className="text-slate-400">EUFTA (eufta.in)</strong> refers to the EU market entry platform operated by Sanjan Venture (KVK: 86318179, Rotterdam, NL). &quot;EUFTA&quot; is not an abbreviation of &quot;EU Free Trade Agreement&quot; but a brand name. This website provides logistics, fiscal, regulatory, and marketplace services for Indian businesses exporting to Europe under the 2026 India-EU Free Trade Agreement.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 eufta.in (Sanjan Venture). All rights reserved.</p>
          <p>Rotterdam-Indo Logistics Gateway for EU-India FTA 2026</p>
        </div>
      </div>
    </footer>
  );
}
