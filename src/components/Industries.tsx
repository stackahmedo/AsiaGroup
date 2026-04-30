import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Wrench, Monitor, ShoppingBag, Hotel, Factory } from 'lucide-react';

const industries = [
  { name: '飲食・フード', icon: Utensils, desc: 'レストラン、カフェ、居酒屋などのホール・キッチンスタッフ' },
  { name: 'ホテル・宿泊', icon: Hotel, desc: 'フロント、客室清掃、ベルスタッフ、レストランサービス' },
  { name: 'IT・エンジニア', icon: Monitor, desc: 'プログラマー、システムエンジニア、インフラエンジニア' },
  { name: '販売・接客', icon: ShoppingBag, desc: 'コンビニ、アパレル、スーパー、家電量販店などの店舗スタッフ' },
  { name: '製造・工場', icon: Factory, desc: '食品製造、機械組立、ライン作業、検品スタッフ' },
  { name: '建設・設備', icon: Wrench, desc: '施工管理、電気工事、内装工事、設備メンテナンス' }
];

export default function Industries() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">募集職種・業界</h2>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-semibold max-w-2xl mx-auto">
            Target Industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--color-surface)] p-8 border border-gray-200 group hover:border-[var(--color-accent)] transition-colors"
            >
              <ind.icon className="w-8 h-8 text-[var(--color-primary)] mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-[var(--color-primary)] font-bold text-base mb-3 tracking-tight">{ind.name}</h3>
              <p className="text-xs font-semibold text-gray-500 leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
