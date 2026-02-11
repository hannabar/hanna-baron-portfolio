import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import galerieVideo from "@/assets/galerie-hero-video.mp4";
import sweetMemoryVideo from "@/assets/sweet-memory-animated.mp4";
import slotMachineVideo from "@/assets/slot-machine-animated.mp4";

const projects = [
  {
    title: "Sweet Memory",
    description: "Jeu de memory interactif développé en JavaScript autour de petites sucreries.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Affichage dynamique des cartes de sucreries",
      "Mécanique de jeu de memory",
      "Compteur de mouvements et chronomètre",
      "Bouton pour recommencer la partie",
    ],
    category: "Jeux",
    slug: "sweet-memory",
    video: sweetMemoryVideo,
    backgroundVideo: true,
    githubLink: "https://github.com/hannabar/tp-memory.git",
  },
  {
    title: "Machine à sous",
    description: "Simulation d'une machine à sous avec génération aléatoire et animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Génération aléatoire de symboles",
      "Calcul automatique des gains",
      "Animation fluide des rouleaux",
      "Utilisation de Math.random()",
    ],
    category: "Jeux",
    slug: "machine-a-sous",
    video: slotMachineVideo,
    backgroundVideo: true,
    githubLink: "#",
  },
  {
    title: "Catalogue des paniers",
    description: "Site e-commerce de vente de paniers avec gestion CRUD complète.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Affichage catalogue produits",
      "Panier d'achat fonctionnel",
      "Gestion des quantités",
      "Administration des produits",
    ],
    category: "E-commerce",
    slug: "catalogue-paniers",
    githubLink: "#",
  },
  {
    title: "Mini Blog",
    description: "Blog complet avec système de publication d'articles et authentification.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "CRUD d'articles complet",
      "Système de commentaires",
      "Authentification utilisateurs",
      "Interface d'administration",
    ],
    category: "Web App",
    slug: "mini-blog",
    githubLink: "#",
  },
  {
    title: "Galerie",
    description: "Galerie photos interactive avec upload de fichiers et manipulation d'images.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Upload et gestion d'images",
      "Affichage grille et lightbox",
      "Filtres et catégories",
      "Pagination dynamique",
    ],
    category: "Web App",
    slug: "galerie",
    video: galerieVideo,
    githubLink: "https://github.com/hannabar/galerie_images.git",
  },
  {
    title: "Cyber",
    description: "Projet sur la cybersécurité avec sensibilisation aux failles de sécurité.",
    technologies: ["HTML", "CSS", "JavaScript", "Sécurité"],
    features: [
      "Démonstration de failles de sécurité",
      "Tests de vulnérabilité",
      "Bonnes pratiques de sécurisation",
      "Protection des données",
    ],
    category: "Sécurité",
    slug: "cyber",
    githubLink: "#",
  },
  {
    title: "PPE Main",
    description: "Projet Professionnel Encadré - Application principale développée en équipe.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Développement en équipe",
      "Gestion de projet",
      "Architecture complète",
      "Documentation technique",
    ],
    category: "PPE",
    slug: "ppe-main",
    githubLink: "https://github.com/hannabar/PPE_PHP.git",
  },
  {
    title: "PPE Android Java",
    description: "Application mobile Android développée en Java dans le cadre du PPE.",
    technologies: ["Java", "Android", "SQLite", "XML"],
    features: [
      "Interface mobile native",
      "Base de données locale",
      "Gestion des activités",
      "Design Material",
    ],
    category: "PPE",
    slug: "ppe-android-java",
    githubLink: "https://github.com/hannabar/GSB_MedicineApp.git",
  },
];

const categories = ["Tous", "Jeux", "E-commerce", "Web App", "Sécurité", "PPE"];

const TravauxPratiques = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        badge="Formation BTS SIO"
        title="Travaux Pratiques"
        subtitle="Projets pratiques réalisés durant ma formation, couvrant le développement web, la gestion de bases de données et la sécurité informatique."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                detailLink={`/tp/${project.slug}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravauxPratiques;
