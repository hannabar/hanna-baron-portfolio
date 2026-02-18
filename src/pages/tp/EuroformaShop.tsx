import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import euroformaVideo from "@/assets/euroforma-shop-animated.mp4";

const EuroformaShop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Euroforma Shop"
        subtitle="Application e-commerce développée en Python pour la gestion d'une boutique en ligne."
        backgroundVideo={euroformaVideo}
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm">
              <Link to="/tp">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux Travaux Pratiques
              </Link>
            </Button>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["Python", "Flask", "SQLite"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Présentation du projet
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Euroforma Shop est une application e-commerce développée en Python permettant de gérer une boutique en ligne avec catalogue de produits, panier d'achat et gestion des commandes.
              </p>
              <p>
                Ce projet met en œuvre les principes du développement web côté serveur avec Python, la gestion de bases de données relationnelles et la création d'interfaces utilisateur dynamiques.
              </p>
            </div>
          </motion.div>

          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Compétences mobilisées
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Développement d'une application web avec un framework Python (Flask/Django)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Conception et gestion d'une base de données relationnelle pour le catalogue produits et les commandes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Implémentation d'un système de panier d'achat avec gestion des sessions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Création d'une interface utilisateur responsive pour la navigation et l'achat
              </li>
            </ul>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Conclusion
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ce projet m'a permis d'approfondir mes compétences en Python dans un contexte de développement web e-commerce et de maîtriser la gestion complète d'un cycle de vente en ligne.
              </p>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Voir sur GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EuroformaShop;
