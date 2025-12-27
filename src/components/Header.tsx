import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import profileImage from "@/assets/hanna-profile.jpeg";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "OKDOM", path: "/okdom" },
  { name: "Travaux Pratiques", path: "/tp" },
  { name: "Ateliers", path: "/ateliers" },
  { name: "Compétences", path: "/competences" },
  { name: "Veille Tech", path: "/veille" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-20 w-full pt-8 px-6"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Profile Photo */}
        <Link to="/" className="group mb-2">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-colors duration-500" />
            {/* Photo container */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 shadow-xl">
              <img
                src={profileImage}
                alt="Hanna Baron"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-1 bg-card/30 backdrop-blur-xl rounded-full px-2 py-2 border border-border/30">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-foreground" />
            ) : (
              <Moon size={18} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Link to="/" className="font-display font-bold text-xl gradient-text">HB</Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-card/50 backdrop-blur-xl border border-border/30"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-foreground" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-card/50 backdrop-blur-xl border border-border/30"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-full overflow-hidden"
            >
              <div className="bg-card/50 backdrop-blur-xl rounded-2xl border border-border/30 p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
