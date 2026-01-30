"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VATCalculator() {
  const [importValue, setImportValue] = useState("");
  const [vatRate] = useState(21); // Dutch VAT rate
  const [savings, setSavings] = useState(0);

  const calculateSavings = () => {
    const value = parseFloat(importValue);
    if (!isNaN(value) && value > 0) {
      // Article 23 eliminates upfront VAT payment
      const upfrontVAT = value * (vatRate / 100);
      setSavings(upfrontVAT);
    } else {
      setSavings(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImportValue(e.target.value);
    calculateSavings();
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        Article 23 VAT Savings Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="import-value" className="block text-sm font-medium text-slate-700">
            Monthly Import Value (EUR)
          </label>
          <input
            id="import-value"
            type="number"
            value={importValue}
            onChange={handleInputChange}
            placeholder="10000"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
          />
        </div>
        {savings > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-md bg-emerald-50 p-4"
          >
            <p className="text-sm text-slate-600">Upfront VAT Eliminated:</p>
            <p className="text-2xl font-bold text-emerald-600">
              €{savings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              With Article 23, this amount is deferred to your periodic VAT return, improving cash flow.
            </p>
          </motion.div>
        )}
        <div className="text-xs text-slate-500">
          <p>Standard rule: Pay {vatRate}% VAT at border</p>
          <p>Article 23 rule: VAT recorded as reverse charge in periodic return</p>
        </div>
      </div>
    </div>
  );
}
