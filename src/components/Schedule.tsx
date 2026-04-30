import React from "react";
import { MapPin, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const scheduleData = [
  {
    date: "4/30",
    day: "木",
    entry: "満席",
    company: "飲食",
    job: "店舗管理全般",
    salary: "29万～",
    location: "東京都・神奈川県・埼玉県",
    details: "王道の横浜家系ラーメンの美味しさを守り続けるラーメン店",
  },
  {
    date: "5/1",
    day: "金",
    entry: "残り2社",
    company: "販売",
    job: "店舗運営業務",
    salary: "25万～28万",
    location: "東京都千代田区",
    details: "コンビニエンスストアの店舗運営業務です。",
  },
  {
    date: "5/2",
    day: "土",
    entry: "残り3社",
    company: "食品製造",
    job: "ベーカリー製造職",
    salary: "27万～48万",
    location: "北海道、青森県、岩手県、宮城県、奈良県",
    details: "海外食料品の輸出入・販売、国産食料品の開発・加工・販売",
  },
  {
    date: "5/3",
    day: "日",
    entry: "残り2社",
    company: "ホテル",
    job: "フロントスタッフ",
    salary: "18万～33万",
    location: "長野県",
    details: "信州長野の志賀高原泉天空温泉群にあるホテルです。",
  },
  {
    date: "5/4",
    day: "月",
    entry: "残り4社",
    company: "飲食",
    job: "ホール・キッチンからスタート",
    salary: "22万～",
    location: "東京",
    details: "ロシア・ウクライナ・ジョージア料理で有名なレストランです。",
  },
  {
    date: "5/5",
    day: "火",
    entry: "残り4社",
    company: "IT",
    job: "技術サポート、Linuxプログラマー",
    salary: "23万～",
    location: "神奈川県横浜市",
    details: "グローバルに活躍する、次世代技術者を募集！",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-tight text-[var(--color-primary)]">
              開催スケジュール
            </h2>
            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-semibold">
              あなたにぴったりの説明会を見つけましょう
            </p>
          </div>
          <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase border-b border-[var(--color-accent)] cursor-pointer hidden lg:block">
            すべてのスケジュールを見る
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white border border-gray-200 p-6 shadow-sm">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">日付</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">状況</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">企業</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">職種</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">給与</th>
                <th scope="col" className="px-4 py-3 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">勤務地</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {scheduleData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[var(--color-surface)] transition-colors group cursor-pointer">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="bg-[var(--color-surface)] text-center px-3 py-2 shrink-0 inline-block">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase">{row.day}</span>
                      <span className="block text-sm font-black tracking-tighter text-[var(--color-primary)]">{row.date}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${row.entry.includes("満席") ? "text-red-500" : "text-[var(--color-accent)]"}`}>
                      {row.entry}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xs font-bold uppercase tracking-tight text-[var(--color-primary)]">
                    {row.company}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-xs font-bold uppercase mb-1 text-[var(--color-primary)] tracking-tight">{row.job}</div>
                    <div className="text-[10px] font-semibold text-gray-500 line-clamp-1">{row.details}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {row.salary}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-[11px] font-bold text-gray-500 flex items-center h-full pt-7 border-b-transparent">
                    <MapPin className="w-3 h-3 mr-1" />
                    {row.location.length > 8 ? row.location.substring(0, 8) + "..." : row.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {scheduleData.map((row, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={idx}
              className="bg-white border text-[var(--color-primary)] border-gray-200 p-5 shadow-sm rounded-none"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[var(--color-surface)] text-[var(--color-primary)] px-3 py-2 text-center h-full border-l-2 border-[var(--color-accent)]">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase">{row.day}</span>
                    <span className="block text-sm font-black tracking-tighter">{row.date}</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-tight uppercase text-[var(--color-primary)]">{row.job}</h3>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase">{row.company}</div>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest ${
                    row.entry.includes("満席")
                      ? "text-red-500"
                      : "text-[var(--color-accent)]"
                  }`}
                >
                  {row.entry}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] font-semibold uppercase text-gray-500 mb-4 tracking-wider">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {row.salary}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">{row.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[10px] font-semibold text-gray-500 truncate mr-4">
                  {row.details}
                </p>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <button className="w-full py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors">
            すべてのスケジュールを見る
          </button>
        </div>
      </div>
    </section>
  );
}
