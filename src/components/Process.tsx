import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, Building2, UserCheck, Trophy } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "参加申込み",
    subtitle: "Reservation",
    desc: "当サイトのフォームまたはLINEから、参加希望日を選んで申込みます。",
    icon: MousePointerClick
  },
  {
    step: "02",
    title: "会場へ来場",
    subtitle: "Visit Venue",
    desc: "ご予約された日時に、指定の会場（秋葉原・神田エリア）へお越しください。履歴書をお忘れなく。",
    icon: Building2
  },
  {
    step: "03",
    title: "企業説明・面接",
    subtitle: "Interview",
    desc: "参加企業の説明を聞き、希望する企業の人事担当者と直接面接を行います。通訳のサポートも可能です。",
    icon: UserCheck
  },
  {
    step: "04",
    title: "内定・就業",
    subtitle: "Job Offer",
    desc: "面接に合格すれば内定です。就労ビザの変更や更新のサポート、入社までのフォローも行います。",
    icon: Trophy
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-[var(--color-surface)] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">参加の流れ</h2>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-semibold max-w-2xl mx-auto">
            How it works for job seekers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 border border-gray-200 shadow-sm relative group hover:border-[var(--color-primary)] transition-colors"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-4xl font-black text-gray-100 group-hover:text-[var(--color-surface)] transition-colors">
                  {item.step}
                </span>
              </div>
              
              <div className="w-12 h-12 bg-[var(--color-surface)] flex items-center justify-center mb-6 border-l-2 border-[var(--color-accent)] relative z-10">
                <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">
                  {item.subtitle}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
