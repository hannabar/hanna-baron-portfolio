import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Brain, Scan, Fingerprint, Shield, AlertTriangle, Scale, Globe, Mail, Bell, Users } from "lucide-react";
import dnaVideo from "@/assets/dna-animation.mp4";
import fingerprintVideo from "@/assets/fingerprint-scan.mp4";
import veilleBgVideo from "@/assets/veille-bg-animated.mp4";

const veilleSujets = [
  {
    title: "Imagerie médicale et Intelligence Artificielle",
    icon: Brain,
    description: "L'intelligence artificielle révolutionne le diagnostic médical grâce à l'analyse automatisée d'images, offrant aux médecins une aide précieuse pour détecter des pathologies plus rapidement et avec plus de précision.",
    sections: [
      {
        title: "Technologies actuelles",
        icon: Scan,
        items: [
          "Deep Learning et réseaux de neurones convolutifs (CNN)",
          "Détection automatique de pathologies",
          "Segmentation d'images médicales",
          "Radiologie assistée par IA",
        ],
      },
      {
        title: "Applications concrètes",
        icon: Brain,
        items: [
          "Détection précoce du cancer du sein",
          "Analyse d'IRM et scanners cérébraux",
          "Détection de la rétinopathie diabétique",
          "Analyse de radiographies pulmonaires",
        ],
      },
      {
        title: "Enjeux éthiques",
        icon: Scale,
        items: [
          "Fiabilité et limites des diagnostics automatisés",
          "Responsabilité médicale en cas d'erreur",
          "Protection des données de santé (RGPD)",
          "Certification des dispositifs médicaux (marquage CE)",
        ],
      },
    ],
    perspectives: [
      "Personnalisation des traitements",
      "Médecine prédictive",
      "Télémédecine augmentée",
    ],
  },
  {
    title: "Données biométriques",
    icon: Fingerprint,
    description: "L'utilisation croissante des données biométriques dans l'authentification et la sécurité soulève des enjeux majeurs en 2025.",
    sections: [
      {
        title: "Technologies",
        icon: Fingerprint,
        items: [
          "Reconnaissance faciale (Face ID, surveillance)",
          "Empreintes digitales (smartphones, paiement)",
          "Reconnaissance vocale (assistants, banque)",
          "Analyse de l'iris et rétine",
        ],
      },
      {
        title: "Risques et problématiques",
        icon: AlertTriangle,
        items: [
          "Piratage et usurpation d'identité",
          "Surveillance de masse et traçage",
          "Deepfakes et failles de sécurité",
          "Discrimination algorithmique (biais)",
          "Irrévocabilité : une donnée biométrique volée ne peut pas être changée contrairement à un mot de passe",
        ],
      },
      {
        title: "Cadre réglementaire",
        icon: Shield,
        items: [
          "RGPD Article 9 : données biométriques classées données sensibles",
          "Loi sur l'IA (EU AI Act) : interdiction de la reconnaissance faciale en temps réel depuis février 2025",
          "Recommandations CNIL : interdiction du badgeage biométrique au travail",
          "Nouveau système EES aux frontières européennes depuis octobre 2025 imposant la collecte d'empreintes et photo du visage pour tous les voyageurs non-européens",
        ],
      },
    ],
    perspectives: [
      "Biométrie comportementale",
      "Authentification multimodale",
      "Standards de sécurité renforcés",
    ],
  },
];

const Veille = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title="Veille Technologique"
        subtitle="Une démarche active de veille pour rester informée des innovations et enjeux du secteur informatique."
        backgroundVideo={veilleBgVideo}
      />

      {/* Comment j'effectue ma veille */}
      <section className="py-12 px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="font-display text-xl font-bold mb-2">Comment j'effectue ma veille</h2>
            <p className="text-muted-foreground mb-8">
              La veille technologique est essentielle dans le secteur informatique pour anticiper 
              les évolutions et adapter ses compétences. Voici les outils et sources que j'utilise au quotidien.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sites — IA médicale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">Sites — IA médicale</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Futura Sciences — futura-sciences.com",
                    "01net.com",
                    "Numerama.com",
                    "Le Monde (Tech) — lemonde.fr/pixels",
                    "Sciences et Avenir — sciencesetavenir.fr",
                  ].map((site, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {site}
                    </li>
                  ))}
                </ul>

                <h4 className="font-display font-semibold text-sm mt-6 mb-3 text-primary/80">Sites — Biométrie / RGPD</h4>
                <ul className="space-y-2">
                  {[
                    "CNIL.fr — site officiel",
                    "Nextinpact.com",
                    "L'Usine Digitale — usine-digitale.fr",
                    "Le Monde Informatique — lemondeinformatique.fr",
                  ].map((site, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {site}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">Newsletters</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "L'Usine Digitale — hebdomadaire tech",
                    "Numerama Règle 30 — vie privée et données",
                    "CNIL Newsletter — actualités RGPD",
                  ].map((nl, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {nl}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Alertes Google */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">Alertes Google</h3>
                </div>
                <div className="space-y-2">
                  {[
                    "IA imagerie médicale",
                    "biométrie données personnelles",
                    "reconnaissance faciale France",
                  ].map((alert, i) => (
                    <span key={i} className="inline-block text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium mr-1 mb-1">
                      {alert}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Réseaux sociaux — kept as before */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm">Réseaux sociaux</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "LinkedIn : experts IA santé",
                    "Twitter/X : @CNIL, @MIT_CSAIL",
                  ].map((rs, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {rs}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="space-y-12">
            {veilleSujets.map((sujet, index) => (
              <motion.div
                key={sujet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden relative"
              >
                {/* Video background for Imagerie médicale */}
                {index === 0 && (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={dnaVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
                  </>
                )}
                {/* Image background for Données biométriques */}
                {index === 1 && (
                  <>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={fingerprintVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
                  </>
                )}
                {/* Header */}
                <div className="relative z-10 p-8 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <sujet.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">{sujet.title}</h2>
                      <p className="text-muted-foreground">{sujet.description}</p>
                    </div>
                  </div>
                </div>

                {/* Sections */}
                <div className="relative z-10 grid md:grid-cols-3 gap-6 p-8">
                  {sujet.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                        <section.icon className="w-4 h-4 text-primary" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Perspectives */}
                <div className="relative z-10 px-8 pb-8">
                  <h3 className="font-display font-semibold mb-4">Perspectives d'avenir</h3>
                  <div className="flex flex-wrap gap-2">
                    {sujet.perspectives.map((persp, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                      >
                        {persp}
                      </span>
                    ))}
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

export default Veille;
