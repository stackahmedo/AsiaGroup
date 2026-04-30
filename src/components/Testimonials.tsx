import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "毎日開催されているので、今の仕事が休みの日を利用して参加できました。面接官と直接話せるので、自分の熱意を伝えることができ、無事にホテルへの転職が決まりました。",
    author: "ベトナム出身 (20代)",
    role: "ホテル・フロントへ内定",
  },
  {
    quote: "人材不足に悩んでおり、様々な求人媒体を試しましたが効果が出ませんでした。全国雇用協会の説明会に参加したところ、意欲的な人材に即日で出会うことができ、大変助かりました。",
    author: "飲食チェーン企業",
    role: "人事担当者",
  },
  {
    quote: "日本語には自信がありましたが、なかなか書類選考を通過できずにいました。説明会では直接面接からスタートできるため、コミュニケーション能力を評価していただき、IT企業に採用されました。",
    author: "中国出身 (30代)",
    role: "ITエンジニアへ内定",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">参加者の声</h2>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-semibold max-w-2xl mx-auto">
            Testimonials & Success Stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--color-surface)] p-8 border border-gray-200 relative flex flex-col h-full hover:border-[var(--color-accent)] transition-colors"
            >
              <Quote className="w-8 h-8 text-gray-300 absolute top-6 right-6 opacity-30" />
              <p className="text-sm font-semibold text-gray-600 leading-relaxed mb-8 relative z-10 flex-grow">
                "{test.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-bold text-[var(--color-primary)]">{test.author}</p>
                <p className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-tight mt-1">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
