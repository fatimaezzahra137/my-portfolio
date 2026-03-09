"use client";

import { 
  Code2, Zap, BookOpen, GraduationCap, Briefcase, Languages, Heart
} from "lucide-react";

export default function About() {
  const education = [
    {
      school: "Supemir Académie | Casablanca",
      certification: "Formation JOBINTECH (SQL/PLSQL)",
      year: "2025 - En cours",
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

  const experience = [
    {
      title: "Données Stagiaire — HOUSSNI JOB Technopark, Casablanca",
      description: "Création de bases de données pour la gestion des CV.",
      year: "Octobre 2024",
      icon: Briefcase,
    },
    {
      title: "Stagiaire PFE — Arduino & IoT Médiouna",
      description: "Développement de logiciels robots pour une application web dans le cadre du projet de fin d'études.",
      year: "avril 2024",
      icon: Code2,
    },
  ];

  const languages = [
    {
      language: "Arabe",
      proficiency: "Langue maternelle",
    },
    {
      language: "Français",
      proficiency: "Courant",
    },
    {
      language: "Anglais",
      proficiency: "Courant",
    },
    {
      language: "Allemand",
      proficiency: "Courant",
    },
  ];

  const interests = [
    "Littérature",
    "Voyages",
    "Cuisine",
    "Photographie"
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
          À Propos de Moi
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Développeuse passionnée par la structure des données et l'optimisation, j'allie la logique mathématique au développement informatique. Je vise un stage de fin d'études en Data/IA orienté vers l'analyse, l'automatisation et la valorisation des données.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="space-y-6 animate-fade-in-up">
          <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
            <Zap className="w-6 h-6 text-[#704630]" />
            Formation
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
            Expérience
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
            Langues
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-4 bg-white backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md hover:border-[#E6C0CB] transition-all text-center"
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

          {/* Interests Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900 mb-6">
              <Heart className="w-6 h-6 text-[#704630]" />
              Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-4">
              {interests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-[#F8E8E8] hover:border-[#E6C0CB] hover:text-[#704630] transition-all shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);}