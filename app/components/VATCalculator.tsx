"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VATCalculator() {
  const [importValue, setImportValue] = useState("");
  const [vatRate] = useState(21); // Dutch VAT rate
  const [savings, setSavings] = useState(0);

  const calculateSavings = (val: string) => {
    const value = parseFloat(val);
    if (!isNaN(value) && value > 0) {
      const upfrontVAT = value * (vatRate / 100);
      setSavings(upfrontVAT);
    } else {
      setSavings(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImportValue(e.target.value);
    calculateSavings(e.target.value);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-white to-cyan-50/30 p-8 shadow-xl">
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Article 23 VAT Savings Calculator
            </h3>
            <p className="text-xs text-slate-500">Calculate your cash flow improvement</p>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <label htmlFor="import-value" className="block text-sm font-semibold text-slate-700 mb-2">
              Monthly Import Value (EUR)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">€</span>
              <input
                id="import-value"
                type="number"
                value={importValue}
                onChange={handleInputChange}
                placeholder="10,000"
                className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 pl-8 pr-4 py-3.5 text-base font-medium focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </div>
          {savings > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-6 border border-cyan-200/60"
            >
              <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-1">Upfront VAT Eliminated</p>
              <p className="text-4xl font-extrabold text-cyan-600">
                €{savings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                With Article 23, this amount is deferred to your periodic VAT return — <span className="font-semibold text-cyan-700">zero upfront cash outflow</span>.
              </p>
            </motion.div>
          )}
          <div className="flex gap-2 pt-2">
            <div className="flex-1 rounded-lg bg-slate-50 p-3 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Standard</p>
              <p className="text-sm font-bold text-red-500">Pay {vatRate}% at border</p>
            </div>
            <div className="flex-1 rounded-lg bg-cyan-50 p-3 border border-cyan-100">
              <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-1">Article 23</p>
              <p className="text-sm font-bold text-cyan-700">Reverse charge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
