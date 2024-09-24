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
  {
    route: "/contact",
    name: "Contact",
  },
];


type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Architectural Design",
    description:
      "Providing innovative and sustainable design solutions for residential and commercial buildings, ensuring functionality and aesthetic appeal.",
  },
  {
    name: "Construction Management",
    description:
      "Managing projects from start to finish, ensuring on-time delivery, quality control, and adherence to budget throughout the construction process.",
  },
  {
    name: "Interior Design",
    description:
      "Crafting bespoke interior designs tailored to clients’ preferences and needs, creating functional, aesthetically pleasing spaces.",
  },
  {
    name: "Renovation & Remodeling",
    description:
      "Transforming existing structures with modern upgrades and redesigns, from small renovations to full-scale remodeling projects.",
  },
  {
    name: "Site Planning",
    description:
      "Providing comprehensive site assessments and planning services, optimizing land use for residential or commercial development.",
  },
  {
    name: "Structural Engineering",
    description:
      "Delivering expert structural engineering services to ensure buildings are safe, durable, and compliant with all necessary codes and regulations.",
  },
  {
    name: "Green Building Solutions",
    description:
      "Implementing eco-friendly construction practices, focusing on energy-efficient designs, sustainable materials, and reducing environmental impact.",
  },
  {
    name: "General Contracting",
    description:
      "Offering a full range of general contracting services, coordinating all aspects of the construction process, including subcontractors and suppliers.",
  },
  {
    name: "Custom Home Building",
    description:
      "Specializing in custom-built homes, providing tailored design and construction solutions to meet clients’ specific visions and lifestyles.",
  },
  {
    name: "Commercial Construction",
    description:
      "Building functional and efficient commercial properties, from office buildings to retail spaces, with a focus on high-quality craftsmanship.",
  },
];
