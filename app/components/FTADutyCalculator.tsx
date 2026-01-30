"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FTADutyCalculatorProps {
  industryName: string;
  oldDuty: string;
  newDuty: string;
}

export default function FTADutyCalculator({
  industryName,
  oldDuty,
  newDuty,
}: FTADutyCalculatorProps) {
  const [monthlyExportValue, setMonthlyExportValue] = useState(10000);
  const [annualExportValue, setAnnualExportValue] = useState(120000);

  const oldDutyRate = parseFloat(oldDuty.replace("%", ""));
  const newDutyRate = parseFloat(newDuty.replace("%", ""));

  const calculateSavings = () => {
    const monthlySavings =
      (monthlyExportValue * (oldDutyRate - newDutyRate)) / 100;
    const annualSavings =
      (annualExportValue * (oldDutyRate - newDutyRate)) / 100;
    const monthlyDutyBefore = (monthlyExportValue * oldDutyRate) / 100;
    const monthlyDutyAfter = (monthlyExportValue * newDutyRate) / 100;

    return {
      monthlySavings,
      annualSavings,
      monthlyDutyBefore,
      monthlyDutyAfter,
      savingsPercentage: ((oldDutyRate - newDutyRate) / oldDutyRate) * 100,
    };
  };

  const {
    monthlySavings,
    annualSavings,
    monthlyDutyBefore,
    monthlyDutyAfter,
    savingsPercentage,
  } = calculateSavings();

  return (
    <div className="rounded-lg border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
        <span className="mr-2">💰</span>
        FTA Duty Savings Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Monthly Export Value (EUR)
          </label>
          <input
            type="number"
            min="0"
            value={monthlyExportValue}
            onChange={(e) => {
              const value = parseFloat(e.target.value) || 0;
              setMonthlyExportValue(value);
              setAnnualExportValue(value * 12);
            }}
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-lg font-semibold"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md bg-red-50 p-4 border border-red-200">
            <p className="text-xs font-medium text-red-700 mb-1">Before FTA</p>
            <p className="text-2xl font-bold text-red-600">
              {oldDuty}
            </p>
            <p className="text-sm text-red-700 mt-1">
              €{monthlyDutyBefore.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              /month
            </p>
          </div>
          <div className="rounded-md bg-emerald-50 p-4 border border-emerald-200">
            <p className="text-xs font-medium text-emerald-700 mb-1">
              After FTA 2026
            </p>
            <p className="text-2xl font-bold text-emerald-600">
              {newDuty}
            </p>
            <p className="text-sm text-emerald-700 mt-1">
              €{monthlyDutyAfter.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              /month
            </p>
          </div>
        </div>

        {monthlySavings > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg bg-emerald-100 border-2 border-emerald-300 p-4"
          >
            <p className="text-xs font-semibold text-emerald-900 mb-2">
              Monthly Duty Savings
            </p>
            <p className="text-3xl font-bold text-emerald-700">
              €{monthlySavings.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-sm text-emerald-800 mt-2">
              Annual savings: €
              {annualSavings.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-xs text-emerald-700 mt-2">
              You save {savingsPercentage.toFixed(1)}% on duties with the 2026
              EU-India FTA
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
