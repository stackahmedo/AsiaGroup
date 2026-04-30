import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="bg-[var(--color-surface)] pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Hero Section (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative h-[400px] lg:h-[480px] bg-slate-900 overflow-hidden group flex flex-col justify-end p-8 lg:p-10 border border-transparent"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1024&h=500&auto=format&fit=crop')] bg-cover bg-center"></div>

            <div className="relative z-20">
              <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
                毎日開催 合同説明会
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6 uppercase tracking-tighter">
                才能と機会を<br className="hidden lg:block" />
                <span className="text-[var(--color-accent)]">つなぐ</span>
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md font-medium">
                毎日開催の合同説明会に参加しませんか。<br/>
                私たちは、日本における企業と個人の「出会い」を支援します。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[var(--color-primary)] px-8 py-3 text-xs font-bold uppercase tracking-tighter hover:bg-gray-200 transition-colors flex items-center justify-center">
                  説明会に申し込む
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border border-white/50 text-white px-8 py-3 text-xs font-bold uppercase tracking-tighter hover:bg-white/10 transition-colors flex items-center justify-center">
                  詳しくはこちら
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Area (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-white border border-gray-200 p-6 shadow-sm flex-1">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">
                  多言語サポート
                </h3>
                <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase border-b border-[var(--color-accent)] cursor-pointer">
                  すべて見る
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-[var(--color-surface)] p-4 border-l-4 border-[var(--color-accent)]">
                  <p className="text-[var(--color-primary)] font-bold text-sm leading-relaxed">
                    にほんではたらきたいひとのやくにたつイベントです。
                    <br />
                    にほんで、しごとをさがしたいひとはさんかしてください。
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-[var(--color-primary)] shadow-sm">
                  <p className="text-[var(--color-primary)] text-xs font-semibold">
                    If you want to participate JOB FAIR, click here!
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-[var(--color-primary)] shadow-sm">
                  <p className="text-[var(--color-primary)] text-xs font-semibold">
                    如果您想参加"工作展"，请点击这里
                  </p>
                </div>
                <div className="bg-white p-4 border-l-4 border-[var(--color-primary)] shadow-sm">
                  <p className="text-[var(--color-primary)] text-xs font-semibold">
                    "Triển lãm thủ công" có Rugoo Yusou tham gia, đặc trưng ở Kori
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                参加申込み (さんかもうしこみ)
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
