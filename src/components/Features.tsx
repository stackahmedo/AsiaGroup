import React from "react";
import { UserPlus, Building, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">私たちの合同説明会に参加する理由</h2>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-semibold max-w-2xl mx-auto">
            次のキャリアを探している方も、最適な人材を探している企業も、私たちが直接つなぎます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For Seekers */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 border border-gray-200 shadow-sm relative overflow-hidden group border-l-4 border-l-[var(--color-primary)]"
          >
            <div className="w-12 h-12 bg-[var(--color-surface)] flex items-center justify-center mb-6">
              <UserPlus className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 uppercase tracking-tight">求職者の方へ <span className="text-[var(--color-accent)] text-lg ml-2 font-medium">【個人】</span></h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed font-semibold">
              外国人の採用に積極的な企業と直接面談できます。長い選考プロセスをスキップし、採用担当者と直接話すことができます。
            </p>
            <ul className="space-y-4 mb-8">
              {['採用担当者との直接面接', '無料の履歴書アドバイスとサポート', '通訳サポートあり'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mr-3 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[var(--color-primary)] tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              参加申込み【個人】
            </button>
          </motion.div>

          {/* For Employers */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-surface)] p-8 border border-gray-200 shadow-sm relative overflow-hidden group border-l-4 border-l-[var(--color-accent)]"
          >
            <div className="w-12 h-12 bg-white flex items-center justify-center mb-6">
              <Building className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 uppercase tracking-tight">企業の方へ <span className="text-[var(--color-accent)] text-lg ml-2 font-medium">【法人】</span></h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed font-semibold">
              働く意欲の高い候補者を見つけましょう。毎日開催の説明会で、急な採用ニーズにも継続的に人材を紹介します。
            </p>
            <ul className="space-y-4 mb-8">
              {['費用対効果の高い採用', 'スクリーニング済みの候補者', 'スピーディーな選考プロセス'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] mr-3 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[var(--color-primary)] tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              参加申込み【法人】
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
