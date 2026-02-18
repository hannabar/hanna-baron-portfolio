import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import todoListVideo from "@/assets/todolist-cpp-animated.mp4";

const TodoListCpp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="TP To Do List"
        subtitle="Application console de gestion de tâches développée en C++."
        backgroundVideo={todoListVideo}
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
            {["C++", "Console"].map((tech) => (
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
                Ce TP consiste à développer une application console en C++ permettant de gérer une liste de tâches (To Do List). L'utilisateur peut ajouter, afficher, modifier et supprimer des tâches via un menu interactif.
              </p>
              <p>
                Le projet met en pratique les fondamentaux du langage C++ : structures de données, boucles, conditions, gestion de fichiers et manipulation de chaînes de caractères.
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
                Manipulation de structures de données (vecteurs, structures) pour stocker et organiser les tâches
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Gestion d'un menu interactif en console avec boucle principale et gestion des entrées utilisateur
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Persistance des données via la lecture et l'écriture dans des fichiers texte
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Organisation du code en fonctions modulaires pour la maintenabilité
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
                Ce projet m'a permis de consolider mes bases en C++ et de comprendre les mécanismes fondamentaux de la programmation orientée objet et de la gestion de données en mémoire.
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

export default TodoListCpp;
