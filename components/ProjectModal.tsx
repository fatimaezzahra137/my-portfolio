"use client";

import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { X, Target, Wrench, TrendingUp } from 'lucide-react';

// Définition de la structure détaillée d'un projet
interface ProjectDetails {
  problem: { title: string; content: string };
  action: { title: string; points: string[] };
  result: { title: string; points: string[] };
}

interface Project {
  title: string;
  details?: ProjectDetails;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  // Fermer la modale avec la touche "Echap"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project.details) return null;

  const { problem, action, result } = project.details;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative animate-slide-in-up-fast"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant dans la modale
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
          aria-label={t('modal_close_aria')}
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-[#704630] mb-6">{project.title}</h2>

        <div className="space-y-8">
          {/* Problème */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-3">
              <Target className="text-[#704630]" />
              {problem.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{problem.content}</p>
          </section>

          {/* Action */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-3">
              <Wrench className="text-[#704630]" />
              {action.title}
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {action.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </section>

          {/* Résultat */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3 mb-3">
              <TrendingUp className="text-[#704630]" />
              {result.title}
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {result.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}