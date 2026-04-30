import React from 'react';
import { motion } from 'motion/react';

const newsItems = [
  { date: '2024.04.26', tag: 'お知らせ', title: 'ゴールデンウィーク期間中の説明会スケジュールについて' },
  { date: '2024.04.15', tag: 'レポート', title: '累計内定人数が8,400人を突破いたしました' },
  { date: '2024.04.01', tag: 'イベント', title: '春の特別合同企業説明会を秋葉原にて開催いたします' },
  { date: '2024.03.20', tag: 'お知らせ', title: '公式サイトをリニューアルいたしました' },
];

export default function News() {
  return (
    <section className="py-20 bg-[var(--color-surface)] border-t border-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 uppercase tracking-tighter">
              最新情報<br/>
              <span className="text-[var(--color-accent)]">News</span>
            </h2>
            <p className="text-sm font-semibold text-gray-500 leading-relaxed mb-8">
              全国雇用協会からの最新のお知らせ、イベント情報、実績レポートなどをご覧いただけます。
            </p>
            <button className="py-3 px-8 border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors w-full sm:w-auto">
              すべて見る
            </button>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
              <div className="space-y-0">
                {newsItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 sm:items-center py-5 border-b border-gray-100 last:border-0 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest w-20">{item.date}</span>
                      <span className="text-[10px] bg-[var(--color-surface)] text-[var(--color-primary)] font-bold px-2 py-1 uppercase tracking-tight w-16 text-center border border-gray-200">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
