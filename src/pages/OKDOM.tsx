import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, Users, Code, CheckCircle } from "lucide-react";

const OKDOM = () => {
  const missions = [
    "Développement et maintenance d'applications web",
    "Participation aux réunions d'équipe et sprints Agile",
    "Tests et débogage des fonctionnalités",
    "Documentation technique des projets",
    "Collaboration avec l'équipe de développement",
  ];

  const technologies = [
    "PHP", "JavaScript", "MySQL", "HTML/CSS", "Git", "VS Code"
  ];

  const skills = [
    { category: "Techniques", items: ["Développement web full-stack", "Gestion de bases de données", "Versionning Git"] },
    { category: "Transversales", items: ["Travail en équipe", "Autonomie", "Communication", "Gestion du temps"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        badge="Expérience professionnelle"
        title="Alternance chez OKDOM"
        subtitle="Mon expérience en entreprise dans le cadre de mon BTS SIO, où je développe mes compétences techniques et professionnelles."
      />

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2">OKDOM</h2>
                    <p className="text-muted-foreground">
                      Entreprise spécialisée dans les solutions logicielles pour la gestion immobilière.
                      OKDOM développe des outils innovants pour faciliter la gestion des biens et des services.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">2024 - 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Paris, France</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Équipe Tech</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-4">Missions réalisées</h3>
                <ul className="space-y-3">
                  {missions.map((mission, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{mission}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4 flex items-center gap-3">
                  <Code className="w-5 h-5 text-primary" />
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {skills.map((skill, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-semibold mb-4">
                    Compétences {skill.category.toLowerCase()}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BTS SIO Info */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="font-display text-2xl font-bold mb-6 gradient-text">
              Le BTS SIO Option SLAM
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Le BTS SIO (Services Informatiques aux Organisations) a été créé en 2011, 
                anciennement connu sous le nom de BTS IG (Informatique de Gestion).
              </p>
              <p>
                L'option <strong className="text-foreground">SLAM</strong> (Solutions Logicielles et Applications Métiers) 
                est orientée vers le développement de logiciels personnalisés et de sites web.
              </p>
              <p>
                Le titulaire du diplôme intervient dans la définition des spécifications techniques, 
                la réalisation de solutions applicatives, la gestion du patrimoine applicatif et 
                la formation des utilisateurs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OKDOM;
