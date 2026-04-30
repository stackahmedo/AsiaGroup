import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-primary)] flex items-center justify-center rounded-sm">
                <div className="text-white font-bold text-xl">全</div>
              </div>
              <div className="leading-none flex flex-col justify-center mt-1">
                <h1 className="text-lg font-bold tracking-tight uppercase text-[var(--color-primary)]">
                  全国雇用協会
                </h1>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">
                  東京 • 日本 2011年設立
                </span>
              </div>
            </div>
            <div className="space-y-3 mb-6 font-semibold text-xs text-gray-500 uppercase tracking-wide">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" /> 〒101-0041
                東京都千代田区神田須田町1丁目28 ジュブナビル 6F
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" /> contact@nfea.net
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" /> Tel:
                03-6206-8058 / Fax: 03-6206-8179
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-tight text-[var(--color-primary)] mb-6">リンク集</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors">
                  当協会について
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors">
                  開催スケジュール
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors">
                  企業の方へ
                </a>
              </li>
              <li>
                <a href="#" className="text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors">
                  求職者の方へ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-tight text-[var(--color-primary)] mb-6">関連サイト</h4>
            <ul className="space-y-3 flex flex-col items-start">
              <a
                href="https://nationalemployments.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors"
              >
                nationalemployments.com{" "}
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
              <a
                href="https://jinzaishimbun.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors"
              >
                jinzaishimbun.com <ExternalLink className="w-3 h-3 ml-2" />
              </a>
              <a
                href="http://nfea.jp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors"
              >
                nfea.jp <ExternalLink className="w-3 h-3 ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider hover:text-[var(--color-primary)] transition-colors mt-2"
              >
                YouTubeチャンネル
              </a>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-[10px] text-center text-gray-400 font-medium flex flex-col md:flex-row justify-between items-center uppercase tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} 全国雇用協会.<br className="md:hidden" />
            無断複写・転載を禁じます。
          </p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// MapPin missing import fix for Footer
const MapPin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
