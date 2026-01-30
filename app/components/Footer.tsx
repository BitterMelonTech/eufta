import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">eufta.in</h3>
            <p className="mt-2 text-sm text-slate-600">
              The Rotterdam bridge for Indian brands entering the EU market under the 2026 FTA.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="/fta-industries" className="hover:text-emerald-600">FTA Industries</Link></li>
              <li><Link href="/fiscal-representation" className="hover:text-emerald-600">Fiscal Representation</Link></li>
              <li><Link href="/marketplace-enablement" className="hover:text-emerald-600">Marketplace Enablement</Link></li>
              <li><Link href="/compliance-bridge" className="hover:text-emerald-600">Compliance Bridge</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Regions</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Gujarat (Ahmedabad/Sanand)</li>
              <li>Tamil Nadu (Tiruppur/Chennai)</li>
              <li>UP (Noida/Jewar)</li>
              <li>Odisha (Paradip)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <p className="mt-4 text-sm text-slate-600">
              Rotterdam, Netherlands
              <br />
              <a href="mailto:info@eufta.in" className="text-emerald-600 hover:underline">
                info@eufta.in
              </a>
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">Authorities</h4>
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                <li>
                  <a href="https://www.commerce.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                    Indian Ministry of Commerce
                  </a>
                </li>
                <li>
                  <a href="https://www.efsa.europa.eu" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                    EFSA
                  </a>
                </li>
                <li>
                  <a href="https://www.portofrotterdam.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                    Port of Rotterdam
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>&copy; 2026 eufta.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
