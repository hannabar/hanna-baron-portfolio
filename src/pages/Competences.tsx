import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Code, Database, Shield, Wrench, Users, BookOpen } from "lucide-react";
import competencesBgVideo from "@/assets/competences-bg-animated.mp4";

const technicalSkills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
];

const dbSkills = [
  { name: "MySQL / MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Requêtes SQL (JOIN, INSERT...)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const securitySkills = [
  "Analyse des incidents de sécurité",
  "Tests d'intégration sécurisés",
  "Prévention des attaques (SQL injection, XSS, CSRF)",
  "Conformité aux standards de sécurité",
  "Gestion des habilitations et contrôle d'accès",
  "Analyse des logs",
];

const tools = ["Git / GitHub", "VS Code", "Visual Studio", "PHPStorm", "Docker", "Odoo", "Android Studio", "XAMPP", "WAMP"];

const btsSioBloc1 = [
  "Gérer le patrimoine informatique",
  "Répondre aux incidents et aux demandes",
  "Développer la présence en ligne de l'organisation",
  "Travailler en mode projet",
  "Mettre à disposition des utilisateurs un service informatique",
  "Organiser son développement professionnel",
];

const btsSioBloc2 = [
  "Concevoir et développer une solution applicative",
  "Assurer la maintenance corrective ou évolutive",
  "Gérer les données",
];


const softSkills = [
  { skill: "Gestion de projet", desc: "Planification, suivi, documentation" },
  { skill: "Travail en équipe", desc: "Collaboration, communication" },
  { skill: "Autonomie", desc: "Recherche de solutions, auto-formation" },
  { skill: "Pédagogie", desc: "Formation utilisateurs, rédaction documentation" },
  { skill: "Analyse", desc: "Compréhension besoins, spécifications techniques" },
  { skill: "Animation", desc: "Leadership, gestion d'équipe" },
];

const Competences = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Compétences"
        subtitle="Compétences techniques et transversales développées durant ma formation BTS SIO et mon expérience professionnelle."
        backgroundVideo={competencesBgVideo}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                Langages de programmation
              </h2>
              <ul className="space-y-3">
                {technicalSkills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Database Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Bases de données
              </h2>
              <ul className="space-y-3">
                {dbSkills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Security Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Sécurité informatique
              </h2>
              <ul className="space-y-3">
                {securitySkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" />
                Outils de développement
              </h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>

          {/* BTS SIO Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-card rounded-2xl p-8"
          >
            <h2 className="font-display text-xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Compétences du référentiel BTS SIO
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold mb-4 text-primary">
                  Bloc 1 : Support et mise à disposition de services informatiques
                </h3>
                <ul className="space-y-2">
                  {btsSioBloc1.map((comp, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-4 text-primary">
                  Bloc 2 : Option SLAM
                </h3>
                <ul className="space-y-2">
                  {btsSioBloc2.map((comp, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-card rounded-2xl p-8"
          >
            <h2 className="font-display text-xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Compétences transversales
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-secondary/50">
                  <div className="font-semibold mb-1">{item.skill}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Competences;
