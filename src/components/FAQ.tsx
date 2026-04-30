import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  { 
    q: "外国人ですが参加できますか？", 
    a: "もちろんです。留学生や就労ビザをお持ちの方など、多くの外国人材が毎日参加し、内定を獲得しています。にほんでしごとをさがしたいひとは、ぜひさんかしてください。" 
  },
  { 
    q: "参加費はかかりますか？", 
    a: "求職者の方は完全無料（0円）でご参加いただけます。参加費用だけでなく、履歴書の書き方や面接対策のサポートも無料で行っています。" 
  },
  { 
    q: "日本語が完璧でなくても大丈夫ですか？", 
    a: "企業によって必要な日本語レベルは異なりますが、日常会話レベル（JLPT N4〜N3相当）から応募可能な企業も多数参加しています。また、会場にはスタッフがおりサポートいたします。" 
  },
  { 
    q: "当日の持ち物や服装の指定はありますか？", 
    a: "履歴書（顔写真付き）、在留カード等の身分証明書、筆記用具をご持参ください。服装はスーツまたは清潔感のあるオフィスカジュアルを推奨しています。" 
  },
  {
    q: "企業側の参加条件を教えてください。",
    a: "法人参加にあたり特別な条件はございませんが、事前に会社概要や募集職種を確認させていただきます。人材不足でお悩みの企業様は、お気軽にお問い合わせください。"
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">よくある質問</h2>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-semibold max-w-2xl mx-auto">
            Frequently Asked Questions
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-6 shadow-sm border-l-4 border-l-[var(--color-primary)]"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[var(--color-surface)] flex items-center justify-center font-black text-[var(--color-accent)] text-lg">
                    Q
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-primary)] pt-1">{faq.q}</h3>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center font-black text-gray-300 text-lg">
                    A
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 leading-relaxed pt-1">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
