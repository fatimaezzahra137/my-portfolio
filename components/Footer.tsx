"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

export default function Footer() {
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
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">YS</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-400 to-gray-200 bg-clip-text text-transparent">
                Youssef Aibi
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Junior Oracle DBA & Law Graduate. Building secure, high-performance database environments 
              with a focus on Data Cleansing, Migration, and Multitenant Architecture.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
             
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Connect
            </h4>
            <p className="text-gray-300 text-sm">
              Let's collaborate on data-driven projects or discuss AI innovations.
            </p>
            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com/youssefaibi2018-code",
                  icon: Github,
                  label: "GitHub",
                  color: "hover:bg-gray-800",
                },
                {
                  href: "https://www.linkedin.com/in/youssef-aibi-99bb39305/",
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                },
                {
                  href: "https://www.instagram.com/youssef_aibi/",
                  icon: Instagram,
                  label: "Instagram",
                  color: "hover:bg-pink-600",
                },
                {
                  href: "mailto:youssef.aibi2018@gmail.com",
                  icon: Mail,
                  label: "Email",
                  color: "hover:bg-red-600",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={`p-3 bg-gray-900 rounded-xl border border-gray-800 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-red-500/30`}
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
              Designed & developed with modern tech stack
            </p>
            <p className="text-gray-300 text-center flex items-center justify-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by Youssef Aibi
              <span className="text-red-400 font-medium">© {currentYear}</span>
            </p>
            <p className="text-gray-400 text-sm">
              All intellectual property reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}