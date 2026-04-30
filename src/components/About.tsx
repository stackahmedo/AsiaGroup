import React from 'react';
import { motion } from 'motion/react';
import { Target, Users2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              <Target className="w-3 h-3 mr-2 text-[var(--color-accent)]" /> Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tighter">
              企業と個人の<br />
              <span className="text-[var(--color-accent)]">「出会い」</span>を支援します。
            </h2>
            
            <div className="space-y-6 text-sm font-medium text-gray-600 leading-relaxed">
              <p className="font-bold text-[var(--color-primary)]">
                多才な人材と出会える「合同説明会」を毎日開催中！
              </p>
              <p>
                「大手人材企業に登録したのに全然紹介してもらえない」「大手求人サイトに応募したのになかなか面接できない」という悩みを持っている人は少なくありません。
              </p>
              <p>
                しかし、全国雇用協会の「合同説明会」であれば、参加している数社から1社を選んで、人事担当者とすぐに面接することができます。土曜日も、日曜日も、祝日も開催しています。
              </p>
              <p>
                外国人材の方だけでなく、即戦力となる日本人材を含め、想定外の欠員が出た際にもすぐに補充できる体制を提供しております。
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] bg-slate-900 border border-gray-200 shadow-sm flex flex-col items-center justify-center p-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/90 via-[var(--color-primary)]/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1024&h=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            
            <div className="relative z-20 text-center bg-white border-l-4 border-[var(--color-accent)] p-8 max-w-sm ml-auto mt-auto shadow-xl">
              <Users2 className="w-8 h-8 text-[var(--color-primary)] mb-4" />
              <h3 className="text-[var(--color-primary)] font-bold text-lg mb-2 tracking-tight">累計開催実績</h3>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Total Job Fairs</div>
              <div className="text-4xl font-black text-[var(--color-primary)] tracking-tighter">2,351<span className="text-xl ml-1">回</span></div>
              <p className="text-[11px] font-semibold text-gray-400 mt-3 pt-3 border-t border-gray-100">
                2024年4月末時点
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
