import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Stethoscope, Building, FileText, Code, TestTube, Shield } from "lucide-react";

const ateliers = [
  {
    title: "Medicine App",
    icon: Stethoscope,
    context: "Application de gestion médicale pour digitaliser le secteur médical.",
    objectives: [
      "Gestion des patients et dossiers médicaux",
      "Suivi des consultations",
      "Gestion des prescriptions",
      "Planning des rendez-vous",
    ],
    conception: [
      "Cahier des charges détaillé",
      "Diagrammes UML (cas d'utilisation, classes, séquence)",
      "Modèle conceptuel de données (MCD)",
      "Maquettes wireframes et mockups",
    ],
    technologies: ["Architecture MVC", "API REST", "Base de données relationnelle"],
    competences: [
      "Conception et modélisation UML",
      "Développement full-stack",
      "Gestion de projet",
      "Sécurité des données médicales (RGPD)",
    ],
  },
  {
    title: "GSB - Gestion Service des Bénéfices",
    icon: Building,
    context: "Application de gestion pour laboratoire pharmaceutique, destinée à la gestion des frais des visiteurs médicaux.",
    objectives: [
      "Saisie des fiches de frais",
      "Validation par les comptables",
      "Calcul et remboursement automatisé",
      "Reporting et statistiques",
    ],
    conception: [
      "Analyse des besoins métier",
      "Diagrammes UML complets",
      "Base de données (MCD/MLD)",
      "Maquettes interface utilisateur",
    ],
    technologies: ["Application métier", "Multi-profils utilisateurs", "Workflows automatisés"],
    competences: [
      "Analyse des besoins métier",
      "Développement d'applications métier",
      "Gestion des workflows",
      "Sécurisation des accès",
    ],
  },
];

const Ateliers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        badge="Projets Professionnels Encadrés"
        title="Ateliers Professionnels"
        subtitle="2 PPE complets avec analyse, conception, développement et documentation technique."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {ateliers.map((atelier, index) => (
              <motion.div
                key={atelier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 border-b border-border">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <atelier.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">{atelier.title}</h2>
                      <p className="text-muted-foreground">{atelier.context}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Objectifs
                    </h3>
                    <ul className="space-y-2">
                      {atelier.objectives.map((obj, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Conception
                    </h3>
                    <ul className="space-y-2">
                      {atelier.conception.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <TestTube className="w-4 h-4 text-primary" />
                      Technologies
                    </h3>
                    <ul className="space-y-2">
                      {atelier.technologies.map((tech, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Compétences
                    </h3>
                    <ul className="space-y-2">
                      {atelier.competences.map((comp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                          {comp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ateliers;
