// app/projects/page.tsx
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  category: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Atlas Market Migration",
    description: "Critical migration of retail legacy systems to Oracle Multitenant architecture. Ensured zero data loss and optimized performance for the new environment.",
    image: "/atlas-migration.png", // Add image to public folder
    github: "https://github.com/youssefaibi2018-code/Atlas_Market",
    technologies: ["Oracle Multitenant", "Data Migration", "SQL", "Legacy Systems"],
    category: "Database Migration"
  },
  {
    id: 2,
    title: "GYM Project - Data Ingestion & Security",
    description: "Implementation of CSV data ingestion pipelines, robust security protocols, and data reliability checks to ensure data integrity for a fitness management system.",
    image: "/gym-project.png", 
    github: "https://github.com/youssefaibi2018-code/Oracle_DBA_Project",
    technologies: ["SQL", "CSV Ingestion", "Database Security", "Data Reliability"],
    category: "Data Engineering & Security",
  },
  {
    id: 3, 
    title: "Private Law Research - Maliki Jurisprudence",
    description: "Comparative study between Maliki Jurisprudence and the Moroccan Family Code (Article 231). Demonstrates analytical thinking and legal research capabilities.",
    image: "/law-research.png", 
    github: "https://github.com/youssefaibi2018-code/Legal-Research-Family-Code-Morocco", 
    technologies: ["Legal Research", "Comparative Analysis", "Moroccan Family Code", "Documentation"],
    category: "Academic Research & Law",
  }
];

export default function ProjectsPage() {
  return (
    <div 
      className="min-h-screen py-20 px-4"
      style={{
        background: 'linear-gradient(135deg, #fdf2f2 0%, #ffffff 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-red-700 mb-4 animate-fade-in-up">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-left">
            A showcase of my work in Database Administration, Data Migration, and Legal Research.
          </p>
        </div>

        {/* قائمة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* صورة المشروع */}
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* محتوى المشروع */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {project.description}
                </p>

                {/* التقنيات */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-full border border-red-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* الأزرار */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors flex-1 justify-center"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* رابط GitHub الشخصي */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/youssefaibi2018-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            <Github size={24} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}