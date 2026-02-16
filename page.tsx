import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Link from "next/link"; // <-- IMPORT CORRECT ICI
import { ArrowRight } from "lucide-react";
// Supprimer ProjectCard si tu ne l'utilises plus
// import ProjectCard from "@/components/ProjectCard";
// import { projects } from "@/data/projects";

export default function Home() {
  // Supprimer cette ligne si tu ne fais plus de projets filtrés
  // const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Competitions Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(135deg, #d2f8d2 0%, #f1f8e9 100%)',
        }}
        aria-label="Competitions"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-green-700">
              Robotics Competitions
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              National and local robotics competitions I've participated in and achieved results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Competition 1 */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-300 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ENIT Mohammedia Competition
              </h3>
              <p className="text-gray-700 mb-4">
                National robotics competition focused on autonomous navigation and object manipulation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  Robotics
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Arduino
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                  Teleoperation
                </span>
              </div>
              <p className="text-sm font-medium text-green-700">
                🏆 Achievement: Finalist
              </p>
            </div>

            {/* Competition 2 */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-300 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                UMP6 Competition
              </h3>
              <p className="text-gray-700 mb-4">
                University robotics challenge with focus on sensor integration and real-time control systems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  ROS
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Embedded Systems
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                  Team Project
                </span>
              </div>
              <p className="text-sm font-medium text-green-700">
                🥈 Achievement: 2nd Place
              </p>
            </div>

            {/* Competition 3 */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-300 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lensa Ljadida Competition
              </h3>
              <p className="text-gray-700 mb-4">
                Local robotics event with challenges in obstacle avoidance and path planning.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  Robotics
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Ultrasonic Sensors
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                  Competition
                </span>
              </div>
              <p className="text-sm font-medium text-green-700">
                🏅 Achievement: Participation
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              View All Competitions & Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}