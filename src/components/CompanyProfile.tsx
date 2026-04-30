import React from 'react';
import { motion } from 'motion/react';
import { Building } from 'lucide-react';

const profileData = [
  { label: "会社名", value: "株式会社全国雇用協会" },
  { label: "所在地", value: "〒101-0041 東京都千代田区神田須田町1丁目28 ジュブナビル 6F" },
  { label: "TEL", value: "03-6206-8058" },
  { label: "FAX", value: "03-6206-8179" },
  { label: "MAIL", value: "contact@nfea.net" },
  { label: "会社設立", value: "2011年4月6日 (資本金 2,750万円)" },
  { label: "取引銀行", value: "三井住友銀行 東京中央支店" },
  { label: "関連法人", value: "一般社団法人全国外国人雇用協会" }
];

export default function CompanyProfile() {
  return (
    <section className="py-20 bg-[var(--color-surface)] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4">
            <div className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              <Building className="w-3 h-3 mr-2 text-[var(--color-accent)]" /> Corporate Profile
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 uppercase tracking-tighter">
              会社概要
            </h2>
            <p className="text-sm font-semibold text-gray-500 leading-relaxed max-w-sm">
              全国雇用協会は、法人の皆様と個人の皆様を繋ぐ確かな架け橋として、日本の労働市場における人材不足の解消と多様な人材の活躍を支援しています。
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-200 shadow-sm p-2">
              <table className="min-w-full text-sm text-left">
                <tbody className="divide-y divide-gray-100">
                  {profileData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <th className="py-4 px-6 font-bold text-[var(--color-primary)] bg-[var(--color-surface)] w-1/3 border-r border-gray-100">
                        {row.label}
                      </th>
                      <td className="py-4 px-6 font-semibold text-gray-600">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
