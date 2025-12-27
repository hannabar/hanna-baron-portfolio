import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sweet Memory",
    description: "Jeu de mémoire (Memory Game) avec manipulation du DOM et gestion d'événements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Retournement de cartes interactif",
      "Détection automatique des paires",
      "Compteur de coups et chronomètre",
      "Logique de programmation avancée",
    ],
    category: "Jeux",
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
  },
];

const categories = ["Tous", "Jeux", "E-commerce", "Web App", "Sécurité"];

const TravauxPratiques = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        badge="Formation BTS SIO"
        title="Travaux Pratiques"
        subtitle="6 projets pratiques réalisés durant ma formation, couvrant le développement web, la gestion de bases de données et la sécurité informatique."
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
