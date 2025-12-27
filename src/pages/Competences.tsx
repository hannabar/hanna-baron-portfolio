import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SkillBar from "@/components/SkillBar";
import { motion } from "framer-motion";
import { Code, Database, Shield, Wrench, Users, BookOpen } from "lucide-react";

const technicalSkills = [
  { name: "Python", level: 90 },
  { name: "PHP", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "SQL", level: 85 },
  { name: "HTML/CSS", level: 90 },
];

const dbSkills = [
  { name: "MySQL / MariaDB", level: 85 },
  { name: "Requêtes SQL (JOIN, INSERT...)", level: 85 },
  { name: "Conception MCD/MLD", level: 80 },
  { name: "Administration BD", level: 70 },
];

const securitySkills = [
  "Analyse des incidents de sécurité",
  "Tests d'intégration sécurisés",
  "Prévention des attaques (SQL injection, XSS, CSRF)",
  "Conformité aux standards de sécurité",
  "Gestion des habilitations et contrôle d'accès",
  "Analyse des logs",
];

const tools = ["Git / GitHub", "VS Code / PHPStorm", "XAMPP / WAMP"];

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

const algoSkills = [
  "Structures de données : listes, piles, arbres binaires",
  "Algorithmes sur arbres binaires",
  "Méthode « diviser pour régner »",
  "Récursivité",
  "Gestion et correction de bugs",
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
      <Header />
      
      <PageHeader
        badge="Savoir-faire"
        title="Compétences"
        subtitle="Compétences techniques et transversales développées durant ma formation BTS SIO et mes expériences professionnelles."
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
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
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
              {dbSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
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

              <h3 className="font-display font-semibold mt-8 mb-4">Connaissances algorithmiques (Bac NSI)</h3>
              <ul className="space-y-2">
                {algoSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    {skill}
                  </li>
                ))}
              </ul>
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
                <h3 className="font-display font-semibold mb-4 text-accent">
                  Bloc 2 : Option SLAM
                </h3>
                <ul className="space-y-2">
                  {btsSioBloc2.map((comp, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
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
