"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    // Hero
    greeting: "Bonjour, je suis",
    role: "Data Analyst | Experte en Business Intelligence & Modélisation",
    hero_desc: "Spécialiste de la donnée avec un solide background en Mathématiques Fondamentales, je transforme les flux d'informations complexes en leviers de décision stratégiques. Trilingue et maîtrisant l'Allemand, j'apporte une vision analytique rigoureuse aux entreprises évoluant dans des contextes internationaux.",
    view_projects: "Voir Mes Projets",
    get_in_touch: "Me Contacter",
    download_cv: "Télécharger CV",
    connect_with_me: "Connectez-vous avec moi :",
    
    // About
    about_title: "À Propos de Moi",
    about_desc: "Passionnée par l’intersection entre la rigueur mathématique et l’innovation technologique, j’ai choisi de me spécialiser en Data & Business Intelligence. Mon approche repose sur une conviction simple : la donnée n’a de valeur que si elle est analysée avec précision pour servir des objectifs concrets.",
    formation_title: "Formation",
    experience_title: "Expérience",
    languages_title: "Langues",
    
    // Skills
    skills_title: "Compétences Techniques",
    skills_desc: "Un ensemble de compétences alliant développement, analyse de données et modélisation.",
    skill_lang: "Langages & Frameworks",
    skill_data: "Données & Intelligence Artificielle",
    skill_db: "Bases de Données & Outils",
    skill_soft: "Compétences Comportementales",
    skill_soft_time: "Gestion du temps",
    skill_soft_responsibility: "Responsabilité",
    skill_soft_teamwork: "Travail en équipe",
    skill_soft_stress: "Gestion du stress",
    skill_soft_curiosity: "Curiosité",
    skill_soft_adaptability: "Adaptabilité",

    // Philosophy
    phil_title: "Philosophie Professionnelle",
    phil_rigor_title: "Rigueur Analytique",
    phil_rigor_desc: "Application de la logique mathématique pour interpréter des structures de données complexes et assurer leur cohérence.",
    phil_integrity_title: "Intégrité des Données",
    phil_integrity_desc: "Normes strictes pour la sécurité, la précision et la fiabilité des données dans chaque projet.",
    phil_perf_title: "Performance & Optimisation",
    phil_perf_desc: "Optimisation des environnements de données pour une efficacité et une rapidité maximales.",
    phil_learn_title: "Apprentissage Continu",
    phil_learn_desc: "Engagement envers l'apprentissage continu des nouvelles technologies Data & IA.",
    phil_quote: "\"Allier la Logique Mathématique à la Précision Technique pour bâtir des solutions de données robustes.\"",
    phil_cta: "Voir tous mes projets",

    // Certifications
    cert_title: "Certifications",
    cert_desc: "Mes qualifications académiques et professionnelles.",
    cert_view: "Voir",

    // Projects Page
    projects_page_title: "Mes Projets",
    projects_page_desc: "Une vitrine de mes travaux en Data Science, Intelligence Artificielle et Développement.",
    projects_github_btn: "Voir tous les projets sur GitHub",
    projects_details_btn: "Détails",

    // Contact
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Envoyer le message",
    contact_sending: "Envoi en cours...",
    contact_success: "Message envoyé avec succès !",
    contact_error: "Échec de l'envoi du message.",
    contact_touch_title: "Get In Touch",
    contact_touch_desc: "Vous avez un projet en tête ? Discutons de la manière dont nous pouvons travailler ensemble pour donner vie à vos idées.",
    contact_info_title: "Information de Contact",
    contact_info_email_desc: "Réponse sous 24 heures",
    contact_info_location_title: "Localisation",
    contact_info_location_value: "Casablanca, Maroc",
    contact_info_location_desc: "Disponible pour du travail à distance",
    contact_info_phone_title: "Téléphone",
    contact_info_phone_desc: "Disponible pour des appels",
    contact_info_follow_title: "Suivez-moi",
    contact_form_title: "Envoyez-moi un message",
    contact_form_desc: "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.",
    contact_personal_title: "C'est Fatima Ezzahra & j'ai hâte de vous lire !",
    contact_personal_desc: "Chaque message m'apporte de la joie. Que ce soit à propos de la Data Science, de la Business Intelligence, de l'IA, ou simplement pour dire bonjour - je suis ravie de connecter et d'aider comme je peux. Votre message fera ma journée !",

    // Footer & Nav
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_contact: "Contact",
    footer_rights: "Tous droits réservés.",
    footer_designed: "Conçu & développé par Fatima Ezzahra",
    footer_crafted: "Fait avec",
    footer_by: "par Fatima Ezzahra BARRADI",

    // About Items (General terms)
    current: "En cours",
    translate_portfolio: "Traduire ce portfolio",
    // Tooltips
    german_fluency: "Deutsch: Fließend",
    
    // Langs
    lang_ar: "Arabe",
    lang_fr: "Français",
    lang_en: "Anglais",
    lang_de: "Allemand",
    prof_native: "Langue maternelle",
    prof_fluent: "Courant",

    // Modal
    modal_close_aria: "Fermer la fenêtre modale",
  },
  de: {
    // Hero
    greeting: "Hallo, ich bin",
    role: "Data Analyst | Expertin für Business Intelligence & Modellierung",
    hero_desc: "Als Datenspezialistin mit fundiertem Hintergrund in fundamentaler Mathematik verwandle ich komplexe Informationsflüsse in strategische Entscheidungshebel. Dreisprachig und mit fließenden Deutschkenntnissen bringe ich eine rigorose analytische Vision in Unternehmen ein, die in internationalen Kontexten tätig sind.",
    view_projects: "Meine Projekte ansehen",
    get_in_touch: "Kontaktieren",
    download_cv: "Lebenslauf herunterladen",
    connect_with_me: "Verbinden Sie sich mit mir:",

    // About
    about_title: "Über mich",
    about_desc: "Aus Leidenschaft für die Schnittstelle zwischen mathematischer Strenge und technologischer Innovation habe ich mich auf Data & Business Intelligence spezialisiert. Mein Ansatz beruht auf einer einfachen Überzeugung: Daten haben nur dann einen Wert, wenn sie präzise analysiert werden, um konkreten Zielen zu dienen.",
    formation_title: "Ausbildung",
    experience_title: "Erfahrung",
    languages_title: "Sprachen",

    // Skills
    skills_title: "Technische Fähigkeiten",
    skills_desc: "Ein Kompetenzspektrum, das Entwicklung, Datenanalyse und Modellierung vereint.",
    skill_lang: "Sprachen & Frameworks",
    skill_data: "Daten & Künstliche Intelligenz",
    skill_db: "Datenbanken & Tools",
    skill_soft: "Soft Skills",
    skill_soft_time: "Zeitmanagement",
    skill_soft_responsibility: "Verantwortung",
    skill_soft_teamwork: "Teamarbeit",
    skill_soft_stress: "Stressbewältigung",
    skill_soft_curiosity: "Neugier",
    skill_soft_adaptability: "Anpassungsfähigkeit",

    // Philosophy
    phil_title: "Berufliche Philosophie",
    phil_rigor_title: "Analytische Strenge",
    phil_rigor_desc: "Anwendung mathematischer Logik zur Interpretation komplexer Datenstrukturen und Gewährleistung ihrer Kohärenz.",
    phil_integrity_title: "Datenintegrität",
    phil_integrity_desc: "Strenge Standards für Datensicherheit, Genauigkeit und Zuverlässigkeit in jedem Projekt.",
    phil_perf_title: "Leistung & Optimierung",
    phil_perf_desc: "Optimierung von Datenumgebungen für maximale Effizienz und Geschwindigkeit.",
    phil_learn_title: "Lebenslanges Lernen",
    phil_learn_desc: "Engagement für das kontinuierliche Erlernen neuer Data- & KI-Technologien.",
    phil_quote: "\"Verbindung von mathematischer Logik und technischer Präzision zum Aufbau robuster Datenlösungen.\"",
    phil_cta: "Alle meine Projekte ansehen",

    // Certifications
    cert_title: "Zertifizierungen",
    cert_desc: "Meine akademischen und beruflichen Qualifikationen.",
    cert_view: "Ansehen",

    // Projects Page
    projects_page_title: "Meine Projekte",
    projects_page_desc: "Ein Schaufenster meiner Arbeiten in Data Science, Künstlicher Intelligenz und Entwicklung.",
    projects_github_btn: "Alle Projekte auf GitHub ansehen",
    projects_details_btn: "Details",

    // Contact
    contact_name: "Name",
    contact_email: "E-Mail",
    contact_message: "Nachricht",
    contact_send: "Nachricht senden",
    contact_sending: "Wird gesendet...",
    contact_success: "Nachricht erfolgreich gesendet!",
    contact_error: "Nachricht konnte nicht gesendet werden.",
    contact_touch_title: "Kontakt aufnehmen",
    contact_touch_desc: "Haben Sie ein Projekt im Kopf? Lassen Sie uns besprechen, wie wir zusammenarbeiten können, um Ihre Ideen zu verwirklichen.",
    contact_info_title: "Kontaktinformationen",
    contact_info_email_desc: "Antwort innerhalb von 24 Stunden",
    contact_info_location_title: "Standort",
    contact_info_location_value: "Casablanca, Marokko",
    contact_info_location_desc: "Verfügbar für weltweite Remote-Arbeit",
    contact_info_phone_title: "Telefon",
    contact_info_phone_desc: "Für Anrufe verfügbar",
    contact_info_follow_title: "Folgen Sie mir",
    contact_form_title: "Senden Sie mir eine Nachricht",
    contact_form_desc: "Füllen Sie das untenstehende Formular aus und ich melde mich so schnell wie möglich bei Ihnen.",
    contact_personal_title: "Ich bin Fatima Ezzahra & ich kann es kaum erwarten, von Ihnen zu hören!",
    contact_personal_desc: "Jede Nachricht bereitet mir Freude. Ob es um Data Science, Business Intelligence, KI geht oder nur um Hallo zu sagen - ich freue mich darauf, mich zu vernetzen und zu helfen, wo ich kann. Ihre Nachricht wird meinen Tag versüßen!",

    // Footer & Nav
    nav_home: "Startseite",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_designed: "Entworfen & entwickelt von Fatima Ezzahra",
    footer_crafted: "Erstellt mit",
    footer_by: "von Fatima Ezzahra BARRADI",

    // About Items
    current: "Laufend",
    translate_portfolio: "Portfolio übersetzen",
    // Tooltips
    german_fluency: "Deutsch: Fließend",

    lang_ar: "Arabisch",
    lang_fr: "Französisch",
    lang_en: "Englisch",
    lang_de: "Deutsch",
    prof_native: "Muttersprache",
    prof_fluent: "Fließend",

    // Modal
    modal_close_aria: "Modal schließen",
  },
  en: {
    // Hero
    greeting: "Hello, I am",
    role: "Data Analyst | Expert in Business Intelligence & Modeling",
    hero_desc: "Data specialist with a solid background in Fundamental Mathematics, I transform complex information flows into strategic decision levers. Trilingual and mastering German, I bring a rigorous analytical vision to companies evolving in international contexts.",
    view_projects: "View My Projects",
    get_in_touch: "Get In Touch",
    download_cv: "Download CV",
    connect_with_me: "Connect with me:",

    // About
    about_title: "About Me",
    about_desc: "Passionate about the intersection of mathematical rigor and technological innovation, I chose to specialize in Data & Business Intelligence. My approach is based on a simple conviction: data has value only if analyzed with precision to serve concrete goals.",
    formation_title: "Education",
    experience_title: "Experience",
    languages_title: "Languages",

    // Skills
    skills_title: "Technical Skills",
    skills_desc: "A skill set combining development, data analysis, and modeling.",
    skill_lang: "Languages & Frameworks",
    skill_data: "Data & Artificial Intelligence",
    skill_db: "Databases & Tools",
    skill_soft: "Soft Skills",
    skill_soft_time: "Time Management",
    skill_soft_responsibility: "Responsibility",
    skill_soft_teamwork: "Teamwork",
    skill_soft_stress: "Stress Management",
    skill_soft_curiosity: "Curiosity",
    skill_soft_adaptability: "Adaptability",

    // Philosophy
    phil_title: "Professional Philosophy",
    phil_rigor_title: "Analytical Rigor",
    phil_rigor_desc: "Application of mathematical logic to interpret complex data structures and ensure their coherence.",
    phil_integrity_title: "Data Integrity",
    phil_integrity_desc: "Strict standards for data security, precision, and reliability in every project.",
    phil_perf_title: "Performance & Optimization",
    phil_perf_desc: "Optimization of data environments for maximum efficiency and speed.",
    phil_learn_title: "Continuous Learning",
    phil_learn_desc: "Commitment to continuous learning of new Data & AI technologies.",
    phil_quote: "\"Combining Mathematical Logic with Technical Precision to build robust data solutions.\"",
    phil_cta: "View all my projects",

    // Certifications
    cert_title: "Certifications",
    cert_desc: "My academic and professional qualifications.",
    cert_view: "View",

    // Projects Page
    projects_page_title: "My Projects",
    projects_page_desc: "A showcase of my work in Data Science, Artificial Intelligence, and Development.",
    projects_github_btn: "View All Projects on GitHub",
    projects_details_btn: "Details",

    // Contact
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_sending: "Sending...",
    contact_success: "Message sent successfully!",
    contact_error: "Failed to send message.",
    contact_touch_title: "Get In Touch",
    contact_touch_desc: "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
    contact_info_title: "Contact Information",
    contact_info_email_desc: "Response within 24 hours",
    contact_info_location_title: "Based In",
    contact_info_location_value: "Casablanca, Morocco",
    contact_info_location_desc: "Available for remote work worldwide",
    contact_info_phone_title: "Phone",
    contact_info_phone_desc: "Available for calls",
    contact_info_follow_title: "Follow Me",
    contact_form_title: "Send Me a Message",
    contact_form_desc: "Fill out the form below and I'll get back to you as soon as possible.",
    contact_personal_title: "I'm Fatima Ezzahra & I can't wait to hear from you!",
    contact_personal_desc: "Every message brings me joy. Whether it's about Data Science, Business Intelligence, AI, or just saying hi - I'm excited to connect and help however I can. Your message will make my day!",

    // Footer & Nav
    nav_home: "Home",
    nav_projects: "Projects",
    nav_contact: "Contact",
    footer_rights: "All rights reserved.",
    footer_designed: "Designed & developed by Fatima Ezzahra",
    footer_crafted: "Crafted with",
    footer_by: "by Fatima Ezzahra BARRADI",

    // About Items
    current: "Current",
    translate_portfolio: "Translate this portfolio",
    // Tooltips
    german_fluency: "Deutsch: Fließend",

    lang_ar: "Arabic",
    lang_fr: "French",
    lang_en: "English",
    lang_de: "German",
    prof_native: "Native",
    prof_fluent: "Fluent",

    // Modal
    modal_close_aria: "Close modal",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}