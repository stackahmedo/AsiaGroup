import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe, MessageCircle, ChevronDown, Users } from "lucide-react";

const LANGUAGES = ["JP", "EN", "VN", "Nepali", "Bangla", "Urdu"];

const LANG_MAP: Record<string, string> = {
  JP: "ja",
  EN: "en",
  VN: "vi",
  Nepali: "ne",
  Bangla: "bn",
  Urdu: "ur"
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("JP");

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/ja\/([a-z]{2})/);
    if (match) {
      const code = match[1];
      const reverseMap: Record<string, string> = {
        ja: "JP", en: "EN", vi: "VN", ne: "Nepali", bn: "Bangla", ur: "Urdu"
      };
      setActiveLang(reverseMap[code] || "JP");
    }
  }, []);

  const translateTo = (lang: string) => {
    const targetCode = LANG_MAP[lang];
    if (!targetCode) return;
    
    setActiveLang(lang);
    
    const host = window.location.hostname;
    
    if (lang === "JP") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${host};`;
      window.location.reload();
    } else {
      document.cookie = `googtrans=/ja/${targetCode}; path=/;`;
      document.cookie = `googtrans=/ja/${targetCode}; path=/; domain=${host};`;
      document.cookie = `googtrans=/ja/${targetCode}; path=/; domain=.${host};`;
      
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (select) {
        select.value = targetCode;
        select.dispatchEvent(new Event('change'));
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50 transition-all duration-300">
      {/* Top Bar - Contact Info */}
      <div className="bg-zinc-900 text-gray-300 py-1.5 text-[10px] tracking-widest hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
          <div className="flex space-x-6 font-semibold">
            <a href="tel:03-6206-8058" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-gray-400" /> 03-6206-8058
            </a>
            <a href="mailto:contact@nfea.net" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-gray-400" /> contact@nfea.net
            </a>
            <a href="#" className="flex items-center text-green-500 hover:text-green-400 transition-colors">
              <MessageCircle className="w-3.5 h-3.5 mr-2" /> LINEサポート
            </a>
          </div>
          <div className="flex space-x-3 items-center font-bold relative z-50">
            {/* Language Dropdown */}
            <div className="relative group cursor-pointer inline-flex items-center space-x-1.5 hover:text-white transition-colors py-1">
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{activeLang}</span>
              <ChevronDown className="w-3 h-3 opacity-50" />

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-gray-200 shadow-xl min-w-[120px] flex flex-col py-1">
                  {LANGUAGES.map((lang) => (
                    <button 
                      key={lang}
                      onClick={() => translateTo(lang)}
                      className={`text-left px-4 py-2 text-[11px] font-bold uppercase transition-colors ${
                        activeLang === lang 
                          ? "bg-slate-50 text-[var(--color-accent)]" 
                          : "text-zinc-700 hover:bg-slate-50 hover:text-[var(--color-accent)]"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3 cursor-pointer">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 bg-zinc-900 text-white flex items-center justify-center rounded pl-0.5">
                <Users className="w-5 h-5 -ml-0.5" />
              </div>
              <div className="leading-none flex flex-col justify-center mt-1">
                <h1 className="text-base font-black tracking-tight text-zinc-900">
                  全国雇用協会
                </h1>
                <span className="text-[9px] text-[var(--color-accent)] uppercase tracking-widest font-black mt-1">
                  NFEA INC.
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-xs font-bold text-zinc-900 hover:text-[var(--color-accent)] transition-colors relative group"
            >
              当協会について
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#schedule"
              className="text-xs font-bold text-zinc-900 hover:text-[var(--color-accent)] transition-colors relative group"
            >
              合同説明会
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#employers"
              className="text-xs font-bold text-zinc-900 hover:text-[var(--color-accent)] transition-colors relative group"
            >
              企業の方へ
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#seekers"
              className="text-xs font-bold text-zinc-900 hover:text-[var(--color-accent)] transition-colors relative group"
            >
              求職者の方へ
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="bg-[var(--color-primary)] text-white px-7 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-zinc-800 transition-colors shadow-sm ml-2">
              参加予約
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-primary)] hover:text-[var(--color-accent)] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a
              href="#about"
              className="block px-3 py-3 text-sm font-bold uppercase text-[var(--color-primary)] hover:bg-gray-50 hover:text-[var(--color-accent)]"
            >
              当協会について
            </a>
            <a
              href="#schedule"
              className="block px-3 py-3 text-sm font-bold uppercase text-[var(--color-primary)] hover:bg-gray-50 hover:text-[var(--color-accent)]"
            >
              合同説明会
            </a>
            <a
              href="#employers"
              className="block px-3 py-3 text-sm font-bold uppercase text-[var(--color-primary)] hover:bg-gray-50 hover:text-[var(--color-accent)]"
            >
              企業の方へ
            </a>
            <a
              href="#seekers"
              className="block px-3 py-3 text-sm font-bold uppercase text-[var(--color-primary)] hover:bg-gray-50 hover:text-[var(--color-accent)]"
            >
              求職者の方へ
            </a>
            <div className="px-3 py-3 flex flex-wrap gap-2 text-xs font-bold text-gray-400 uppercase border-t border-gray-100">
              <span className="flex items-center text-[10px] mr-2"><Globe className="w-3.5 h-3.5 mr-1"/> Lang:</span>
              {LANGUAGES.map((lang) => (
                <button 
                  key={lang}
                  onClick={() => translateTo(lang)}
                  className={`transition-colors px-2 py-1 rounded bg-slate-50 border ${
                    activeLang === lang ? "border-[var(--color-accent)] text-[var(--color-accent)]" : "border-gray-100 hover:border-gray-300"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button className="w-full mt-2 bg-[var(--color-primary)] text-white px-3 py-4 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-zinc-800 transition-colors">
              参加予約
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
