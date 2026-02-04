import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SweetMemory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        badge="Travaux Pratiques"
        title="Sweet Memory"
        subtitle="Jeu de mémoire (Memory Game) avec manipulation du DOM et gestion d'événements."
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
            {["HTML", "CSS", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Images Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 mb-12"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Screenshot 1</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Screenshot 2</span>
            </div>
          </motion.div>

          {/* Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Présentation du projet
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Sweet Memory</strong> est un jeu de mémoire classique développé en JavaScript vanilla.
                Le joueur doit retrouver les paires de cartes identiques en les retournant une par une.
              </p>
              <p>
                Ce projet m'a permis de maîtriser la manipulation du DOM, la gestion des événements utilisateur
                et la logique de programmation pour créer un jeu interactif et engageant.
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Fonctionnalités principales
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Retournement de cartes interactif avec animations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Détection automatique des paires
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Compteur de coups et chronomètre
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Mélange aléatoire des cartes à chaque partie
              </li>
            </ul>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Conclusion
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ce projet m'a permis de consolider mes bases en JavaScript et de comprendre l'importance
                de la gestion d'état dans une application interactive.
              </p>
              <p className="text-foreground font-medium">
                ✅ Résultat : Jeu fonctionnel avec une expérience utilisateur fluide
              </p>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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

export default SweetMemory;
