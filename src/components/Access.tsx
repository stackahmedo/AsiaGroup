import React from "react";
import { MapPin, Train, Info } from "lucide-react";

export default function Access() {
  return (
    <section className="py-20 bg-[var(--color-surface)] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3 h-3 mr-2 text-[var(--color-accent)]" /> 開催場所
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 uppercase tracking-tighter">
              アクセス<br/>
              <span className="text-[var(--color-accent)]">情報</span>
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-8 leading-relaxed">
              説明会は、都内の複数路線からアクセスしやすい便利な場所で開催されています。
            </p>

            <div className="space-y-4">
              <div className="flex p-5 bg-white border border-gray-200 shadow-sm items-start">
                <div className="bg-[var(--color-surface)] p-3 mr-4 flex-shrink-0 h-12 w-12 flex items-center justify-center border-l-2 border-[var(--color-accent)]">
                  <Train className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase tracking-tight">
                    JR秋葉原駅
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                    昭和通り口から徒歩約5分
                  </p>
                </div>
              </div>

              <div className="flex p-5 bg-white border border-gray-200 shadow-sm items-start">
                <div className="bg-[var(--color-surface)] p-3 mr-4 flex-shrink-0 h-12 w-12 flex items-center justify-center border-l-2 border-[var(--color-accent)]">
                  <Train className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm uppercase tracking-tight">
                    神田駅
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                    北口から徒歩約7分
                  </p>
                </div>
              </div>

              <div className="flex p-5 bg-[var(--color-primary)] border border-[var(--color-primary)] shadow-sm items-start text-white">
                <div className="bg-white/10 p-3 mr-4 flex-shrink-0 h-12 w-12 flex items-center justify-center border-l-2 border-[var(--color-accent)]">
                  <Info className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-tight">
                    ビル情報
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-300 mt-1 tracking-wide">
                    3階にお越しください。「アジアグループ」の看板が目印です。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] bg-slate-900 border border-gray-200 shadow-sm flex flex-col items-center justify-center">
            {/* Map Placeholder themed */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542051812871-7065961ba052?q=80&w=600&h=800&auto=format&fit=crop')] bg-cover bg-center" />
            
            <div className="relative z-20 flex flex-col items-center justify-center text-center p-8 bg-[var(--color-primary)]/80 backdrop-blur-sm border border-white/10">
              <MapPin className="w-12 h-12 text-[var(--color-accent)] mb-4" />
              <span className="text-white font-bold text-sm uppercase tracking-widest">
                アクセスマップ
              </span>
              <span className="text-[10px] font-semibold text-gray-400 mt-2 uppercase tracking-widest">
                エリア: 神田、秋葉原、岩本町
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
