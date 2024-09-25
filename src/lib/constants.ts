/* eslint-disable @typescript-eslint/no-unused-vars */
export const navLinks = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/services",
    name: "Services",
  },
  {
    route: "/projects",
    name: "Projects",
  },
];

type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Conception Architecturale",
    description:
      "Fournir des solutions de conception innovantes et durables pour les bâtiments résidentiels et commerciaux, en assurant fonctionnalité et esthétique.",
  },
  {
    name: "Gestion de Construction",
    description:
      "Gérer les projets de la planification à la réalisation, en garantissant la livraison dans les délais, le contrôle qualité et le respect du budget tout au long du processus de construction.",
  },
  {
    name: "Design Intérieur",
    description:
      "Créer des designs d'intérieur sur mesure, adaptés aux préférences et aux besoins des clients, en concevant des espaces fonctionnels et esthétiques.",
  },
  {
    name: "Rénovation & Réaménagement",
    description:
      "Transformer des structures existantes avec des rénovations modernes et des réaménagements, allant des petites rénovations aux projets de réaménagement complet.",
  },
  {
    name: "Planification de Site",
    description:
      "Fournir des services complets d'évaluation et de planification des sites, en optimisant l'utilisation des terrains pour des développements résidentiels ou commerciaux.",
  },
  {
    name: "Ingénierie Structurelle",
    description:
      "Offrir des services d'ingénierie structurelle de pointe pour assurer la sécurité, la durabilité et la conformité aux normes des bâtiments.",
  },
  {
    name: "Solutions de Construction Écologique",
    description:
      "Mettre en œuvre des pratiques de construction respectueuses de l'environnement, en se concentrant sur des conceptions écoénergétiques, des matériaux durables et la réduction de l'impact environnemental.",
  },
  {
    name: "Entrepreneur Général",
    description:
      "Proposer une gamme complète de services de contractance générale, en coordonnant tous les aspects du processus de construction, y compris les sous-traitants et les fournisseurs.",
  },
  {
    name: "Construction de Maisons sur Mesure",
    description:
      "Spécialisé dans la construction de maisons sur mesure, fournissant des solutions de conception et de construction adaptées aux visions et aux modes de vie spécifiques des clients.",
  },
  {
    name: "Construction Commerciale",
    description:
      "Construire des propriétés commerciales fonctionnelles et efficaces, allant des immeubles de bureaux aux espaces de vente, avec un accent sur un artisanat de haute qualité.",
  },
];
