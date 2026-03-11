"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-b from-gray-950 to-black text-gray-100 py-14 px-4 sm:px-8 lg:px-12 border-t border-gray-800"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand & Bio */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#704630] to-[#5a3826] rounded-lg flex items-center justify-center font-bold text-white text-lg">
                FB
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#E6C0CB] to-gray-200 bg-clip-text text-transparent">
                Fatima Ezzahra BARRADI
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('role')}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E6C0CB] rounded-full"></span>
              Liens
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: t('nav_home') },
                { href: "/projects", label: t('nav_projects') },
                { href: "/contact", label: t('nav_contact') },
             
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E6C0CB] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#E6C0CB] transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E6C0CB] rounded-full"></span>
              {t('connect_with_me')}
            </h4>
            <p className="text-gray-300 text-sm">
              
            </p>
            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com/fatimaezzahra137",
                  icon: Github,
                  label: "GitHub",
                  color: "hover:bg-gray-800",
                },
                {
                  href: "https://www.linkedin.com/in/fati-barradi-1b8776312",
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                },
                {
                  href: "mailto:fbaradi52@gmail.com",
                  icon: Mail,
                  label: "Email",
                  color: "hover:bg-[#704630]",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}                  className={`p-3 bg-gray-900 rounded-xl border border-gray-800 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#E6C0CB]/30`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer_designed')}
            </p>
            <p className="text-gray-300 text-center flex items-center justify-center gap-2">
              {t('footer_crafted')} <Heart className="w-4 h-4 text-[#E6C0CB] animate-pulse" /> {t('footer_by')}
              <span className="text-[#E6C0CB] font-medium">© {currentYear}</span>
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer_rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}