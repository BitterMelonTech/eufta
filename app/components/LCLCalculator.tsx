"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LCLCalculator() {
  const [cbm, setCbm] = useState("");
  const [origin, setOrigin] = useState("mumbai");
  const [cost, setCost] = useState(0);

  const calculateCost = () => {
    const volume = parseFloat(cbm);
    if (!isNaN(volume) && volume > 0) {
      // Base rates per CBM (example rates)
      const baseRates: Record<string, number> = {
        mumbai: 85,
        chennai: 90,
        delhi: 95,
        kolkata: 100,
      };
      const baseRate = baseRates[origin] || 85;
      const totalCost = volume * baseRate;
      setCost(totalCost);
    } else {
      setCost(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === "cbm") {
      setCbm(e.target.value);
    } else {
      setOrigin(e.target.value);
    }
    calculateCost();
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        LCL Consolidation Cost Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="cbm" className="block text-sm font-medium text-slate-700">
            Volume (CBM)
          </label>
          <input
            id="cbm"
            name="cbm"
            type="number"
            value={cbm}
            onChange={handleInputChange}
            placeholder="5.5"
            step="0.1"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          />
        </div>
        <div>
          <label htmlFor="origin" className="block text-sm font-medium text-slate-700">
            Origin Port
          </label>
          <select
            id="origin"
            name="origin"
            value={origin}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
          >
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
            <option value="delhi">Delhi (via Mumbai)</option>
            <option value="kolkata">Kolkata</option>
          </select>
        </div>
        {cost > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-md bg-slate-50 p-4"
          >
            <p className="text-sm text-slate-600">Estimated Shipping Cost:</p>
            <p className="text-2xl font-bold text-slate-900">
              €{cost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Includes LCL consolidation, port handling, and Rotterdam delivery. Final rates may vary.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
