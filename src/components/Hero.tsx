import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/hanna-profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(220_25%_15%)_0%,hsl(220_25%_8%)_70%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-2 rounded-full opacity-75"
                style={{ background: "var(--gradient-primary)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-500" />
              {/* Photo container */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profileImage}
                  alt="Hanna Baron"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              BTS SIO Option SLAM • Euroforma Paris
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Hanna <span className="gradient-text">Baron</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionnée par l'informatique, je transforme ma curiosité en compétences 
            concrètes en développement et gestion de projets. Toujours motivée pour 
            apprendre et créer des solutions innovantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                En savoir plus
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 md:mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "6+", label: "Projets TP" },
              { value: "2", label: "Ateliers PPE" },
              { value: "18/20", label: "Note NSI Bac" },
              { value: "1", label: "Alternance" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
