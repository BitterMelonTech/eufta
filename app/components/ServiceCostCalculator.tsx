"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Service {
  id: string;
  name: string;
  price: number;
  marketRate: string;
  description: string;
  unit: string;
  required?: boolean;
}

const services: Service[] = [
  {
    id: "pick-pack",
    name: "Pick & Pack",
    price: 2.75,
    marketRate: "€3.20+",
    description: "Basic pick + packing per order",
    unit: "per order",
    required: true,
  },
  {
    id: "extra-items",
    name: "Extra Items",
    price: 0.4,
    marketRate: "€0.60+",
    description: "Per additional SKU in same box",
    unit: "per SKU",
  },
  {
    id: "storage",
    name: "Storage",
    price: 15.0,
    marketRate: "€25.00+",
    description: "Per month per standard pallet",
    unit: "per pallet/month",
  },
  {
    id: "inbound",
    name: "Inbound",
    price: 6.0,
    marketRate: "€9.00+",
    description: "Unloading and inspection per pallet",
    unit: "per pallet",
  },
  {
    id: "returns",
    name: "Returns",
    price: 4.5,
    marketRate: "€5.50+",
    description: "Inspection and restocking per order",
    unit: "per return",
  },
  {
    id: "fiscal-rep",
    name: "Fiscal Representation",
    price: 150.0,
    marketRate: "€250.00+",
    description: "Monthly retainer for Article 23 management",
    unit: "per month",
  },
];

interface ServiceCostCalculatorProps {
  industryName: string;
}

export default function ServiceCostCalculator({
  industryName,
}: ServiceCostCalculatorProps) {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(["pick-pack"])
  );
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "pick-pack": 1,
    "extra-items": 0,
    storage: 0,
    inbound: 0,
    returns: 0,
    "fiscal-rep": 1,
  });
  const [monthlyOrders, setMonthlyOrders] = useState(100);
  const [avgItemsPerOrder, setAvgItemsPerOrder] = useState(1);
  const [palletsPerMonth, setPalletsPerMonth] = useState(1);
  const [returnRate, setReturnRate] = useState(5); // percentage

  const toggleService = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId);
    if (service?.required) return; // Can't deselect required services

    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
      setQuantities({ ...quantities, [serviceId]: 0 });
    } else {
      newSelected.add(serviceId);
      setQuantities({ ...quantities, [serviceId]: 1 });
    }
    setSelectedServices(newSelected);
  };

  const updateQuantity = (serviceId: string, value: number) => {
    setQuantities({ ...quantities, [serviceId]: Math.max(0, value) });
  };

  const calculateCosts = () => {
    let totalMonthlyCost = 0;
    let costPerOrder = 0;
    const breakdown: Array<{ service: string; cost: number; quantity: number }> =
      [];

    // Pick & Pack (always included)
    const pickPackCost = quantities["pick-pack"] * services[0].price;
    totalMonthlyCost += pickPackCost * monthlyOrders;
    breakdown.push({
      service: "Pick & Pack",
      cost: pickPackCost,
      quantity: monthlyOrders,
    });

    // Extra Items (additional SKUs)
    if (selectedServices.has("extra-items")) {
      const extraItemsPerOrder = Math.max(0, avgItemsPerOrder - 1);
      const extraItemsCostPerOrder = extraItemsPerOrder * services[1].price;
      const totalExtraItemsCost = extraItemsCostPerOrder * monthlyOrders;
      totalMonthlyCost += totalExtraItemsCost;
      if (totalExtraItemsCost > 0) {
        breakdown.push({
          service: `Extra Items (${extraItemsPerOrder} per order)`,
          cost: totalExtraItemsCost,
          quantity: monthlyOrders,
        });
      }
    }

    // Storage
    if (selectedServices.has("storage")) {
      const storageCost = quantities.storage * services[2].price * palletsPerMonth;
      totalMonthlyCost += storageCost;
      breakdown.push({
        service: "Storage",
        cost: storageCost,
        quantity: palletsPerMonth,
      });
    }

    // Inbound
    if (selectedServices.has("inbound")) {
      const inboundCost = quantities.inbound * services[3].price * palletsPerMonth;
      totalMonthlyCost += inboundCost;
      breakdown.push({
        service: "Inbound",
        cost: inboundCost,
        quantity: palletsPerMonth,
      });
    }

    // Returns
    if (selectedServices.has("returns")) {
      const returnsCount = Math.round((monthlyOrders * returnRate) / 100);
      const returnsCost = quantities.returns * services[4].price * returnsCount;
      totalMonthlyCost += returnsCost;
      if (returnsCost > 0) {
        breakdown.push({
          service: "Returns",
          cost: returnsCost,
          quantity: returnsCount,
        });
      }
    }

    // Fiscal Representation (monthly flat fee)
    if (selectedServices.has("fiscal-rep")) {
      const fiscalRepCost = quantities["fiscal-rep"] * services[5].price;
      totalMonthlyCost += fiscalRepCost;
      breakdown.push({
        service: "Fiscal Representation",
        cost: fiscalRepCost,
        quantity: 1,
      });
    }

    costPerOrder = totalMonthlyCost / monthlyOrders;

    return { totalMonthlyCost, costPerOrder, breakdown };
  };

  const { totalMonthlyCost, costPerOrder, breakdown } = calculateCosts();

  return (
    <div className="mt-8 rounded-xl border-2 border-slate-200 bg-white p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">
          Cost Calculator for {industryName}
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Configure your services and see the cost per order for D2C brands
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Service Selection */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">
            Select Services
          </h4>
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-lg border-2 p-4 transition-all ${
                  selectedServices.has(service.id)
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 bg-white"
                } ${service.required ? "opacity-75" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={service.id}
                        checked={selectedServices.has(service.id)}
                        onChange={() => toggleService(service.id)}
                        disabled={service.required}
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor={service.id}
                        className="text-sm font-semibold text-slate-900 cursor-pointer"
                      >
                        {service.name}
                        {service.required && (
                          <span className="ml-2 text-xs text-slate-500">
                            (Required)
                          </span>
                        )}
                      </label>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">
                      {service.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-lg font-bold text-emerald-600">
                        €{service.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-500">
                        {service.unit}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {service.marketRate}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedServices.has(service.id) && service.id !== "extra-items" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3"
                  >
                    {service.id === "storage" || service.id === "inbound" ? (
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Pallets per month
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={palletsPerMonth}
                          onChange={(e) =>
                            setPalletsPerMonth(parseInt(e.target.value) || 0)
                          }
                          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        />
                      </div>
                    ) : service.id === "returns" ? (
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Return rate (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={returnRate}
                          onChange={(e) =>
                            setReturnRate(parseInt(e.target.value) || 0)
                          }
                          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        />
                      </div>
                    ) : null}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Configuration & Results */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">
            Order Configuration
          </h4>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Monthly Order Volume
              </label>
              <input
                type="number"
                min="1"
                value={monthlyOrders}
                onChange={(e) =>
                  setMonthlyOrders(parseInt(e.target.value) || 1)
                }
                className="w-full rounded-md border border-slate-300 px-4 py-2 text-lg font-semibold"
              />
              <p className="mt-1 text-xs text-slate-500">
                Number of orders processed per month
              </p>
            </div>
            {selectedServices.has("extra-items") && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Items Per Order
                </label>
                <input
                  type="number"
                  min="1"
                  value={avgItemsPerOrder}
                  onChange={(e) =>
                    setAvgItemsPerOrder(parseInt(e.target.value) || 1)
                  }
                  className="w-full rounded-md border border-slate-300 px-4 py-2 text-lg font-semibold"
                />
                <p className="mt-1 text-xs text-slate-500">
                  Extra items fee applies to items beyond the first one
                </p>
              </div>
            )}
          </div>

          {/* Cost Breakdown */}
          <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-6">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">
              Cost Breakdown
            </h4>
            <div className="space-y-2 mb-4">
              {breakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-slate-600">
                    {item.service} {item.quantity > 1 && `(×${item.quantity})`}
                  </span>
                  <span className="font-semibold text-slate-900">
                    €{item.cost.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-emerald-300 pt-4 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-semibold text-slate-700">
                  Total Monthly Cost
                </span>
                <span className="text-2xl font-bold text-emerald-600">
                  €{totalMonthlyCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-emerald-200">
                <span className="text-lg font-bold text-slate-900">
                  Cost Per Order
                </span>
                <span className="text-3xl font-bold text-slate-900">
                  €{costPerOrder.toFixed(2)}
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-600 bg-white rounded p-2">
                💡 <strong>D2C Insight:</strong> At {monthlyOrders} orders/month,
                your fulfillment cost is €{costPerOrder.toFixed(2)} per order.
                Market average: €8-€12 per order. You save{" "}
                {((8 - costPerOrder) / 8 * 100).toFixed(0)}% vs. market rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
