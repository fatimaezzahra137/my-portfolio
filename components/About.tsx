"use client";

import { 
  Code2, Zap, BookOpen, GraduationCap, Briefcase, Languages
} from "lucide-react";

export default function About() {
  const education = [
    {
      school: "JobInTech / SUPEMIR",
      certification: "Oracle Database Administration Journey", // الأحدث
      year: "Present",
      icon: Zap,
    },
    {
      school: "Codecademy",
      certification: "HTML",
      year: "Jan 2026",
      icon: BookOpen,
    },
    {
      school: "Codecademy",
      certification: "CSS",
      year: "Jan 2026",
      icon: BookOpen,
    },
    {
      school: "Codecademy",
      certification: "How to use AI with SQL",
      year: "Dec 2025",
      icon: BookOpen,
    },
    {
      school: "Codecademy",
      certification: "SQL",
      year: "Dec 2025",
      icon: BookOpen,
    },
    {
      school: "American Language Center",
      certification: "English Level 5 (Intermediate)",
      year: "Dec 2025",
      icon: BookOpen,
    },
    {
      school: "Hassan II University",
      certification: "Law Graduate (Private Law)", // الأقدم
      year: "2021",
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      title: "Operations & Supervision - BIM Supermarket",
      description: "Extensive experience in Operations & Supervision, including a role as Store Supervisor at BIM Supermarket. Responsible for managing daily operations, staff supervision, and inventory control. Leveraging this background to build secure and high-performance database environments and manage complex daily tasks.",
      year: "Professional Experience",
      icon: Briefcase,
    },
    {
      title: "Legal Research & Analysis",
      description: "Conducted comparative studies in Private Law (Maliki Jurisprudence vs Moroccan Family Code). Applied analytical thinking to interpret complex legal texts, a skill now applied to database auditing and logic.",
      year: "Academic Research",
      icon: BookOpen,
    },
  ];

  const languages = [
    {
      language: "Arabic",
      proficiency: "Native",
    },
    {
      language: "English",
      proficiency: "Professional Proficiency",
    },
    {
      language: "French",
      proficiency: "Professional Proficiency",
    },
  ];

 return (
  <section
    className="relative py-20 px-4 sm:px-6 lg:px-8"
    aria-label="About me section"
    style={{
      background: 'linear-gradient(135deg, #fdf2f2 0%, #ffffff 100%)',
    }}
  >
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
    </div>

    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4 animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-red-700">
          About Me
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Engaged in a professional Oracle Database Administration journey. I leverage my background in Private Law and extensive experience in Operations & Supervision to build secure and high-performance database environments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-6 animate-fade-in-up">
          <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
            <Zap className="w-6 h-6 text-red-600" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-red-200 transition-all" // <-- Hna bdlna
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {edu.certification}
                      </p>
                      <p className="text-xs text-red-700 pt-1">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
            <Code2 className="w-6 h-6 text-red-600" />
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((exp, idx) => {
              const ExpIcon = exp.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-red-200 transition-all" // <-- Hna bdlna
                >
                  <div className="flex items-start gap-3">
                    <ExpIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-gray-700 pt-2">
                        {exp.description}
                      </p>
                      <p className="text-xs text-red-700 pt-2">
                        {exp.year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages Section */}
        <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900 mb-6">
            <Languages className="w-6 h-6 text-red-600" />
            Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-red-200 transition-all text-center"
              >
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {lang.language}
                </h4>
                <p className="text-sm text-gray-600">
                  {lang.proficiency}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);}