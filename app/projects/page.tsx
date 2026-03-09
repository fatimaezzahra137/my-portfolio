"use client";

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ProjectModal from '@/components/ProjectModal';

interface ProjectDetails {
  problem: { title: string; content: string };
  action: { title: string; points: string[] };
  result: { title: string; points: string[] };
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  category: string;
  demo?: string;
  details?: ProjectDetails;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cinema Analysis Dashboard",
    description: "Tableau de bord interactif pour l'analyse des tendances cinématographiques et des données du box-office.",
    image: "/cinema-analysis-dashboard.png",
    github: "https://github.com/fatimaezzahra137/cinema-analysis-dashboard",
    technologies: ["Python", "Data Viz", "Streamlit", "Pandas"],
    category: "Data Analysis",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "L'industrie du cinéma génère des volumes massifs de données (budgets, revenus, notes, genres). L'objectif était d'extraire des tendances stratégiques à partir d'un dataset brut de plus de 45 000 films (movies_metadata.csv) pour comprendre quels facteurs (genre, année de sortie, budget) influencent réellement le succès financier et la popularité d'un film."
      },
      action: {
        title: "Action",
        points: [
          "Nettoyage de données complexe : Traitement des formats JSON imbriqués pour extraire les genres, conversion des types de données (budgets et revenus en numérique) et gestion rigoureuse des valeurs manquantes pour éviter tout biais statistique.",
          "Ingénierie des caractéristiques : Création de nouvelles métriques, comme le calcul du profit, et extraction de l'année de sortie à partir des dates complètes pour permettre une analyse temporelle.",
          "Exploration Statistique (EDA) : Utilisation de Pandas et NumPy pour agréger les données par genre et par année afin d'identifier les catégories les plus rentables.",
          "Visualisation de données avancée : Développement d'un tableau de bord interactif avec Streamlit, intégrant des graphiques Matplotlib pour la répartition des revenus par genre et des graphiques natifs pour l'évolution des notes moyennes au fil du temps."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Traitement de données à grande échelle : Mise en place d'un pipeline capable de nettoyer et de structurer des fichiers CSV volumineux de manière automatisée.",
          "Interactivité et Clarté : Création d'un outil d'aide à la décision permettant de visualiser instantanément le retour sur investissement moyen par genre.",
          "Optimisation des performances : Utilisation du système de mise en cache de Streamlit (@st.cache_data) pour permettre une manipulation fluide et instantanée des données, même lors de tris ou de filtrages complexes par l'utilisateur."
        ]
      }
    }
  },
  {
    id: 2,
    title: "Expert Immo Casablanca",
    description: "Système d'estimation immobilière intelligent pour le marché de Casablanca utilisant des données réelles.",
    image: "/expert-immo-casablanca.png",
    github: "https://github.com/fatimaezzahra137/expert-immo-casablanca",
    technologies: ["Machine Learning", "Real Estate", "Python", "XGBoost", "Scikit-learn"],
    category: "AI & Real Estate",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Le marché immobilier à Casablanca est extrêmement hétérogène et complexe. Les modèles linéaires classiques échouent à capturer les variations de prix d'un quartier à l'autre (ex: Gauthier vs Oulfa) ou l'impact non linéaire du nombre de pièces sur la valeur finale. L'objectif était de créer un outil capable de fournir des estimations précises et objectives en tenant compte des spécificités géographiques et techniques locales."
      },
      action: {
        title: "Action",
        points: [
          "Nettoyage de données rigoureux : Élimination des doublons, des annonces incomplètes et filtrage des valeurs aberrantes (prix irréalistes, surfaces incohérentes) pour garantir la qualité 'Garbage In, Garbage Out'.",
          "Développement du moteur IA : Implémentation de l'algorithme XGBoost, un modèle de 'Gradient Boosting' choisi pour sa capacité à corriger séquentiellement les erreurs de prédiction et à gérer des interactions complexes comme le rapport entre l'étage, la vue et le quartier.",
          "Optimisation (Fine-Tuning) : Configuration précise des hyperparamètres (1000 arbres, taux d'apprentissage de 0.05, profondeur de 8) pour équilibrer précision et stabilité du modèle.",
          "Interface Interactive : Création d'une application web avec Streamlit incluant une carte interactive (Folium) pour la sélection géographique et la génération automatique de rapports d'expertise en PDF."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Précision élevée : Le modèle atteint une précision (Score R²) allant jusqu'à 98% sur les données de test.",
          "Fiabilité mathématique : Mise en place d'une validation croisée (K-Fold) garantissant une stabilité du modèle à 99%, assurant des résultats cohérents sur tous les quartiers de Casablanca.",
          "Impact métier : Réduction de l'erreur moyenne (MAE) grâce au nettoyage des données, offrant aux utilisateurs une estimation fiable en quelques millisecondes et un document officiel pour leurs démarches."
        ]
      }
    }
  },
  {
    id: 3, 
    title: "Système de BI & Dashboard de Maintenance",
    description: "Solution décisionnelle (BI) pour centraliser les données, automatiser le suivi budgétaire et optimiser les interventions techniques.",
    image: "/maintenance-universitaire-powerbi.png",
    github: "https://github.com/fatimaezzahra137/maintenance-universitaire-powerbi", 
    technologies: ["Power BI", "Oracle SQL", "PL/SQL", "DAX", "Power Query", "ETL"],
    category: "Business Intelligence",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Dans un environnement industriel ou de service, les données brutes de maintenance sont souvent dispersées et difficiles à interpréter. L'objectif de ce projet était de construire une solution décisionnelle (BI) complète capable de centraliser ces données, d'automatiser le suivi budgétaire et d'identifier les leviers de productivité pour optimiser les interventions techniques."
      },
      action: {
        title: "Action",
        points: [
          "Architecture de Données (Back-end) : Conception et mise en œuvre d'une base de données robuste avec Oracle SQL. Utilisation du PL/SQL pour automatiser les processus de gestion et garantir l'intégrité des données de maintenance.",
          "Modélisation Dimensionnelle : Structuration des données selon un schéma en étoile (Star Schema), optimisant les performances de lecture pour l'analyse décisionnelle.",
          "Ingénierie de la donnée (ETL) : Utilisation de Power Query pour le nettoyage, la transformation et le chargement des données depuis Oracle vers Power BI.",
          "Calculs Analytiques Avancés : Création de mesures complexes en DAX (Data Analysis Expressions) pour le calcul des indicateurs de performance (KPI), des écarts budgétaires et des taux de productivité.",
          "Visualisation Stratégique : Développement d'un tableau de bord interactif sous Power BI intégrant des Jauges, des Ribbon Charts et des Scatter Charts pour une analyse complète."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Pilotage en Temps Réel : Mise en place d'une visibilité instantanée sur la consommation du budget de maintenance, permettant d'éviter les dépassements financiers.",
          "Optimisation Opérationnelle : Identification précise des périodes critiques (saisonnalité) et des écarts de productivité, offrant aux décideurs les outils nécessaires pour réorganiser les équipes de techniciens.",
          "Solution de bout-en-bout : Démonstration d'une maîtrise complète de la chaîne de valeur de la donnée, de l'extraction SQL à la prise de décision stratégique visuelle."
        ]
      }
    }
  },
  {
    id: 4,
    title: "AI Diagnostic Pro",
    description: "Système expert de diagnostic médical pour l'identification de pathologies à partir de symptômes, basé sur un modèle Random Forest.",
    image: "/ia-diagnostic-svm-app.png",
    github: "https://github.com/fatimaezzahra137/ia-diagnostic-svm-app",
    technologies: ["Random Forest", "Machine Learning", "Python", "Streamlit", "Santé"],
    category: "AI & Health",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "L'objectif était de concevoir un système d'aide à la décision médicale capable d'analyser les symptômes saisis par un utilisateur pour identifier des pathologies potentielles. Le défi consistait à transformer une base de connaissances médicale complexe en un algorithme de classification capable de fournir un diagnostic préliminaire rapide tout en maintenant une interface simple pour l'utilisateur."
      },
      action: {
        title: "Action",
        points: [
          "Structuration des données médicales : Utilisation d'un dataset associant des combinaisons de symptômes à des maladies spécifiques (ex: Fievre, Toux, Fatigue).",
          "Implémentation d'un Random Forest : Choix du modèle Random Forest pour sa robustesse et sa capacité à gérer le 'bruit' dans les symptômes signalés par les patients.",
          "Développement de l'interface de diagnostic : Création d'une interface Streamlit permettant une sélection multi-symptômes intuitive et un affichage dynamique des résultats.",
          "Système de recommandations : Intégration d'une logique métier pour afficher non seulement la maladie prédite, mais aussi la description de la pathologie et les précautions médicales à prendre.",
          "Persistance du modèle : Sérialisation du modèle entraîné avec Joblib pour garantir un chargement instantané de l'intelligence lors de chaque consultation."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Performance Robuste : Le modèle Random Forest assure une classification stable en faisant la moyenne de 100 arbres de décision, limitant ainsi les erreurs de diagnostic isolées.",
          "Expérience Utilisateur Optimisée : Grâce à la mise en cache (@st.cache_resource), l'application charge le modèle une seule fois, permettant d'obtenir un diagnostic en quelques millisecondes.",
          "Outil Préventif : Le projet offre une première orientation médicale fiable, complétée par des conseils de précaution, facilitant ainsi la prise de décision avant une consultation physique."
        ]
      }
    }
  },
  {
    id: 5,
    title: "Foot PCA Expert (Analyse Multidimensionnelle du Scouting)",
    description: "Réduction de la complexité statistique des joueurs pour identifier des profils similaires et détecter des talents cachés via la PCA.",
    image: "/foot-pca-scouting-app.png",
    github: "https://github.com/fatimaezzahra137/foot-pca-scouting-app",    
    technologies: ["PCA", "Scikit-Learn", "Pandas", "Plotly", "Streamlit", "Sports Analytics"],
    category: "Data Science",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Dans le football moderne, les recruteurs font face à des milliers de statistiques par joueur (buts, passes, tacles, duels, etc.). Le problème est qu'il est impossible de visualiser et de comparer des joueurs sur 50 critères différents simultanément. L'objectif était de réduire cette complexité pour identifier des profils de joueurs similaires et détecter des talents cachés en utilisant la réduction de dimensionnalité."
      },
      action: {
        title: "Action",
        points: [
          "Collecte et Préparation : Importation et nettoyage des données de performance des joueurs avec Pandas.",
          "Réduction de Dimensionnalité (PCA) : Application de l'algorithme Principal Component Analysis (Analyse en Composantes Principales) via Scikit-Learn. Cette technique a permis de transformer des dizaines de variables statistiques en deux ou trois axes principaux (Composantes) qui capturent l'essentiel du style de jeu d'un joueur.",
          "Visualisation Interactive : Développement d'une interface avec Streamlit intégrant des graphiques Plotly. Ces graphiques permettent de situer chaque joueur dans un espace 2D ou 3D : deux joueurs proches sur le graphique ont des styles de jeu statistiquement similaires, même s'ils jouent dans des championnats différents.",
          "Scouting Intelligent : Mise en place de filtres par équipe ou par poste pour isoler des profils spécifiques et faciliter la comparaison directe entre les joueurs."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Simplification de la Donnée : Capacité à résumer le profil complet d'un athlète en un seul point sur un graphique, rendant l'analyse 10 fois plus rapide pour un recruteur.",
          "Identification de Profils 'Clusters' : Le modèle regroupe naturellement les joueurs par rôle (ex: les 'Relayeurs', les 'Buteurs purs'), permettant de trouver des remplaçants idéaux basés sur les données plutôt que sur l'intuition.",
          "Déploiement Professionnel : Publication du projet sur GitHub avec une structure optimisée (interface_pca.py, requirements.txt), garantissant une installation rapide et une portabilité totale de l'outil de scouting."
        ]
      }
    }
  },
  {
    id: 6,
    title: "Smart Immo Predictor (Maroc)",
    description: "Solution accessible pour estimer instantanément la valeur d'un bien immobilier au Maroc via une interface réactive et un modèle prédictif.",
    image: "/ia-immo-maroc-app.png",
    github: "https://github.com/fatimaezzahra137/ia-immo-maroc-app",
    technologies: ["Scikit-Learn", "Joblib", "Streamlit", "Python", "Real Estate"],
    category: "AI & Real Estate",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "L'objectif était de concevoir une solution accessible permettant d'estimer instantanément la valeur d'un bien immobilier au Maroc. Le défi consistait à transformer une logique de calcul complexe, basée sur plusieurs variables (surface, nombre de chambres, localisation), en une interface utilisateur fluide où le prix s'ajuste en temps réel selon les critères saisis."
      },
      action: {
        title: "Action",
        points: [
          "Développement du moteur prédictif : Création d'un script d'entraînement (train.py) utilisant la bibliothèque Scikit-Learn pour modéliser les relations mathématiques entre les caractéristiques du bien et son prix de marché.",
          "Persistance du modèle : Sérialisation de l'intelligence artificielle au format .pkl avec Joblib, permettant à l'application de charger instantanément les connaissances du modèle sans calculs redondants.",
          "Interface Réactive : Utilisation de Streamlit pour concevoir un tableau de bord interactif incluant des curseurs (st.slider) et des menus déroulants pour une saisie ergonomique des données.",
          "Logique de Prédiction : Implémentation de la méthode .predict() pour appliquer les formules apprises par l'IA sur les données d'entrée en temps réel.",
          "Architecture Propre : Mise en place d'un environnement virtuel dédié et d'une structure de fichiers professionnelle, facilitant le déploiement et la gestion des versions via GitHub."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Estimation Instantanée : Le système calcule et affiche le prix final dès que l'utilisateur modifie une caractéristique, offrant une réactivité totale de l'interface.",
          "Vulgarisation de l'IA : Transformation d'un algorithme complexe en un outil simple d'utilisation, rendant l'expertise immobilière accessible aux particuliers.",
          "Fiabilité Technique : Mise en place d'un pipeline robuste (Entraînement -> Sauvegarde -> Déploiement) garantissant la stabilité de l'application sur serveur local ou sur le Web."
        ]
      }
    }
  },
  {
    id: 7,
    title: "Système Intelligent d'Identification d'Espèces",
    description: "Outil de classification automatique d'espèces animales basé sur leurs caractéristiques physiques, utilisant Scikit-Learn et une interface Streamlit.",
    image: "/animal-id-ai-app.png",
    github: "https://github.com/fatimaezzahra137/animal-id-ai-app",
    technologies: ["Scikit-Learn", "Joblib", "Streamlit", "Plotly", "Python"],
    category: "Machine Learning",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "L'objectif de ce projet était de créer un outil capable de classifier automatiquement des espèces animales en fonction de caractéristiques physiques simples (poids, taille, capacité à voler). Le défi consistait à entraîner un modèle capable de distinguer précisément 8 espèces différentes à partir d'un petit échantillon de données d'apprentissage."
      },
      action: {
        title: "Action",
        points: [
          "Constitution du Dataset : Création d'une base de données de 24 exemples couvrant 8 espèces animales (3 exemples par espèce) pour assurer une base d'apprentissage équilibrée.",
          "Entraînement du Modèle : Développement d'un script d'apprentissage (train_animal.py) utilisant la bibliothèque Scikit-Learn pour créer le 'cerveau' de l'application.",
          "Persistance de l'IA : Sauvegarde du modèle entraîné au format .pkl via Joblib, permettant à l'application de réutiliser le savoir acquis sans réapprentissage à chaque lancement.",
          "Interface de Saisie Interactive : Conception d'une application Streamlit intégrant une barre latérale avec des curseurs numériques (number_input) et des boutons radio pour saisir les caractéristiques de l'animal.",
          "Visualisation et Feedback : Utilisation de Plotly pour générer des graphiques d'analyse et mise en place d'un système d'affichage sécurisé qui avertit l'utilisateur si le modèle n'est pas chargé."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Apprentissage Vérifié : Validation du processus d'entraînement avec 24 exemples traités avec succès, confirmant l'intégrité de la base de connaissances.",
          "Interface Intuitive : Déploiement d'un outil ergonomique où l'utilisateur obtient une prédiction instantanée et visuelle de l'espèce animale.",
          "Pipeline de Déploiement : Publication du projet sur GitHub avec une structure professionnelle, incluant la gestion des environnements virtuels et des dépendances pour une portabilité totale."
        ]
      }
    }
  },
  {
    id: 8,
    title: "Assistant de Gestion de Budget Personnel",
    description: "Application intuitive pour suivre revenus et dépenses, visualiser la santé financière et sauvegarder les données pour un suivi à long terme.",
    image: "/mon-assistant-budget.png",
    github: "https://github.com/fatimaezzahra137/mon-assistant-budget",
    technologies: ["Python", "Streamlit", "Finance", "Automation"],
    category: "Personal Finance",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "La gestion manuelle des finances personnelles est souvent fastidieuse et sujette aux erreurs. L'objectif était de créer une application intuitive permettant à un utilisateur de suivre en temps réel ses revenus et dépenses, de visualiser sa santé financière via des indicateurs dynamiques et de sauvegarder ses données pour un suivi à long terme."
      },
      action: {
        title: "Action",
        points: [
          "Architecture Multi-pages : Structuration de l'application avec Streamlit en utilisant une interface multi-pages (app.py pour le résumé et un dossier pages/ pour la saisie et les analyses) afin de séparer clairement les fonctionnalités.",
          "Gestion de l'État (Session State) : Utilisation de st.session_state pour maintenir la mémoire des transactions de l'utilisateur tout au long de sa navigation, évitant ainsi la perte de données lors du rafraîchissement de la page.",
          "Interface de Saisie Dynamique : Développement de formulaires permettant de catégoriser les dépenses (Alimentation, Logement, Loisirs, etc.) avec le choix de la devise ($, €, DH).",
          "Visualisation et Monitoring : Mise en place d'une barre de progression pour comparer les dépenses totales au revenu initial et affichage du solde restant.",
          "Persistance des Données : Intégration d'une fonctionnalité d'exportation au format CSV avec gestion du type MIME pour permettre à l'utilisateur de sauvegarder son bilan sur son ordinateur.",
          "Déploiement et Versioning : Publication du projet sur GitHub avec une structure de fichiers professionnelle pour faciliter l'installation et l'exécution via un environnement virtuel."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Expérience Utilisateur Fluide : Création d'un outil capable de fournir un bilan financier instantané sans calcul manuel complexe.",
          "Portabilité des Données : Grâce au bouton de téléchargement, l'utilisateur transforme une session de navigation temporaire en un document de suivi permanent exploitable sous Excel.",
          "Automatisation Visuelle : L'application offre une lecture immédiate du budget disponible, aidant l'utilisateur à ajuster ses comportements d'achat en fonction de sa progression mensuelle."
        ]
      }
    }
  },
  {
    id: 9,
    title: "Analyse et Segmentation Stratégique de Clientèle",
    description: "Segmentation d'une base de données clients en groupes homogènes pour personnaliser les campagnes marketing et optimiser la rétention.",
    image: "/ia-clustering-3d.png",
    github: "https://github.com/fatimaezzahra137/ia-clustering-3d",
    technologies: ["Clustering", "K-Means", "Scikit-Learn", "Pandas", "Plotly", "Streamlit"],
    category: "Data Visualization",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Pour une entreprise, traiter tous les clients de la même manière est inefficace. L'objectif de ce projet était de segmenter une base de données clients (format Excel/CSV) en groupes homogènes. En identifiant des comportements d'achat ou des profils similaires, l'entreprise peut personnaliser ses campagnes marketing et optimiser sa rétention client."
      },
      action: {
        title: "Action",
        points: [
          "Ingénierie des données : Importation et préparation des données clients avec Pandas et Openpyxl, incluant la normalisation des variables pour garantir que chaque critère (ex: âge vs montant d'achat) ait le même poids dans l'analyse.",
          "Segmentation par Machine Learning : Implémentation de l'algorithme de clustering (K-Means ou similaire via Scikit-Learn) pour regrouper les clients selon leurs caractéristiques communes.",
          "Visualisation 3D Interactive : Utilisation de Plotly pour créer un graphique tridimensionnel permettant de visualiser physiquement les clusters (groupes de clients) et d'interpréter les frontières entre chaque segment.",
          "Déploiement d'un Dashboard : Développement d'une application Streamlit permettant à un utilisateur métier de charger un fichier client et d'obtenir instantanément une segmentation visuelle et analytique."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Identification de profils types : Extraction de segments de clientèle clairs (ex: 'Clients à haut potentiel', 'Clients occasionnels'), permettant des stratégies marketing ciblées.",
          "Outil d'Aide à la Décision : Création d'une interface intuitive où des données complexes sont transformées en graphiques 3D actionnables par des non-experts en data.",
          "Automatisation du Pipeline : Mise en place d'un système robuste intégrant la gestion des environnements virtuels et le versioning via Git/GitHub, assurant la portabilité et la mise à jour facile de l'outil."
        ]
      }
    }
  },
  {
    id: 10,
    title: "Système de Maintenance Prédictive par IA (IoT & Capteurs)",
    description: "Anticipation des pannes industrielles en analysant les données de capteurs pour passer d'une maintenance réactive à une maintenance prédictive.",
    image: "/maintenance-predictive-ia.png",
    github: "https://github.com/fatimaezzahra137/maintenance-predictive-ia",
    technologies: ["Random Forest", "NumPy", "Streamlit", "Plotly", "FPDF2", "IoT"],
    category: "Industry 4.0",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Dans l'industrie, les pannes imprévues coûtent cher et ralentissent la production. L'objectif de ce projet était de passer d'une maintenance réactive à une maintenance prédictive. En analysant les données de capteurs (température, pression, vibrations), l'IA doit être capable d'anticiper une panne imminente avant qu'elle ne survienne, permettant ainsi une intervention ciblée."
      },
      action: {
        title: "Action",
        points: [
          "Génération de données synthétiques : Développement d'un script (generer_data.py) utilisant NumPy pour simuler 100 mesures réalistes de capteurs industriels, incluant des scénarios de fonctionnement normal et des anomalies de panne.",
          "Apprentissage Supervisé (Random Forest) : Entraînement d'un modèle Random Forest choisi pour sa capacité à traiter des relations complexes entre plusieurs variables de capteurs et à fournir un score de probabilité fiable.",
          "Dashboard de Monitoring en Temps Réel : Création d'une interface Streamlit interactive permettant de simuler des relevés de capteurs via des curseurs.",
          "Visualisation de l'Alerte : Intégration d'une jauge dynamique (Plotly Gauge) qui affiche en temps réel le risque de panne en pourcentage.",
          "Reporting Automatisé : Implémentation de la bibliothèque FPDF2 pour générer et télécharger automatiquement un rapport d'intervention en PDF dès qu'un seuil d'alerte critique (ex: 90%) est atteint."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Indicateur de Précision Visuelle : L'utilisation du mode 'gauge+number' sur le dashboard permet une lecture instantanée et précise du risque, facilitant la prise de décision rapide pour les techniciens.",
          "Automatisation du Flux de Travail : Le passage automatique de l'analyse à la génération de rapport PDF réduit le temps de documentation administrative en cas d'urgence technique.",
          "Structure Professionnelle : Mise en place d'un pipeline complet, de la génération de données (.csv) à la sauvegarde du modèle (.pkl), le tout versionné sur GitHub avec une gestion propre des dépendances."
        ]
      }
    }
  },
  {
    id: 11,
    title: "Détecteur de Spam Intelligent (NLP)",
    description: "Système analysant le contenu textuel pour déterminer si un message est légitime (Ham) ou indésirable (Spam) via des probabilités statistiques.",
    image: "/ia-anti-spam-maroc.png",
    github: "https://github.com/fatimaezzahra137/ia-anti-spam-maroc",
    technologies: ["NLP", "Naive Bayes", "Scikit-Learn", "Streamlit", "Plotly", "Spam Detection"],
    category: "NLP & Security",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Avec l'explosion du volume de communications numériques, le filtrage des messages non sollicités (Spam) est devenu crucial. L'objectif était de développer un système capable d'analyser le contenu textuel d'un message pour déterminer automatiquement s'il est légitime (Ham) ou indésirable (Spam), en utilisant des probabilités statistiques basées sur les mots-clés."
      },
      action: {
        title: "Action",
        points: [
          "Vectorisation du Texte : Mise en place d'un processus de transformation du langage naturel en données numériques exploitables par l'IA via un Vectoriseur (sauvegardé sous vectorizer.pkl).",
          "Modélisation Statistique (Naive Bayes) : Utilisation du théorème de Bayes pour calculer la probabilité qu'un message soit un spam en fonction de la fréquence d'apparition de certains mots-clés.",
          "Pipeline d'Entraînement : Développement d'un script train_spam.py permettant d'entraîner le modèle et de sauvegarder le 'cerveau' de l'application (modele_spam.pkl).",
          "Interface de Détection en Temps Réel : Conception d'une application Streamlit où l'utilisateur saisit son texte et obtient instantanément un diagnostic accompagné d'un score de confiance.",
          "Système d'Archivage : Création d'une fonction d'enregistrement automatique dans un fichier nouveaux_messages.csv pour collecter les nouvelles saisies et permettre une amélioration continue du modèle.",
          "Visualisation Plotly : Intégration de graphiques pour visualiser le score de probabilité et la répartition des catégories de messages."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Diagnostic de Haute Précision : Le modèle permet de distinguer les nuances linguistiques entre un message professionnel et une tentative de phishing, offrant un pourcentage de fiabilité clair pour chaque prédiction.",
          "Apprentissage Évolutif : Grâce à l'initialisation automatisée du fichier CSV, le projet pose les bases d'un système capable d'apprendre de ses nouvelles erreurs au fil du temps.",
          "Déploiement Professionnel : Publication du code sur GitHub avec une documentation complète sur la gestion de l'environnement virtuel (venv) et des dépendances, assurant une portabilité totale de la solution."
        ]
      }
    }
  },
  {
    id: 12,
    title: "Système de Recommandation Cinématographique (KNN)",
    description: "Moteur de recommandation intelligent suggérant des films similaires à un titre donné, en se basant sur des calculs de proximité mathématique.",
    image: "/AI-CINEMA.png",
    github: "https://github.com/fatimaezzahra137/AI-CINEMA",
    technologies: ["KNN", "Scikit-Learn", "Streamlit", "Plotly", "Python"],
    category: "AI Application",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Avec la multiplication des plateformes de streaming, il devient difficile pour les utilisateurs de choisir un film parmi des milliers d'options. L'objectif était de développer un moteur de recommandation intelligent capable de suggérer des films similaires à un titre donné, en se basant sur des calculs de proximité mathématique plutôt que sur de simples catégories."
      },
      action: {
        title: "Action",
        points: [
          "Implémentation de l'IA (KNN) : Utilisation de l'algorithme K-Nearest Neighbors (K-Plus Proches Voisins) de Scikit-Learn pour identifier les films les plus proches dans un espace multidimensionnel.",
          "Design et Ergonomie : Personnalisation de l'interface via l'injection de code CSS dans Streamlit (st.markdown) pour améliorer l'esthétique et l'expérience utilisateur.",
          "Visualisation Interactive : Création de graphiques dynamiques (camemberts et barres) avec Plotly Express pour analyser la répartition des genres et des scores du catalogue.",
          "Fonctionnalités Avancées : Mise en place d'un système d'exportation vers Excel (via BytesIO) permettant aux utilisateurs de sauvegarder leurs listes de recommandations.",
          "Déploiement Cloud : Publication de l'application sur Streamlit Cloud via GitHub, rendant l'outil accessible sur mobile et web 24h/24 via une URL publique."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Accessibilité Totale : Transition d'un script local vers une application web déployée, permettant une consultation universelle sans installation technique.",
          "Précision des Recommandations : Grâce au modèle KNN, le système fournit des suggestions pertinentes basées sur la similarité réelle des données du fichier donnees_films.csv.",
          "Dashboard Analytique : Transformation d'une base de données brute en un tableau de bord visuel et interactif facilitant l'exploration du catalogue cinématographique."
        ]
      }
    }
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div 
        className="min-h-screen py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #F8E8E8 0%, #ffffff 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* العنوان */}
          <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#704630] mb-4 animate-fade-in-up">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-left">
            Une vitrine de mes travaux en Data Science, Intelligence Artificielle et Développement.
          </p>
        </div>

          {/* قائمة المشاريع */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* صورة المشروع */}
                <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#704630] text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

                {/* محتوى المشروع */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                  {/* التقنيات */}
                  <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#F8E8E8] text-[#704630] text-sm font-medium rounded-full border border-[#E6C0CB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                  {/* الأزرار */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors flex-1 justify-center"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    disabled={!project.details}
                    className="flex items-center gap-2 px-5 py-3 bg-[#704630] text-white rounded-lg hover:bg-[#5a3826] transition-colors flex-1 justify-center disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <ExternalLink size={20} />
                    <span>Détails</span>
                  </button>
                </div>
              </div>
              </div>
            ))}
          </div>

          {/* رابط GitHub الشخصي */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/fatimaezzahra137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#704630] to-[#5a3826] text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <Github size={24} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Fenêtre Modale */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}