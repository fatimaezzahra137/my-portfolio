"use client";

import {
  Code2,
  Database,
  Wrench,
  Brain,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      name: t('skill_lang'),
      icon: Code2,
      skills: [
        "Python",
        "Java",
        "C",
        "SQL",
        "Flask",
        "Django",
        "Streamlit",
        "HTML/CSS",
      ],
    },
    {
      name: t('skill_data'),
      icon: Brain,
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "SciPy",
        "BeautifulSoup",
        "Machine Learning",
        "PCA",
        "XGBoost",
      ],
    },
    {
      name: t('skill_db'),
      icon: Database,
      skills: [
        "MySQL",
        "T-SQL",
        "UML",
        "VS Code",
        "Eclipse",
        "Oracle",
        "GitHub",
      ],
    },
    {
      name: t('skill_soft'),
      icon: Wrench,
      skills: [
        t('skill_soft_time'),
        t('skill_soft_responsibility'),
        t('skill_soft_teamwork'),
        t('skill_soft_stress'),
        t('skill_soft_curiosity'),
        t('skill_soft_adaptability'),
      ],
    },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Skills section"
      style={{
        background: 'linear-gradient(135deg, #F8E8E8 0%, #ffffff 100%)',
      }}
    >
      {/* Optional floating circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#F8E8E8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#704630]">
            {t('skills_title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('skills_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#E6C0CB] transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-[#F8E8E8] to-gray-100 rounded-lg">
                    <Icon className="w-5 h-5 text-[#704630]" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-[#F8E8E8] text-[#704630] rounded-full text-sm font-medium hover:bg-[#E6C0CB] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}