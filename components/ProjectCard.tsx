"use client";

import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?:  string;
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <article
      className="group h-full p-6 bg-white dark: bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-smooth flex flex-col"
      role="article"
    >
      {/* Image Placeholder */}
      {imageUrl && (
        <div className="mb-4 w-full h-48 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/40 dark:to-purple-900/40 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-smooth">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-blue-600 hover:text-white transition-smooth flex-1 justify-center"
            aria-label={`GitHub repository for ${title}`}
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-smooth flex-1 justify-center"
            aria-label={`Live demo for ${title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}