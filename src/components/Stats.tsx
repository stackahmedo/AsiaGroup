import React from "react";
import { Users, Building2, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    name: "累計開催回数 (Total Fairs)",
    value: "2,351",
    suffix: "回",
    icon: CalendarCheck,
    borderColor: "border-[var(--color-accent)]",
  },
  {
    name: "累計内定人数 (Total Offers)",
    value: "8,460",
    suffix: "人",
    icon: Users,
    borderColor: "border-[var(--color-primary)]",
  },
  {
    name: "月間参加企業 (Monthly Cos)",
    value: "314",
    suffix: "社",
    icon: Building2,
    borderColor: "border-[var(--color-primary)]",
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white p-5 border-l-4 ${stat.borderColor} shadow-sm`}
            >
              <h3 className="text-xs font-bold uppercase text-gray-400 mb-1 truncate">
                {stat.name}
              </h3>
              <p className="mt-2 text-4xl lg:text-5xl font-bold text-[var(--color-primary)] tracking-tighter">
                {stat.value}
                <span className="text-[11px] font-bold text-gray-400 ml-2 uppercase tracking-tight">
                  {stat.suffix}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
