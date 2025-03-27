import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  anef,
  morpheus,
  powerbi,
  sql,
  powerquery,
  talend,
  python,
  excel,
  projetrh,
  projetsuivibudg,
  datascientest,
  iscod,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Profil",
  },
  {
    id: "work",
    title: "Experience pro",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Contrôle de Gestion",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Consultant EPM",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power Query",
    icon: powerquery,
  },
  {
    name: "PowerBi",
    icon: powerbi,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Talend",
    icon: talend,
  },
];

const experiences: TExperience[] = [
  {
    title: "Contrôleur de Gestion",
    companyName: "ANEF 03-63",
    icon: anef,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - acutel",
    points: [
      "Suivi budgétaires et corrections/analyse des écarts.",
      "Création de tableaux de bords, fichiers automatisés dediés à la gestion, suivi des finances et des ressources humaines.",
      "Mise en plage et gestion de la base de donnée comptable sous SQL en intégrant les données sur Excel via PowerQuery et SQL.",
      "Mise en place et structuration de la base de données du progiciel de gestion budgétaire DIR-IPS."
    ],
  },
  {
    title: "Concepteur de fichiers standards / sur mésure Excel",
    companyName: "Morpheus Formation",
    icon: morpheus,
    iconBg: "#E6DEDD",
    date: "Octobre 2024 - actuel",
    points: [
      "Création de fichiers standards / modèles de fichiers Excel no code en libre service ou dediés à la vente",
      "Création de fichiers sur mesure à la demande des clients : Finance, Associations, Suivi RH..."
    ],
  },
  {
    title: "Formation Data Analyst",
    companyName: "Datascientest.com",
    icon: datascientest,
    iconBg: "#E6DEDD",
    date: "Septembre 2024 - Avril 2024",
    points: [
      ".......",
    ],
  },
  {
    title: "Executive Bachelor : Comptabilité Finance et Gestion",
    companyName: "ISCOD",
    icon: iscod,
    iconBg: "#E6DEDD",
    date: "Septembre 2023 - Août 2024",
    points: [
      "...............",
    ],
  },
];
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Amine a pu me construire un fichier Excel pour un suivi de l'activité d'un hopital à Ryiad. En quelques semaines c'était bouclé.",
    name: "Hussam F.",
    designation: "Finance Manager",
    company: "King Abdullah Hospital Center",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Suivi et gestion budgétaire",
    description:
      `Fichier Excel pour le suivi budgétaire et la prévision sur 1 ans en fonction de variables et API (inflation).
      Les données comptables sont issues automatiquement via des requêtes Power Query, interrogeeant la base de données du progiciel comptable.`,
    tags: [
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "Finance",
        color: "pink-text-gradient",
      },
    ],
    image: projetsuivibudg,
    sourceCodeLink: "lien",
  },
  {
    name: "Tableau de bord RH",
    description:
      `Tableau de bord de suivi de personnel et évolutions de la population au sein de l'ANEF 03-63.
      Les données sont integrées via des requêtes Power Query, en lien avec des APIs liées au 'SaaS' de la structure`,
    tags: [
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "PowerQuery",
        color: "blue-text-gradient",
      },
      {
        name: "RH",
        color: "pink-text-gradient",
      },
    ],
    image: projetrh,
    sourceCodeLink: "lien",
  },
];

export { services, technologies, experiences, testimonials, projects };
