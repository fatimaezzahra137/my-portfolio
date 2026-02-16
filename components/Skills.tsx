"use client";

import {
  Code2,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Database Administration",
      icon: Database,
      skills: [
        "Oracle Multitenant",
        "RMAN Backup/Recovery",
        "Data Cleansing (ETL)",
        "Data Migration",
        "Performance Tuning",
        "Security Protocols",
      ],
    },
    {
      name: "Languages & Web",
      icon: Code2,
      skills: [
        "SQL",
        "PL/SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Soft Skills & Competencies",
      icon: Brain,
      skills: [
        "Analytical Thinking",
        "Data Integrity",
        "Supervision & Leadership",
        "Legal Rigor",
        "Team Coordination",
      ],
    },
    {
      name: "Tools & Environment",
      icon: Wrench,
      skills: [
        "Oracle Database 19c",
        "SQL Developer",
        "Linux/Unix",
        "Git/GitHub",
      ],
    },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Skills section"
      style={{
        background: 'linear-gradient(135deg, #fdf2f2 0%, #ffffff 100%)',
      }}
    >
      {/* Optional floating circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-red-700">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A robust skillset combining Oracle Database Administration expertise with legal analytical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg hover:border-red-400 transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-100 to-gray-100 rounded-lg">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium hover:bg-red-100 transition-all"
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