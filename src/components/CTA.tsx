import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[var(--color-primary)] relative overflow-hidden shrink-0">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542051812871-7065961ba052?q=80&w=1024&h=400&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/80 to-[var(--color-primary)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
          Take Action Today
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">
          まずは合同説明会で<br className="hidden md:block" />
          新しい可能性を見つけませんか？
        </h2>
        <p className="text-gray-300 text-sm font-semibold leading-relaxed mb-10 max-w-2xl mx-auto">
          土日祝日も毎日開催。経験豊富なスタッフがあなたのご参加をお待ちしております。<br className="hidden md:block" />
          採用でお困りの企業様からのお問い合わせも随時受け付けております。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[var(--color-accent)] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[var(--color-primary)] transition-colors flex items-center justify-center">
            求職者として登録する
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[var(--color-primary)] transition-colors flex items-center justify-center">
            企業窓口はこちら
          </button>
        </div>
      </div>
    </section>
  );
}
