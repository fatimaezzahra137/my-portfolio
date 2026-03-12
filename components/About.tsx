"use client";

import { 
  Code2, Zap, BookOpen, GraduationCap, Briefcase, Languages, Bot
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { language, t } = useLanguage();

  const educationFR = [
    {
      school: "Supemir Académie | Casablanca",
      certification: "Formation JOBINTECH (SQL/PLSQL)",
      year: "Février 2026",
      icon: Zap,
    },
    {
      school: "Elite Deutsch Sprachezentrum",
      certification: "Études de langue allemande",
      year: "Novembre 2024",
      icon: BookOpen,
    },
    {
      school: "Gomycode",
      certification: "Formation sur l'IA Générative",
      year: "Octobre 2024",
      icon: BookOpen,
    },
    {
      school: "Université Hassan II de Casablanca",
      certification: "Formation C4EE (Cycle de l’emploi et l’entrepreneuriat)",
      year: "Juillet 2024",
      icon: BookOpen,
    },
    {
      school: "FSB, Casablanca",
      certification: "Licence Fondamentale en Mathématiques et Informatique - P. Base des Données",
      year: "2024–2025",
      icon: GraduationCap,
    },
    {
      school: "Lycée Allal Ben Abdellah, Casablanca",
      certification: "Baccalauréat Sciences Mathématiques A option française",
      year: "2021–2022",
      icon: GraduationCap,
    },
  ];

  const educationDE = [
    {
      school: "Supemir Akademie | Casablanca",
      certification: "JOBINTECH-Weiterbildung (SQL/PLSQL)",
      year: "Februar 2026",
      icon: Zap,
    },
    {
      school: "Elite Deutsch Sprachezentrum",
      certification: "Deutschsprachstudium",
      year: "November 2024",
      icon: BookOpen,
    },
    {
      school: "Gomycode",
      certification: "Weiterbildung in Generativer KI",
      year: "Oktober 2024",
      icon: BookOpen,
    },
    {
      school: "Universität Hassan II Casablanca",
      certification: "C4EE-Ausbildung (Zyklus für Beschäftigung und Unternehmertum)",
      year: "Juli 2024",
      icon: BookOpen,
    },
    {
      school: "FSB, Casablanca",
      certification: "Bachelor in Mathematik und Informatik - Schwerpunkt Datenbanken",
      year: "2024–2025",
      icon: GraduationCap,
    },
    {
      school: "Gymnasium Allal Ben Abdellah, Casablanca",
      certification: "Abitur Mathematische Wissenschaften A, französische Option",
      year: "2021–2022",
      icon: GraduationCap,
    },
  ];

  const experienceFR = [
    {
      title: "Data Analyste & Développeuse SQL — Proximity Management Institute",
      description: "Développement de scripts SQL/PLSQL sous Oracle et intégration de solutions d'IA Générative pour l'automatisation des analyses. Conception de rapports interactifs sur Power BI.",
      year: "Février 2026",
      icon: Briefcase,
    },
    {
      title: "Professeure en Informatique et Robotique — Groupe Scolaire Khawater",
      description: "Enseignement de l'informatique et de la robotique éducative. Initiation à la programmation, encadrement de projets techniques et développement de la pensée algorithmique chez les élèves.",
      year: "Septembre 2024",
      icon: Bot,
    },
    {
      title: "Analyste de Données Stagiaire — HOUSSNI JOB",
      description: "Modélisation et création de bases de données structurées pour l'optimisation de la gestion des CV et du sourcing candidat.",
      year: "Octobre 2024",
      icon: Briefcase,
    },
    {
      title: "Stagiaire PFE – Ingénierie IoT — Arduino & IoT",
      description: "Conception de robots logiciels et collecte de données via capteurs IoT pour une application web intégrée.",
      year: "Avril 2024",
      icon: Code2,
    },
  ];

  const experienceDE = [
    {
      title: "Datenanalystin & SQL-Entwicklerin — Proximity Management Institute",
      description: "Entwicklung von SQL/PLSQL-Skripten unter Oracle und Integration von Generative AI-Lösungen zur Automatisierung von Analysen. Erstellung interaktiver Berichte in Power BI.",
      year: "Februar 2026",
      icon: Briefcase,
    },
    {
      title: "Informatik- und Robotiklehrerin — Groupe Scolaire Khawater",
      description: "Unterricht in Informatik und Bildungsrobotik. Einführung in die Programmierung, Betreuung technischer Projekte und Förderung des algorithmischen Denkens bei Schülern.",
      year: "September 2024",
      icon: Bot,
    },
    {
      title: "Datenanalystin (Praktikantin) — HOUSSNI JOB",
      description: "Modellierung und Erstellung strukturierter Datenbanken zur Optimierung des Lebenslauf-Managements und des Kandidaten-Sourcings.",
      year: "Oktober 2024",
      icon: Briefcase,
    },
    {
      title: "PFE-Praktikantin – IoT-Engineering — Arduino & IoT",
      description: "Konzeption von Software-Robotern und Datenerfassung via IoT-Sensoren für eine integrierte Webanwendung.",
      year: "April 2024",
      icon: Code2,
    },
  ];

  const educationEN = [
    {
      school: "Supemir Academy | Casablanca",
      certification: "JOBINTECH Training (SQL/PLSQL)",
      year: "February 2026",
      icon: Zap,
    },
    {
      school: "Elite Deutsch Sprachezentrum",
      certification: "German Language Studies",
      year: "November 2024",
      icon: BookOpen,
    },
    {
      school: "Gomycode",
      certification: "Generative AI Training",
      year: "October 2024",
      icon: BookOpen,
    },
    {
      school: "Hassan II University of Casablanca",
      certification: "C4EE Training (Employment and Entrepreneurship Cycle)",
      year: "July 2024",
      icon: BookOpen,
    },
    {
      school: "FSB, Casablanca",
      certification: "Bachelor in Mathematics and Computer Science - Database Major",
      year: "2024–2025",
      icon: GraduationCap,
    },
    {
      school: "High School Allal Ben Abdellah, Casablanca",
      certification: "Baccalaureate in Mathematical Sciences A, French Option",
      year: "2021–2022",
      icon: GraduationCap,
    },
  ];

  const experienceEN = [
    {
      title: "Data Analyst & SQL Developer — Proximity Management Institute",
      description: "Development of SQL/PLSQL scripts under Oracle and integration of Generative AI solutions for analysis automation. Design of interactive reports on Power BI.",
      year: "February 2026",
      icon: Briefcase,
    },
    {
      title: "Computer Science and Robotics Teacher — Groupe Scolaire Khawater",
      description: "Teaching computer science and educational robotics. Introduction to programming, supervision of technical projects, and development of algorithmic thinking in students.",
      year: "September 2024",
      icon: Bot,
    },
    {
      title: "Data Analyst Intern — HOUSSNI JOB",
      description: "Modeling and creation of structured databases for optimizing CV management and candidate sourcing.",
      year: "October 2024",
      icon: Briefcase,
    },
    {
      title: "Graduation Project Intern – IoT Engineering — Arduino & IoT",
      description: "Design of software robots and data collection via IoT sensors for an integrated web application.",
      year: "April 2024",
      icon: Code2,
    },
  ];

  let education = educationFR;
  let experience = experienceFR;

  if (language === 'de') {
    education = educationDE;
    experience = experienceDE;
  } else if (language === 'en') {
    education = educationEN;
    experience = experienceEN;
  }

  const languages = [
    {
      language: t('lang_ar'),
      proficiency: t('prof_native'),
    },
    {
      language: t('lang_fr'),
      proficiency: t('prof_fluent'),
    },
    {
      language: t('lang_en'),
      proficiency: t('prof_fluent'),
    },
    {
      language: t('lang_de'),
      proficiency: t('prof_fluent'),
    },
  ];

 return (
  <section
    className="relative py-20 px-4 sm:px-6 lg:px-8"
    aria-label="About me section"
    style={{
      background: 'linear-gradient(135deg, #F8E8E8 0%, #ffffff 100%)',
    }}
  >
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#F8E8E8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
    </div>

    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-4 animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#704630]">
          {t('about_title')}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t('about_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-6 animate-fade-in-up">
          <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
            <Zap className="w-6 h-6 text-[#704630]" />
            {t('formation_title')}
          </h3>
          <div className="space-y-4">
            {education.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-[#E6C0CB] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[#704630] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {edu.certification}
                      </p>
                      <p className="text-xs text-[#704630] pt-1">
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
            <Code2 className="w-6 h-6 text-[#704630]" />
            {t('experience_title')}
          </h3>
          <div className="space-y-4">
            {experience.map((exp, idx) => {
              const ExpIcon = exp.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-[#E6C0CB] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <ExpIcon className="w-5 h-5 text-[#704630] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-gray-700 pt-2">
                        {exp.description}
                      </p>
                      <p className="text-xs text-[#704630] pt-2">
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
            <Languages className="w-6 h-6 text-[#704630]" />
            {t('languages_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="relative group p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-[#E6C0CB] transition-all text-center"
              >
                {/* Tooltip Allemand */}
                {idx === 3 && ( // Assuming German is always the 4th language
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg z-10">
                    {t('german_fluency')}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                )}

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