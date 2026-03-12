"use client";

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ProjectModal from '@/components/ProjectModal';
import { useLanguage } from '@/components/LanguageContext';

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

const projectsFR: Project[] = [
  {
    id: 13, 
    title: "Système Intelligent de Gestion de Don de Sang",
    description: "Solution complète alliant gestion de base de données Oracle, dashboard interactif et IA pour optimiser la gestion des dons de sang.",
    image: "/blood-donation-system.png",
    github: "https://github.com/fatimaezzahra137/BloodDonation-System/tree/main",
    technologies: ["Oracle SQL", "PL/SQL", "Python", "Streamlit", "XGBoost", "Machine Learning"], 
    category: "Data Science & Database",
    details: {
      problem: {
        title: "Problème (Objectif)",
        content: "Ce projet de fin de formation (JobInTech) visait initialement à concevoir une structure de données solide. L'objectif a été élargi pour développer une solution technologique complète démontrant l'évolution d'une expertise en gestion de base de données vers la Data Science et le développement d'applications intelligentes."
      },
      action: {
        title: "Action",
        points: [
          "Architecture Oracle Avancée : Implémentation de Packages, Triggers et Procédures stockées pour automatiser la logique métier (vérification de compatibilité sanguine, calcul automatique des alertes de stock).",
          "Développement Full-Stack Data : Création d'un backend Python connecté en temps réel à Oracle via `oracledb`, pilotant un tableau de bord interactif Streamlit.",
          "Intelligence Artificielle : Intégration de modèles de Machine Learning pour le Forecasting des stocks (Prophet) et la classification des risques donneurs (XGBoost, Scikit-Learn)."
        ]
      },
      result: {
        title: "Résultat",
        points: [
          "Solution Intégrée : Transformation d'un projet de base de données en une application décisionnelle complète.",
          "Outil d'Aide à la Décision : Mise en place d'un pilotage interactif permettant de visualiser les stocks critiques et de prédire les besoins futurs.",
          "Double Expertise : Démonstration technique réussie alliant la rigueur du SQL/PL-SQL à la puissance de l'analyse prédictive."
        ]
      }
    },
  },
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

const projectsEN: Project[] = [
  {
    id: 13, 
    title: "Intelligent Blood Donation Management System",
    description: "Complete solution combining Oracle database management, interactive dashboard, and AI to optimize blood donation management.",
    image: "/blood-donation-system.png",
    github: "https://github.com/fatimaezzahra137/BloodDonation-System/tree/main",
    technologies: ["Oracle SQL", "PL/SQL", "Python", "Streamlit", "XGBoost", "Machine Learning"],
    category: "Data Science & Database",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "This end-of-training project (JobInTech) initially aimed to design a solid data structure. The objective was expanded to develop a complete technological solution demonstrating the evolution from database management expertise to Data Science and intelligent application development."
      },
      action: {
        title: "Action",
        points: [
          "Advanced Oracle Architecture: Implementation of Packages, Triggers, and Stored Procedures to automate business logic (blood compatibility verification, automatic stock alert calculation).",
          "Full-Stack Data Development: Creation of a Python backend connected in real-time to Oracle via `oracledb`, driving an interactive Streamlit dashboard.",
          "Artificial Intelligence: Integration of Machine Learning models for stock Forecasting (Prophet) and donor risk classification (XGBoost, Scikit-Learn)."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Integrated Solution: Transformed a database project into a complete decision-making application.",
          "Decision Support Tool: Implemented interactive monitoring to visualize critical stocks and predict future needs.",
          "Dual Expertise: Successful technical demonstration combining the rigor of SQL/PL-SQL with the power of predictive analysis."
        ]
      }
    },
  },
 {
    id: 1,
    title: "Cinema Analysis Dashboard",
    description: "Interactive dashboard for analyzing film trends and box-office data.",
    image: "/cinema-analysis-dashboard.png",
    github: "https://github.com/fatimaezzahra137/cinema-analysis-dashboard",
    technologies: ["Python", "Data Viz", "Streamlit", "Pandas"],
    category: "Data Analysis",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "The film industry generates massive volumes of data (budgets, revenues, ratings, genres). The objective was to extract strategic trends from a raw dataset of over 45,000 films (movies_metadata.csv) to understand which factors (genre, release year, budget) truly influence a film's financial success and popularity."
      },
      action: {
        title: "Action",
        points: [
          "Complex data cleaning: Processed nested JSON formats to extract genres, converted data types (budgets and revenues to numeric), and rigorously handled missing values to avoid statistical bias.",
          "Feature engineering: Created new metrics, such as profit calculation, and extracted the release year from full dates to enable temporal analysis.",
          "Exploratory Data Analysis (EDA): Used Pandas and NumPy to aggregate data by genre and year to identify the most profitable categories.",
          "Advanced data visualization: Developed an interactive dashboard with Streamlit, integrating Matplotlib graphs for revenue distribution by genre and native charts for the evolution of average ratings over time."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Large-scale data processing: Implemented a pipeline capable of automatically cleaning and structuring large CSV files.",
          "Interactivity and Clarity: Created a decision support tool to instantly visualize the average return on investment by genre.",
          "Performance optimization: Used Streamlit's caching system (@st.cache_data) to allow for smooth and instantaneous data manipulation, even during complex sorting or filtering by the user."
        ]
      }
    }
  },
  {
    id: 2,
    title: "Expert Immo Casablanca",
    description: "Intelligent real estate valuation system for the Casablanca market using real data.",
    image: "/expert-immo-casablanca.png",
    github: "https://github.com/fatimaezzahra137/expert-immo-casablanca",
    technologies: ["Machine Learning", "Real Estate", "Python", "XGBoost", "Scikit-learn"],
    category: "AI & Real Estate",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "The real estate market in Casablanca is extremely heterogeneous and complex. Classic linear models fail to capture price variations from one neighborhood to another (e.g., Gauthier vs. Oulfa) or the non-linear impact of the number of rooms on the final value. The objective was to create a tool capable of providing accurate and objective estimates, taking into account local geographical and technical specifics."
      },
      action: {
        title: "Action",
        points: [
          "Rigorous data cleaning: Eliminated duplicates, incomplete listings, and filtered outliers (unrealistic prices, inconsistent areas) to ensure 'Garbage In, Garbage Out' quality.",
          "AI engine development: Implemented the XGBoost algorithm, a 'Gradient Boosting' model chosen for its ability to sequentially correct prediction errors and handle complex interactions like the relationship between floor, view, and neighborhood.",
          "Optimization (Fine-Tuning): Precise configuration of hyperparameters (1000 trees, learning rate of 0.05, depth of 8) to balance model accuracy and stability.",
          "Interactive Interface: Created a web application with Streamlit including an interactive map (Folium) for geographical selection and automatic generation of expert reports in PDF."
        ]
      },
      result: {
        title: "Result",
        points: [
          "High accuracy: The model achieves an accuracy (R² Score) of up to 98% on test data.",
          "Mathematical reliability: Implemented K-Fold cross-validation, ensuring 99% model stability and consistent results across all Casablanca neighborhoods.",
          "Business impact: Reduced the mean absolute error (MAE) through data cleaning, providing users with a reliable estimate in milliseconds and an official document for their procedures."
        ]
      }
    }
  },
  {
    id: 3,
    title: "BI System & Maintenance Dashboard",
    description: "Business Intelligence (BI) solution to centralize data, automate budget tracking, and optimize technical interventions.",
    image: "/maintenance-universitaire-powerbi.png",
    github: "https://github.com/fatimaezzahra137/maintenance-universitaire-powerbi",
    technologies: ["Power BI", "Oracle SQL", "PL/SQL", "DAX", "Power Query", "ETL"],
    category: "Business Intelligence",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "In an industrial or service environment, raw maintenance data is often scattered and difficult to interpret. The objective of this project was to build a complete BI solution capable of centralizing this data, automating budget tracking, and identifying productivity levers to optimize technical interventions."
      },
      action: {
        title: "Action",
        points: [
          "Data Architecture (Back-end): Design and implementation of a robust database with Oracle SQL. Use of PL/SQL to automate management processes and ensure the integrity of maintenance data.",
          "Dimensional Modeling: Structuring data according to a Star Schema, optimizing read performance for decision analysis.",
          "Data Engineering (ETL): Use of Power Query for cleaning, transforming, and loading data from Oracle to Power BI.",
          "Advanced Analytical Calculations: Creation of complex measures in DAX (Data Analysis Expressions) for calculating Key Performance Indicators (KPIs), budget variances, and productivity rates.",
          "Strategic Visualization: Development of an interactive dashboard in Power BI integrating Gauges, Ribbon Charts, and Scatter Charts for a comprehensive analysis."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Real-Time Monitoring: Implementation of instant visibility into maintenance budget consumption, helping to avoid financial overruns.",
          "Operational Optimization: Precise identification of critical periods (seasonality) and productivity gaps, providing decision-makers with the tools needed to reorganize technician teams.",
          "End-to-End Solution: Demonstration of complete mastery of the data value chain, from SQL extraction to strategic visual decision-making."
        ]
      }
    }
  },
  {
    id: 4,
    title: "AI Diagnostic Pro",
    description: "Expert medical diagnostic system for identifying pathologies from symptoms, based on a Random Forest model.",
    image: "/ia-diagnostic-svm-app.png",
    github: "https://github.com/fatimaezzahra137/ia-diagnostic-svm-app",
    technologies: ["Random Forest", "Machine Learning", "Python", "Streamlit", "Health"],
    category: "AI & Health",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "The objective was to design a medical decision support system capable of analyzing user-entered symptoms to identify potential pathologies. The challenge was to transform a complex medical knowledge base into a classification algorithm that could provide a quick preliminary diagnosis while maintaining a simple user interface."
      },
      action: {
        title: "Action",
        points: [
          "Structuring medical data: Used a dataset associating symptom combinations with specific diseases (e.g., Fever, Cough, Fatigue).",
          "Implementing a Random Forest: Chose the Random Forest model for its robustness and ability to handle 'noise' in patient-reported symptoms.",
          "Developing the diagnostic interface: Created a Streamlit interface allowing for intuitive multi-symptom selection and dynamic display of results.",
          "Recommendation system: Integrated business logic to display not only the predicted disease but also the pathology description and medical precautions to take.",
          "Model persistence: Serialized the trained model with Joblib to ensure instant loading of the intelligence for each consultation."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Robust Performance: The Random Forest model ensures stable classification by averaging 100 decision trees, thus limiting isolated diagnostic errors.",
          "Optimized User Experience: Thanks to caching (@st.cache_resource), the application loads the model only once, allowing for a diagnosis in milliseconds.",
          "Preventive Tool: The project provides a reliable initial medical orientation, supplemented by precautionary advice, facilitating decision-making before a physical consultation."
        ]
      }
    }
  },
  {
    id: 5,
    title: "Foot PCA Expert (Multidimensional Scouting Analysis)",
    description: "Reducing player statistical complexity to identify similar profiles and detect hidden talents via PCA.",
    image: "/foot-pca-scouting-app.png",
    github: "https://github.com/fatimaezzahra137/foot-pca-scouting-app",
    technologies: ["PCA", "Scikit-Learn", "Pandas", "Plotly", "Streamlit", "Sports Analytics"],
    category: "Data Science",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "In modern football, scouts face thousands of statistics per player (goals, passes, tackles, duels, etc.). The problem is that it's impossible to visualize and compare players on 50 different criteria simultaneously. The objective was to reduce this complexity to identify similar player profiles and detect hidden talents using dimensionality reduction."
      },
      action: {
        title: "Action",
        points: [
          "Collection and Preparation: Imported and cleaned player performance data with Pandas.",
          "Dimensionality Reduction (PCA): Applied the Principal Component Analysis algorithm via Scikit-Learn. This technique transformed dozens of statistical variables into two or three main axes (Components) that capture the essence of a player's style.",
          "Interactive Visualization: Developed an interface with Streamlit integrating Plotly graphs. These graphs allow each player to be placed in a 2D or 3D space: two players close on the graph have statistically similar playing styles, even if they play in different leagues.",
          "Intelligent Scouting: Implemented filters by team or position to isolate specific profiles and facilitate direct comparison between players."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Data Simplification: Ability to summarize an athlete's complete profile into a single point on a graph, making analysis 10 times faster for a scout.",
          "Identification of 'Cluster' Profiles: The model naturally groups players by role (e.g., 'Box-to-box', 'Pure Strikers'), allowing for finding ideal replacements based on data rather than intuition.",
          "Professional Deployment: Published the project on GitHub with an optimized structure (interface_pca.py, requirements.txt), ensuring quick installation and full portability of the scouting tool."
        ]
      }
    }
  },
  {
    id: 6,
    title: "Smart Immo Predictor (Morocco)",
    description: "An accessible solution to instantly estimate the value of a property in Morocco via a responsive interface and a predictive model.",
    image: "/ia-immo-maroc-app.png",
    github: "https://github.com/fatimaezzahra137/ia-immo-maroc-app",
    technologies: ["Scikit-Learn", "Joblib", "Streamlit", "Python", "Real Estate"],
    category: "AI & Real Estate",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "The objective was to design an accessible solution to instantly estimate the value of a property in Morocco. The challenge was to transform a complex calculation logic, based on several variables (area, number of rooms, location), into a fluid user interface where the price adjusts in real-time according to the entered criteria."
      },
      action: {
        title: "Action",
        points: [
          "Predictive engine development: Created a training script (train.py) using the Scikit-Learn library to model the mathematical relationships between property characteristics and its market price.",
          "Model persistence: Serialized the artificial intelligence into .pkl format with Joblib, allowing the application to instantly load the model's knowledge without redundant calculations.",
          "Reactive Interface: Used Streamlit to design an interactive dashboard including sliders (st.slider) and dropdown menus for ergonomic data entry.",
          "Prediction Logic: Implemented the .predict() method to apply the formulas learned by the AI to the input data in real-time.",
          "Clean Architecture: Set up a dedicated virtual environment and a professional file structure, facilitating deployment and version management via GitHub."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Instant Estimation: The system calculates and displays the final price as soon as the user modifies a characteristic, offering total interface reactivity.",
          "AI Popularization: Transformed a complex algorithm into a simple-to-use tool, making real estate expertise accessible to individuals.",
          "Technical Reliability: Implemented a robust pipeline (Training -> Saving -> Deployment) ensuring the application's stability on a local server or on the Web."
        ]
      }
    }
  },
  {
    id: 7,
    title: "Intelligent Species Identification System",
    description: "Automatic classification tool for animal species based on their physical characteristics, using Scikit-Learn and a Streamlit interface.",
    image: "/animal-id-ai-app.png",
    github: "https://github.com/fatimaezzahra137/animal-id-ai-app",
    technologies: ["Scikit-Learn", "Joblib", "Streamlit", "Plotly", "Python"],
    category: "Machine Learning",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "The objective of this project was to create a tool capable of automatically classifying animal species based on simple physical characteristics (weight, height, ability to fly). The challenge was to train a model capable of accurately distinguishing 8 different species from a small sample of training data."
      },
      action: {
        title: "Action",
        points: [
          "Dataset creation: Created a database of 24 examples covering 8 animal species (3 examples per species) to ensure a balanced training base.",
          "Model training: Developed a training script (train_animal.py) using the Scikit-Learn library to create the 'brain' of the application.",
          "AI persistence: Saved the trained model in .pkl format via Joblib, allowing the application to reuse the acquired knowledge without retraining at each launch.",
          "Interactive input interface: Designed a Streamlit application integrating a sidebar with numerical sliders (number_input) and radio buttons to enter the animal's characteristics.",
          "Visualization and Feedback: Used Plotly to generate analysis graphs and implemented a secure display system that warns the user if the model is not loaded."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Verified Learning: Validated the training process with 24 successfully processed examples, confirming the integrity of the knowledge base.",
          "Intuitive Interface: Deployed an ergonomic tool where the user gets an instant and visual prediction of the animal species.",
          "Deployment Pipeline: Published the project on GitHub with a professional structure, including management of virtual environments and dependencies for full portability."
        ]
      }
    }
  },
  {
    id: 8,
    title: "Personal Budget Management Assistant",
    description: "Intuitive application to track income and expenses, visualize financial health, and save data for long-term monitoring.",
    image: "/mon-assistant-budget.png",
    github: "https://github.com/fatimaezzahra137/mon-assistant-budget",
    technologies: ["Python", "Streamlit", "Finance", "Automation"],
    category: "Personal Finance",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "Manual management of personal finances is often tedious and prone to errors. The objective was to create an intuitive application allowing a user to track their income and expenses in real-time, visualize their financial health via dynamic indicators, and save their data for long-term monitoring."
      },
      action: {
        title: "Action",
        points: [
          "Multi-page architecture: Structured the application with Streamlit using a multi-page interface (app.py for the summary and a pages/ folder for entry and analysis) to clearly separate functionalities.",
          "State Management (Session State): Used st.session_state to maintain the user's transaction memory throughout their navigation, thus preventing data loss when the page is refreshed.",
          "Dynamic Entry Interface: Developed forms to categorize expenses (Food, Housing, Leisure, etc.) with the choice of currency ($, €, DH).",
          "Visualization and Monitoring: Implemented a progress bar to compare total expenses to initial income and display the remaining balance.",
          "Data Persistence: Integrated an export functionality to CSV format with MIME type management to allow the user to save their balance sheet on their computer.",
          "Deployment and Versioning: Published the project on GitHub with a professional file structure to facilitate installation and execution via a virtual environment."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Fluid User Experience: Created a tool capable of providing an instant financial summary without complex manual calculation.",
          "Data Portability: Thanks to the download button, the user transforms a temporary browsing session into a permanent tracking document usable in Excel.",
          "Visual Automation: The application provides an immediate reading of the available budget, helping the user to adjust their purchasing behavior according to their monthly progress."
        ]
      }
    }
  },
  {
    id: 9,
    title: "Strategic Customer Analysis and Segmentation",
    description: "Segmentation of a customer database into homogeneous groups to personalize marketing campaigns and optimize retention.",
    image: "/ia-clustering-3d.png",
    github: "https://github.com/fatimaezzahra137/ia-clustering-3d",
    technologies: ["Clustering", "K-Means", "Scikit-Learn", "Pandas", "Plotly", "Streamlit"],
    category: "Data Visualization",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "For a company, treating all customers the same way is inefficient. The objective of this project was to segment a customer database (Excel/CSV format) into homogeneous groups. By identifying similar purchasing behaviors or profiles, the company can personalize its marketing campaigns and optimize customer retention."
      },
      action: {
        title: "Action",
        points: [
          "Data engineering: Imported and prepared customer data with Pandas and Openpyxl, including variable normalization to ensure that each criterion (e.g., age vs. purchase amount) has the same weight in the analysis.",
          "Machine Learning Segmentation: Implemented the clustering algorithm (K-Means or similar via Scikit-Learn) to group customers according to their common characteristics.",
          "Interactive 3D Visualization: Used Plotly to create a three-dimensional graph to physically visualize the clusters (customer groups) and interpret the boundaries between each segment.",
          "Dashboard Deployment: Developed a Streamlit application allowing a business user to upload a customer file and instantly obtain a visual and analytical segmentation."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Identification of typical profiles: Extracted clear customer segments (e.g., 'High-potential customers', 'Occasional customers'), allowing for targeted marketing strategies.",
          "Decision Support Tool: Created an intuitive interface where complex data is transformed into actionable 3D graphics for non-data experts.",
          "Pipeline Automation: Implemented a robust system integrating virtual environment management and versioning via Git/GitHub, ensuring portability and easy updating of the tool."
        ]
      }
    }
  },
  {
    id: 10,
    title: "AI-Powered Predictive Maintenance System (IoT & Sensors)",
    description: "Anticipating industrial failures by analyzing sensor data to move from reactive to predictive maintenance.",
    image: "/maintenance-predictive-ia.png",
    github: "https://github.com/fatimaezzahra137/maintenance-predictive-ia",
    technologies: ["Random Forest", "NumPy", "Streamlit", "Plotly", "FPDF2", "IoT"],
    category: "Industry 4.0",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "In industry, unplanned failures are costly and slow down production. The objective of this project was to move from reactive to predictive maintenance. By analyzing sensor data (temperature, pressure, vibrations), the AI must be able to anticipate an imminent failure before it occurs, thus allowing for a targeted intervention."
      },
      action: {
        title: "Action",
        points: [
          "Synthetic data generation: Developed a script (generer_data.py) using NumPy to simulate 100 realistic industrial sensor measurements, including normal operation scenarios and failure anomalies.",
          "Supervised Learning (Random Forest): Trained a Random Forest model chosen for its ability to handle complex relationships between multiple sensor variables and provide a reliable probability score.",
          "Real-Time Monitoring Dashboard: Created an interactive Streamlit interface to simulate sensor readings via sliders.",
          "Alert Visualization: Integrated a dynamic gauge (Plotly Gauge) that displays the risk of failure in real-time as a percentage.",
          "Automated Reporting: Implemented the FPDF2 library to automatically generate and download an intervention report in PDF as soon as a critical alert threshold (e.g., 90%) is reached."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Visual Precision Indicator: The use of 'gauge+number' mode on the dashboard allows for an instant and precise reading of the risk, facilitating quick decision-making for technicians.",
          "Workflow Automation: The automatic transition from analysis to PDF report generation reduces administrative documentation time in case of a technical emergency.",
          "Professional Structure: Implemented a complete pipeline, from data generation (.csv) to model saving (.pkl), all versioned on GitHub with proper dependency management."
        ]
      }
    }
  },
  {
    id: 11,
    title: "Intelligent Spam Detector (NLP)",
    description: "System analyzing text content to determine if a message is legitimate (Ham) or unwanted (Spam) via statistical probabilities.",
    image: "/ia-anti-spam-maroc.png",
    github: "https://github.com/fatimaezzahra137/ia-anti-spam-maroc",
    technologies: ["NLP", "Naive Bayes", "Scikit-Learn", "Streamlit", "Plotly", "Spam Detection"],
    category: "NLP & Security",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "With the explosion in the volume of digital communications, filtering unsolicited messages (Spam) has become crucial. The objective was to develop a system capable of analyzing the text content of a message to automatically determine if it is legitimate (Ham) or unwanted (Spam), using statistical probabilities based on keywords."
      },
      action: {
        title: "Action",
        points: [
          "Text Vectorization: Implemented a process to transform natural language into numerical data usable by the AI via a Vectorizer (saved as vectorizer.pkl).",
          "Statistical Modeling (Naive Bayes): Used Bayes' theorem to calculate the probability that a message is spam based on the frequency of certain keywords.",
          "Training Pipeline: Developed a train_spam.py script to train the model and save the application's 'brain' (modele_spam.pkl).",
          "Real-Time Detection Interface: Designed a Streamlit application where the user enters their text and instantly gets a diagnosis accompanied by a confidence score.",
          "Archiving System: Created an automatic recording function in a nouveaux_messages.csv file to collect new entries and allow for continuous model improvement.",
          "Plotly Visualization: Integrated graphs to visualize the probability score and the distribution of message categories."
        ]
      },
      result: {
        title: "Result",
        points: [
          "High-Precision Diagnosis: The model can distinguish the linguistic nuances between a professional message and a phishing attempt, providing a clear reliability percentage for each prediction.",
          "Evolving Learning: Thanks to the automated initialization of the CSV file, the project lays the foundation for a system capable of learning from its new errors over time.",
          "Professional Deployment: Published the code on GitHub with complete documentation on managing the virtual environment (venv) and dependencies, ensuring full portability of the solution."
        ]
      }
    }
  },
  {
    id: 12,
    title: "Movie Recommendation System (KNN)",
    description: "Intelligent recommendation engine suggesting films similar to a given title, based on mathematical proximity calculations.",
    image: "/AI-CINEMA.png",
    github: "https://github.com/fatimaezzahra137/AI-CINEMA",
    technologies: ["KNN", "Scikit-Learn", "Streamlit", "Plotly", "Python"],
    category: "AI Application",
    details: {
      problem: {
        title: "Problem (Objective)",
        content: "With the proliferation of streaming platforms, it has become difficult for users to choose a film from thousands of options. The objective was to develop an intelligent recommendation engine capable of suggesting films similar to a given title, based on mathematical proximity calculations rather than simple categories."
      },
      action: {
        title: "Action",
        points: [
          "AI Implementation (KNN): Used the K-Nearest Neighbors algorithm from Scikit-Learn to identify the closest films in a multidimensional space.",
          "Design and Ergonomics: Customized the interface by injecting CSS code into Streamlit (st.markdown) to improve aesthetics and user experience.",
          "Interactive Visualization: Created dynamic charts (pie and bar) with Plotly Express to analyze the distribution of genres and scores in the catalog.",
          "Advanced Features: Implemented an export system to Excel (via BytesIO) allowing users to save their recommendation lists.",
          "Cloud Deployment: Published the application on Streamlit Cloud via GitHub, making the tool accessible on mobile and web 24/7 via a public URL."
        ]
      },
      result: {
        title: "Result",
        points: [
          "Total Accessibility: Transitioned from a local script to a deployed web application, allowing for universal access without technical installation.",
          "Recommendation Accuracy: Thanks to the KNN model, the system provides relevant suggestions based on the actual similarity of the data in the donnees_films.csv file.",
          "Analytical Dashboard: Transformed a raw database into a visual and interactive dashboard facilitating the exploration of the film catalog."
        ]
      }
    }
  }
];

const projectsDE: Project[] = [
  {
    id: 13, 
    title: "Intelligentes Blutspende-Managementsystem",
    description: "Komplettlösung, die Oracle-Datenbankmanagement, interaktives Dashboard und KI kombiniert, um das Blutspendemanagement zu optimieren.",
    image: "/blood-donation-system.png",
    github: "https://github.com/fatimaezzahra137/BloodDonation-System/tree/main",
    technologies: ["Oracle SQL", "PL/SQL", "Python", "Streamlit", "XGBoost", "Machine Learning"],
    category: "Data Science & Datenbanken",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Dieses Abschlussprojekt (JobInTech) zielte ursprünglich auf den Entwurf einer soliden Datenstruktur ab. Das Ziel wurde erweitert, um eine vollständige technologische Lösung zu entwickeln, die die Entwicklung von Datenbankmanagement-Expertise hin zu Data Science und intelligenter Anwendungsentwicklung demonstriert."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Fortgeschrittene Oracle-Architektur: Implementierung von Paketen, Triggern und gespeicherten Prozeduren zur Automatisierung der Geschäftslogik (Überprüfung der Blutkompatibilität, automatische Berechnung von Bestandsalarmen).",
          "Full-Stack Data Development: Erstellung eines Python-Backends, das über `oracledb` in Echtzeit mit Oracle verbunden ist und ein interaktives Streamlit-Dashboard steuert.",
          "Künstliche Intelligenz: Integration von Machine-Learning-Modellen für die Bestandsvorhersage (Prophet) und die Klassifizierung von Spenderrisiken (XGBoost, Scikit-Learn)."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Integrierte Lösung: Transformation eines Datenbankprojekts in eine vollständige Entscheidungsanwendung.",
          "Entscheidungshilfetool: Implementierung einer interaktiven Steuerung zur Visualisierung kritischer Bestände und Vorhersage zukünftiger Bedürfnisse.",
          "Doppelte Expertise: Erfolgreiche technische Demonstration, die die Strenge von SQL/PL-SQL mit der Kraft der prädiktiven Analyse verbindet."
        ]
      }
    },
  },
 {
    id: 1,
    title: "Kino-Analyse-Dashboard",
    description: "Interaktives Dashboard zur Analyse von Kinotrends und Box-Office-Daten.",
    image: "/cinema-analysis-dashboard.png",
    github: "https://github.com/fatimaezzahra137/cinema-analysis-dashboard",
    technologies: ["Python", "Data Viz", "Streamlit", "Pandas"],
    category: "Datenanalyse",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Die Filmindustrie erzeugt riesige Datenmengen (Budgets, Einnahmen, Bewertungen, Genres). Das Ziel war es, strategische Trends aus einem Rohdatensatz von über 45.000 Filmen (movies_metadata.csv) zu extrahieren, um zu verstehen, welche Faktoren (Genre, Erscheinungsjahr, Budget) den finanziellen Erfolg und die Popularität eines Films wirklich beeinflussen."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Komplexe Datenbereinigung: Verarbeitung verschachtelter JSON-Formate zur Extraktion von Genres, Konvertierung von Datentypen (Budgets und Einnahmen in numerische Werte) und rigorose Behandlung fehlender Werte, um statistische Verzerrungen zu vermeiden.",
          "Feature-Engineering: Erstellung neuer Metriken wie der Gewinnberechnung und Extraktion des Erscheinungsjahres aus vollständigen Daten, um eine zeitliche Analyse zu ermöglichen.",
          "Explorative Datenanalyse (EDA): Verwendung von Pandas und NumPy zur Aggregation von Daten nach Genre und Jahr, um die profitabelsten Kategorien zu identifizieren.",
          "Fortgeschrittene Datenvisualisierung: Entwicklung eines interaktiven Dashboards mit Streamlit, das Matplotlib-Diagramme für die Umsatzverteilung nach Genre und native Diagramme für die Entwicklung der Durchschnittsbewertungen im Zeitverlauf integriert."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Verarbeitung großer Datenmengen: Implementierung einer Pipeline, die große CSV-Dateien automatisch bereinigen und strukturieren kann.",
          "Interaktivität und Klarheit: Erstellung eines Entscheidungshilfetools zur sofortigen Visualisierung des durchschnittlichen Return on Investment nach Genre.",
          "Leistungsoptimierung: Verwendung des Caching-Systems von Streamlit (@st.cache_data), um eine reibungslose und sofortige Datenmanipulation zu ermöglichen, selbst bei komplexen Sortier- oder Filtervorgängen durch den Benutzer."
        ]
      }
    }
  },
  {
    id: 2,
    title: "Expert Immo Casablanca",
    description: "Intelligentes Immobilienbewertungssystem für den Markt in Casablanca unter Verwendung von Echtdaten.",
    image: "/expert-immo-casablanca.png",
    github: "https://github.com/fatimaezzahra137/expert-immo-casablanca",
    technologies: ["Machine Learning", "Real Estate", "Python", "XGBoost", "Scikit-learn"],
    category: "KI & Immobilien",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Der Immobilienmarkt in Casablanca ist äußerst heterogen und komplex. Klassische lineare Modelle erfassen die Preisvariationen zwischen den Stadtteilen (z.B. Gauthier vs. Oulfa) oder die nicht-linearen Auswirkungen der Zimmeranzahl auf den Endwert nicht. Ziel war es, ein Werkzeug zu schaffen, das präzise und objektive Schätzungen unter Berücksichtigung lokaler geografischer und technischer Besonderheiten liefert."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Strenge Datenbereinigung: Beseitigung von Duplikaten, unvollständigen Anzeigen und Filterung von Ausreißern (unrealistische Preise, inkonsistente Flächen), um die Qualität nach dem 'Garbage In, Garbage Out'-Prinzip zu gewährleisten.",
          "Entwicklung der KI-Engine: Implementierung des XGBoost-Algorithmus, ein 'Gradient Boosting'-Modell, das aufgrund seiner Fähigkeit ausgewählt wurde, Vorhersagefehler sequenziell zu korrigieren und komplexe Interaktionen wie das Verhältnis zwischen Etage, Aussicht und Stadtteil zu bewältigen.",
          "Optimierung (Fine-Tuning): Präzise Konfiguration der Hyperparameter (1000 Bäume, Lernrate von 0.05, Tiefe von 8), um Präzision und Modellstabilität auszugleichen.",
          "Interaktive Benutzeroberfläche: Erstellung einer Webanwendung mit Streamlit, die eine interaktive Karte (Folium) für die geografische Auswahl und die automatische Erstellung von Gutachten im PDF-Format enthält."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Hohe Präzision: Das Modell erreicht eine Genauigkeit (R²-Score) von bis zu 98% auf den Testdaten.",
          "Mathematische Zuverlässigkeit: Durchführung einer Kreuzvalidierung (K-Fold), die eine Modellstabilität von 99% gewährleistet und konsistente Ergebnisse für alle Stadtteile von Casablanca sicherstellt.",
          "Geschäftliche Auswirkungen: Reduzierung des mittleren absoluten Fehlers (MAE) durch Datenbereinigung, was den Benutzern eine zuverlässige Schätzung in Millisekunden und ein offizielles Dokument für ihre Formalitäten bietet."
        ]
      }
    }
  },
  {
    id: 3,
    title: "BI-System & Wartungs-Dashboard",
    description: "Business Intelligence (BI)-Lösung zur Zentralisierung von Daten, Automatisierung der Budgetverfolgung und Optimierung technischer Eingriffe.",
    image: "/maintenance-universitaire-powerbi.png",
    github: "https://github.com/fatimaezzahra137/maintenance-universitaire-powerbi",
    technologies: ["Power BI", "Oracle SQL", "PL/SQL", "DAX", "Power Query", "ETL"],
    category: "Business Intelligence",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "In einem Industrie- oder Dienstleistungsumfeld sind Wartungsrohdaten oft verstreut und schwer zu interpretieren. Ziel dieses Projekts war es, eine vollständige BI-Lösung aufzubauen, die diese Daten zentralisieren, die Budgetverfolgung automatisieren und Produktivitätshebel zur Optimierung technischer Eingriffe identifizieren kann."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Datenarchitektur (Back-End): Entwurf und Implementierung einer robusten Datenbank mit Oracle SQL. Verwendung von PL/SQL zur Automatisierung von Verwaltungsprozessen und Gewährleistung der Integrität von Wartungsdaten.",
          "Dimensionale Modellierung: Strukturierung der Daten nach einem Sternschema (Star Schema), um die Leseleistung für Entscheidungsanalysen zu optimieren.",
          "Data Engineering (ETL): Verwendung von Power Query zur Bereinigung, Transformation und zum Laden von Daten von Oracle nach Power BI.",
          "Fortgeschrittene analytische Berechnungen: Erstellung komplexer Kennzahlen in DAX (Data Analysis Expressions) zur Berechnung von Key Performance Indicators (KPIs), Budgetabweichungen und Produktivitätsraten.",
          "Strategische Visualisierung: Entwicklung eines interaktiven Dashboards in Power BI mit Gauges, Ribbon Charts und Scatter Charts für eine umfassende Analyse."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Echtzeit-Überwachung: Implementierung einer sofortigen Sichtbarkeit des Wartungsbudgetverbrauchs, um finanzielle Überschreitungen zu vermeiden.",
          "Operative Optimierung: Präzise Identifizierung kritischer Zeiträume (Saisonalität) und Produktivitätslücken, um Entscheidungsträgern die notwendigen Werkzeuge zur Reorganisation von Technikerteams zu bieten.",
          "End-to-End-Lösung: Demonstration der vollständigen Beherrschung der Datenwertschöpfungskette, von der SQL-Extraktion bis zur strategischen visuellen Entscheidungsfindung."
        ]
      }
    }
  },
  {
    id: 4,
    title: "AI Diagnostic Pro",
    description: "Medizinisches Expertensystem zur Diagnose von Pathologien anhand von Symptomen, basierend auf einem Random Forest-Modell.",
    image: "/ia-diagnostic-svm-app.png",
    github: "https://github.com/fatimaezzahra137/ia-diagnostic-svm-app",
    technologies: ["Random Forest", "Machine Learning", "Python", "Streamlit", "Health"],
    category: "AI & Health",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Ziel war es, ein medizinisches Entscheidungsunterstützungssystem zu entwickeln, das vom Benutzer eingegebene Symptome analysieren kann, um potenzielle Pathologien zu identifizieren. Die Herausforderung bestand darin, eine komplexe medizinische Wissensbasis in einen Klassifikationsalgorithmus umzuwandeln, der eine schnelle vorläufige Diagnose liefern kann, während eine einfache Benutzeroberfläche erhalten bleibt."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Strukturierung medizinischer Daten: Verwendung eines Datensatzes, der Symptomkombinationen mit spezifischen Krankheiten verknüpft (z. B. Fieber, Husten, Müdigkeit).",
          "Implementierung eines Random Forest: Wahl des Random Forest-Modells aufgrund seiner Robustheit und Fähigkeit, 'Rauschen' in den von Patienten gemeldeten Symptomen zu bewältigen.",
          "Entwicklung der Diagnoseschnittstelle: Erstellung einer Streamlit-Oberfläche, die eine intuitive Mehrfachauswahl von Symptomen und eine dynamische Anzeige der Ergebnisse ermöglicht.",
          "Empfehlungssystem: Integration einer Geschäftslogik, um nicht nur die vorhergesagte Krankheit, sondern auch die Beschreibung der Pathologie und die zu treffenden medizinischen Vorsichtsmaßnahmen anzuzeigen.",
          "Modellpersistenz: Serialisierung des trainierten Modells mit Joblib, um ein sofortiges Laden der Intelligenz bei jeder Konsultation zu gewährleisten."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Robuste Leistung: Das Random Forest-Modell gewährleistet eine stabile Klassifizierung durch Mittelung von 100 Entscheidungsbäumen und begrenzt so isolierte Diagnosefehler.",
          "Optimierte Benutzererfahrung: Dank Caching (@st.cache_resource) lädt die Anwendung das Modell nur einmal, was eine Diagnose in Millisekunden ermöglicht.",
          "Präventives Werkzeug: Das Projekt bietet eine zuverlässige erste medizinische Orientierung, ergänzt durch Vorsorgeratschläge, und erleichtert so die Entscheidungsfindung vor einer physischen Konsultation."
        ]
      }
    }
  },
  {
    id: 5,
    title: "Foot PCA Expert (Multidimensionale Scouting-Analyse)",
    description: "Reduzierung der statistischen Komplexität von Spielern, um ähnliche Profile zu identifizieren und verborgene Talente mittels PCA zu entdecken.",
    image: "/foot-pca-scouting-app.png",
    github: "https://github.com/fatimaezzahra137/foot-pca-scouting-app",
    technologies: ["PCA", "Scikit-Learn", "Pandas", "Plotly", "Streamlit", "Sports Analytics"],
    category: "Data Science",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Im modernen Fußball sehen sich Scouts mit tausenden von Statistiken pro Spieler konfrontiert (Tore, Pässe, Tacklings, Zweikämpfe usw.). Das Problem ist, dass es unmöglich ist, Spieler anhand von 50 verschiedenen Kriterien gleichzeitig zu visualisieren und zu vergleichen. Ziel war es, diese Komplexität zu reduzieren, um ähnliche Spielerprofile zu identifizieren und verborgene Talente mithilfe der Dimensionsreduktion zu entdecken."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Sammlung und Vorbereitung: Import und Bereinigung von Spielerleistungsdaten mit Pandas.",
          "Dimensionsreduktion (PCA): Anwendung des Algorithmus der Hauptkomponentenanalyse (Principal Component Analysis) über Scikit-Learn. Diese Technik ermöglichte es, dutzende statistische Variablen in zwei oder drei Hauptachsen (Komponenten) umzuwandeln, die das Wesentliche des Spielstils eines Spielers erfassen.",
          "Interaktive Visualisierung: Entwicklung einer Schnittstelle mit Streamlit unter Integration von Plotly-Diagrammen. Diese Diagramme ermöglichen es, jeden Spieler in einem 2D- oder 3D-Raum zu verorten: Zwei Spieler, die im Diagramm nah beieinander liegen, haben statistisch ähnliche Spielstile, auch wenn sie in verschiedenen Ligen spielen.",
          "Intelligentes Scouting: Implementierung von Filtern nach Team oder Position, um spezifische Profile zu isolieren und den direkten Vergleich zwischen Spielern zu erleichtern."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Datenvereinfachung: Fähigkeit, das komplette Profil eines Athleten in einem einzigen Punkt auf einem Diagramm zusammenzufassen, was die Analyse für einen Scout 10-mal schneller macht.",
          "Identifizierung von 'Cluster'-Profilen: Das Modell gruppiert Spieler natürlich nach Rolle (z. B. 'Box-to-Box', 'Reine Stürmer'), was es ermöglicht, ideale Ersatzspieler basierend auf Daten statt auf Intuition zu finden.",
          "Professionelle Bereitstellung: Veröffentlichung des Projekts auf GitHub mit einer optimierten Struktur (interface_pca.py, requirements.txt), die eine schnelle Installation und volle Portabilität des Scouting-Tools gewährleistet."
        ]
      }
    }
  },
  {
    id: 6,
    title: "Smart Immo Predictor (Marokko)",
    description: "Eine zugängliche Lösung zur sofortigen Schätzung des Werts einer Immobilie in Marokko über eine responsive Schnittstelle und ein Vorhersagemodell.",
    image: "/ia-immo-maroc-app.png",
    github: "https://github.com/fatimaezzahra137/ia-immo-maroc-app",
    technologies: ["Scikit-Learn", "Joblib", "Streamlit", "Python", "Real Estate"],
    category: "AI & Real Estate",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Ziel war es, eine zugängliche Lösung zu entwerfen, die es ermöglicht, den Wert einer Immobilie in Marokko sofort zu schätzen. Die Herausforderung bestand darin, eine komplexe Berechnungslogik, die auf mehreren Variablen basiert (Fläche, Anzahl der Zimmer, Standort), in eine flüssige Benutzeroberfläche umzuwandeln, in der sich der Preis in Echtzeit an die eingegebenen Kriterien anpasst."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Entwicklung der Vorhersage-Engine: Erstellung eines Trainingsskripts (train.py) unter Verwendung der Scikit-Learn-Bibliothek, um die mathematischen Beziehungen zwischen den Eigenschaften der Immobilie und ihrem Marktpreis zu modellieren.",
          "Modellpersistenz: Serialisierung der künstlichen Intelligenz im .pkl-Format mit Joblib, was der Anwendung ermöglicht, das Wissen des Modells ohne redundante Berechnungen sofort zu laden.",
          "Reaktive Schnittstelle: Verwendung von Streamlit zur Gestaltung eines interaktiven Dashboards mit Schiebereglern (st.slider) und Dropdown-Menüs für eine ergonomische Dateneingabe.",
          "Vorhersagelogik: Implementierung der .predict()-Methode, um die von der KI gelernten Formeln in Echtzeit auf die Eingabedaten anzuwenden.",
          "Saubere Architektur: Einrichtung einer dedizierten virtuellen Umgebung und einer professionellen Dateistruktur, die die Bereitstellung und Versionsverwaltung über GitHub erleichtert."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Sofortige Schätzung: Das System berechnet und zeigt den Endpreis an, sobald der Benutzer eine Eigenschaft ändert, und bietet so eine vollständige Reaktivität der Schnittstelle.",
          "Popularisierung von KI: Umwandlung eines komplexen Algorithmus in ein einfach zu bedienendes Werkzeug, das Immobilienexpertise für Privatpersonen zugänglich macht.",
          "Technische Zuverlässigkeit: Implementierung einer robusten Pipeline (Training -> Speichern -> Bereitstellung), die die Stabilität der Anwendung auf einem lokalen Server oder im Web gewährleistet."
        ]
      }
    }
  },
  {
    id: 7,
    title: "Intelligentes Artenidentifikationssystem",
    description: "Tool zur automatischen Klassifizierung von Tierarten basierend auf ihren physischen Merkmalen unter Verwendung von Scikit-Learn und einer Streamlit-Schnittstelle.",
    image: "/animal-id-ai-app.png",
    github: "https://github.com/fatimaezzahra137/animal-id-ai-app",
    technologies: ["Scikit-Learn", "Joblib", "Streamlit", "Plotly", "Python"],
    category: "Machine Learning",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Ziel dieses Projekts war es, ein Werkzeug zu erstellen, das Tierarten automatisch anhand einfacher physischer Merkmale (Gewicht, Größe, Flugfähigkeit) klassifizieren kann. Die Herausforderung bestand darin, ein Modell zu trainieren, das 8 verschiedene Arten anhand einer kleinen Stichprobe von Trainingsdaten präzise unterscheiden kann."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Erstellung des Datensatzes: Erstellung einer Datenbank mit 24 Beispielen, die 8 Tierarten abdecken (3 Beispiele pro Art), um eine ausgewogene Trainingsbasis zu gewährleisten.",
          "Modelltraining: Entwicklung eines Lernskripts (train_animal.py) unter Verwendung der Scikit-Learn-Bibliothek, um das 'Gehirn' der Anwendung zu erstellen.",
          "KI-Persistenz: Speichern des trainierten Modells im .pkl-Format via Joblib, was der Anwendung ermöglicht, das erworbene Wissen ohne erneutes Training bei jedem Start wiederzuverwenden.",
          "Interaktive Eingabeschnittstelle: Entwurf einer Streamlit-Anwendung, die eine Seitenleiste mit numerischen Schiebereglern (number_input) und Optionsfeldern zur Eingabe der Tiermerkmale integriert.",
          "Visualisierung und Feedback: Verwendung von Plotly zur Generierung von Analysediagrammen und Implementierung eines sicheren Anzeigesystems, das den Benutzer warnt, wenn das Modell nicht geladen ist."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Verifiziertes Lernen: Validierung des Trainingsprozesses mit 24 erfolgreich verarbeiteten Beispielen, was die Integrität der Wissensbasis bestätigt.",
          "Intuitive Schnittstelle: Bereitstellung eines ergonomischen Tools, bei dem der Benutzer eine sofortige und visuelle Vorhersage der Tierart erhält.",
          "Bereitstellungspipeline: Veröffentlichung des Projekts auf GitHub mit einer professionellen Struktur, einschließlich der Verwaltung virtueller Umgebungen und Abhängigkeiten für volle Portabilität."
        ]
      }
    }
  },
  {
    id: 8,
    title: "Persönlicher Budgetverwaltungs-Assistent",
    description: "Intuitive Anwendung zur Verfolgung von Einnahmen und Ausgaben, Visualisierung der finanziellen Gesundheit und Speicherung von Daten für die langfristige Überwachung.",
    image: "/mon-assistant-budget.png",
    github: "https://github.com/fatimaezzahra137/mon-assistant-budget",
    technologies: ["Python", "Streamlit", "Finance", "Automation"],
    category: "Personal Finance",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Die manuelle Verwaltung persönlicher Finanzen ist oft mühsam und fehleranfällig. Ziel war es, eine intuitive Anwendung zu erstellen, die es einem Benutzer ermöglicht, seine Einnahmen und Ausgaben in Echtzeit zu verfolgen, seine finanzielle Gesundheit über dynamische Indikatoren zu visualisieren und seine Daten für eine langfristige Überwachung zu speichern."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Mehrseiten-Architektur: Strukturierung der Anwendung mit Streamlit unter Verwendung einer Mehrseiten-Schnittstelle (app.py für die Zusammenfassung und ein Ordner pages/ für Eingabe und Analyse), um Funktionalitäten klar zu trennen.",
          "Zustandsverwaltung (Session State): Verwendung von st.session_state, um das Transaktionsgedächtnis des Benutzers während seiner gesamten Navigation aufrechtzuerhalten und so Datenverlust beim Aktualisieren der Seite zu vermeiden.",
          "Dynamische Eingabeschnittstelle: Entwicklung von Formularen zur Kategorisierung von Ausgaben (Lebensmittel, Wohnen, Freizeit usw.) mit Währungswahl ($, €, DH).",
          "Visualisierung und Überwachung: Implementierung eines Fortschrittsbalkens zum Vergleich der Gesamtausgaben mit dem Anfangseinkommen und Anzeige des verbleibenden Saldos.",
          "Datenpersistenz: Integration einer Exportfunktion im CSV-Format mit MIME-Typ-Verwaltung, damit der Benutzer seine Bilanz auf seinem Computer speichern kann.",
          "Bereitstellung und Versionierung: Veröffentlichung des Projekts auf GitHub mit einer professionellen Dateistruktur, um die Installation und Ausführung über eine virtuelle Umgebung zu erleichtern."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Flüssige Benutzererfahrung: Erstellung eines Tools, das eine sofortige finanzielle Zusammenfassung ohne komplexe manuelle Berechnung liefern kann.",
          "Datenportabilität: Dank des Download-Buttons verwandelt der Benutzer eine temporäre Browsing-Sitzung in ein dauerhaftes Tracking-Dokument, das in Excel verwendet werden kann.",
          "Visuelle Automatisierung: Die Anwendung bietet eine sofortige Ablesung des verfügbaren Budgets und hilft dem Benutzer, sein Kaufverhalten an seinen monatlichen Fortschritt anzupassen."
        ]
      }
    }
  },
  {
    id: 9,
    title: "Strategische Kundenanalyse und Segmentierung",
    description: "Segmentierung einer Kundendatenbank in homogene Gruppen zur Personalisierung von Marketingkampagnen und Optimierung der Kundenbindung.",
    image: "/ia-clustering-3d.png",
    github: "https://github.com/fatimaezzahra137/ia-clustering-3d",
    technologies: ["Clustering", "K-Means", "Scikit-Learn", "Pandas", "Plotly", "Streamlit"],
    category: "Data Visualization",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Für ein Unternehmen ist es ineffizient, alle Kunden gleich zu behandeln. Ziel dieses Projekts war es, eine Kundendatenbank (Excel/CSV-Format) in homogene Gruppen zu segmentieren. Durch die Identifizierung ähnlicher Kaufverhalten oder Profile kann das Unternehmen seine Marketingkampagnen personalisieren und die Kundenbindung optimieren."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Data Engineering: Import und Vorbereitung von Kundendaten mit Pandas und Openpyxl, einschließlich der Normalisierung von Variablen, um sicherzustellen, dass jedes Kriterium (z. B. Alter vs. Kaufbetrag) das gleiche Gewicht in der Analyse hat.",
          "Segmentierung durch Machine Learning: Implementierung des Clustering-Algorithmus (K-Means oder ähnlich über Scikit-Learn), um Kunden anhand ihrer gemeinsamen Merkmale zu gruppieren.",
          "Interaktive 3D-Visualisierung: Verwendung von Plotly zur Erstellung eines dreidimensionalen Diagramms, um die Cluster (Kundengruppen) physisch zu visualisieren und die Grenzen zwischen jedem Segment zu interpretieren.",
          "Dashboard-Bereitstellung: Entwicklung einer Streamlit-Anwendung, die es einem geschäftlichen Benutzer ermöglicht, eine Kundendatei hochzuladen und sofort eine visuelle und analytische Segmentierung zu erhalten."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Identifizierung typischer Profile: Extraktion klarer Kundensegmente (z. B. 'Kunden mit hohem Potenzial', 'Gelegenheitskunden'), was gezielte Marketingstrategien ermöglicht.",
          "Entscheidungshilfetool: Erstellung einer intuitiven Schnittstelle, in der komplexe Daten in für Nicht-Datenexperten umsetzbare 3D-Grafiken umgewandelt werden.",
          "Pipeline-Automatisierung: Implementierung eines robusten Systems, das die Verwaltung virtueller Umgebungen und die Versionierung über Git/GitHub integriert und so die Portabilität und einfache Aktualisierung des Tools gewährleistet."
        ]
      }
    }
  },
  {
    id: 10,
    title: "KI-gestütztes prädiktives Wartungssystem (IoT & Sensoren)",
    description: "Antizipation industrieller Ausfälle durch Analyse von Sensordaten, um von reaktiver zu prädiktiver Wartung überzugehen.",
    image: "/maintenance-predictive-ia.png",
    github: "https://github.com/fatimaezzahra137/maintenance-predictive-ia",
    technologies: ["Random Forest", "NumPy", "Streamlit", "Plotly", "FPDF2", "IoT"],
    category: "Industry 4.0",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "In der Industrie sind ungeplante Ausfälle kostspielig und verlangsamen die Produktion. Ziel dieses Projekts war der Übergang von reaktiver zu prädiktiver Wartung. Durch die Analyse von Sensordaten (Temperatur, Druck, Vibrationen) muss die KI in der Lage sein, einen bevorstehenden Ausfall zu antizipieren, bevor er eintritt, und so einen gezielten Eingriff ermöglichen."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Erzeugung synthetischer Daten: Entwicklung eines Skripts (generer_data.py) unter Verwendung von NumPy zur Simulation von 100 realistischen industriellen Sensormessungen, einschließlich normaler Betriebsszenarien und Fehleranomalien.",
          "Überwachtes Lernen (Random Forest): Training eines Random Forest-Modells, das aufgrund seiner Fähigkeit ausgewählt wurde, komplexe Beziehungen zwischen mehreren Sensorvariablen zu behandeln und einen zuverlässigen Wahrscheinlichkeitsscore zu liefern.",
          "Echtzeit-Monitoring-Dashboard: Erstellung einer interaktiven Streamlit-Schnittstelle zur Simulation von Sensormesswerten über Schieberegler.",
          "Warnvisualisierung: Integration einer dynamischen Anzeige (Plotly Gauge), die das Ausfallrisiko in Echtzeit als Prozentsatz anzeigt.",
          "Automatisiertes Reporting: Implementierung der FPDF2-Bibliothek, um automatisch einen Interventionsbericht im PDF-Format zu generieren und herunterzuladen, sobald ein kritischer Warnschwellenwert (z. B. 90 %) erreicht wird."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Visueller Präzisionsindikator: Die Verwendung des 'Gauge+Number'-Modus auf dem Dashboard ermöglicht ein sofortiges und präzises Ablesen des Risikos, was eine schnelle Entscheidungsfindung für Techniker erleichtert.",
          "Workflow-Automatisierung: Der automatische Übergang von der Analyse zur PDF-Berichterstellung reduziert die administrative Dokumentationszeit im Falle eines technischen Notfalls.",
          "Professionelle Struktur: Implementierung einer vollständigen Pipeline, von der Datengenerierung (.csv) bis zur Modellspeicherung (.pkl), alles versioniert auf GitHub mit sauberer Abhängigkeitsverwaltung."
        ]
      }
    }
  },
  {
    id: 11,
    title: "Intelligenter Spam-Detektor (NLP)",
    description: "System zur Analyse von Textinhalten, um festzustellen, ob eine Nachricht legitim (Ham) oder unerwünscht (Spam) ist, basierend auf statistischen Wahrscheinlichkeiten.",
    image: "/ia-anti-spam-maroc.png",
    github: "https://github.com/fatimaezzahra137/ia-anti-spam-maroc",
    technologies: ["NLP", "Naive Bayes", "Scikit-Learn", "Streamlit", "Plotly", "Spam Detection"],
    category: "NLP & Security",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Mit der Explosion des Volumens digitaler Kommunikation ist das Filtern unerwünschter Nachrichten (Spam) entscheidend geworden. Ziel war es, ein System zu entwickeln, das den Textinhalt einer Nachricht analysieren kann, um automatisch festzustellen, ob sie legitim (Ham) oder unerwünscht (Spam) ist, unter Verwendung statistischer Wahrscheinlichkeiten basierend auf Schlüsselwörtern."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "Textvektorisierung: Implementierung eines Prozesses zur Umwandlung natürlicher Sprache in numerische Daten, die von der KI über einen Vektorisierer (gespeichert als vectorizer.pkl) genutzt werden können.",
          "Statistische Modellierung (Naive Bayes): Verwendung des Satzes von Bayes zur Berechnung der Wahrscheinlichkeit, dass eine Nachricht Spam ist, basierend auf der Häufigkeit des Auftretens bestimmter Schlüsselwörter.",
          "Trainings-Pipeline: Entwicklung eines Skripts train_spam.py zum Trainieren des Modells und Speichern des 'Gehirns' der Anwendung (modele_spam.pkl).",
          "Echtzeit-Erkennungsschnittstelle: Entwurf einer Streamlit-Anwendung, in der der Benutzer seinen Text eingibt und sofort eine Diagnose zusammen mit einem Vertrauensscore erhält.",
          "Archivierungssystem: Erstellung einer automatischen Aufzeichnungsfunktion in einer Datei nouveaux_messages.csv, um neue Eingaben zu sammeln und eine kontinuierliche Verbesserung des Modells zu ermöglichen.",
          "Plotly-Visualisierung: Integration von Diagrammen zur Visualisierung des Wahrscheinlichkeitsscores und der Verteilung der Nachrichtenkategorien."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Hochpräzise Diagnose: Das Modell kann die sprachlichen Nuancen zwischen einer professionellen Nachricht und einem Phishing-Versuch unterscheiden und bietet einen klaren Zuverlässigkeitsprozentsatz für jede Vorhersage.",
          "Evolutives Lernen: Dank der automatisierten Initialisierung der CSV-Datei legt das Projekt den Grundstein für ein System, das im Laufe der Zeit aus seinen neuen Fehlern lernen kann.",
          "Professionelle Bereitstellung: Veröffentlichung des Codes auf GitHub mit vollständiger Dokumentation zur Verwaltung der virtuellen Umgebung (venv) und der Abhängigkeiten, um eine volle Portabilität der Lösung zu gewährleisten."
        ]
      }
    }
  },
  {
    id: 12,
    title: "Filmempfehlungssystem (KNN)",
    description: "Intelligente Empfehlungsmaschine, die Filme vorschlägt, die einem bestimmten Titel ähnlich sind, basierend auf mathematischen Näherungsberechnungen.",
    image: "/AI-CINEMA.png",
    github: "https://github.com/fatimaezzahra137/AI-CINEMA",
    technologies: ["KNN", "Scikit-Learn", "Streamlit", "Plotly", "Python"],
    category: "AI Application",
    details: {
      problem: {
        title: "Problem (Ziel)",
        content: "Mit der Verbreitung von Streaming-Plattformen ist es für Benutzer schwierig geworden, einen Film aus tausenden von Optionen auszuwählen. Ziel war es, eine intelligente Empfehlungsmaschine zu entwickeln, die Filme vorschlagen kann, die einem bestimmten Titel ähnlich sind, basierend auf mathematischen Näherungsberechnungen anstatt auf einfachen Kategorien."
      },
      action: {
        title: "Maßnahmen",
        points: [
          "KI-Implementierung (KNN): Verwendung des K-Nearest Neighbors-Algorithmus (K-Nächste Nachbarn) von Scikit-Learn, um die nächstgelegenen Filme in einem multidimensionalen Raum zu identifizieren.",
          "Design und Ergonomie: Anpassung der Schnittstelle durch Injektion von CSS-Code in Streamlit (st.markdown), um Ästhetik und Benutzererfahrung zu verbessern.",
          "Interaktive Visualisierung: Erstellung dynamischer Diagramme (Kreis- und Balkendiagramme) mit Plotly Express zur Analyse der Verteilung von Genres und Bewertungen im Katalog.",
          "Erweiterte Funktionen: Einrichtung eines Exportsystems nach Excel (via BytesIO), das es Benutzern ermöglicht, ihre Empfehlungslisten zu speichern.",
          "Cloud-Bereitstellung: Veröffentlichung der Anwendung auf Streamlit Cloud via GitHub, wodurch das Tool rund um die Uhr mobil und im Web über eine öffentliche URL zugänglich ist."
        ]
      },
      result: {
        title: "Ergebnis",
        points: [
          "Totale Zugänglichkeit: Übergang von einem lokalen Skript zu einer bereitgestellten Webanwendung, die eine universelle Nutzung ohne technische Installation ermöglicht.",
          "Empfehlungsgenauigkeit: Dank des KNN-Modells liefert das System relevante Vorschläge basierend auf der tatsächlichen Ähnlichkeit der Daten in der Datei donnees_films.csv.",
          "Analytisches Dashboard: Umwandlung einer Rohdatenbank in ein visuelles und interaktives Dashboard, das die Erkundung des Filmkatalogs erleichtert."
        ]
      }
    }
  },
    // ... All other 10 projects translated to German
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  let projects: Project[];
  if (language === 'en') {
    projects = projectsEN;
  } else if (language === 'de') {
    projects = projectsDE;
  } else {
    projects = projectsFR;
  }

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
            {t('projects_page_title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in-left">
            {t('projects_page_desc')}
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
                    <span>Code</span>
                  </a>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    disabled={!project.details}
                    className="flex items-center gap-2 px-5 py-3 bg-[#704630] text-white rounded-lg hover:bg-[#5a3826] transition-colors flex-1 justify-center disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <ExternalLink size={20} />
                    <span>{t('projects_details_btn')}</span>
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
              {t('projects_github_btn')}
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