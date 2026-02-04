import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import OKDOM from "./pages/OKDOM";
import TravauxPratiques from "./pages/TravauxPratiques";
import Ateliers from "./pages/Ateliers";
import Competences from "./pages/Competences";
import Veille from "./pages/Veille";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// TP Detail Pages
import SweetMemory from "./pages/tp/SweetMemory";
import MachineASous from "./pages/tp/MachineASous";
import CataloguePaniers from "./pages/tp/CataloguePaniers";
import MiniBlog from "./pages/tp/MiniBlog";
import Galerie from "./pages/tp/Galerie";
import Cyber from "./pages/tp/Cyber";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/okdom" element={<OKDOM />} />
            <Route path="/tp" element={<TravauxPratiques />} />
            <Route path="/tp/sweet-memory" element={<SweetMemory />} />
            <Route path="/tp/machine-a-sous" element={<MachineASous />} />
            <Route path="/tp/catalogue-paniers" element={<CataloguePaniers />} />
            <Route path="/tp/mini-blog" element={<MiniBlog />} />
            <Route path="/tp/galerie" element={<Galerie />} />
            <Route path="/tp/cyber" element={<Cyber />} />
            <Route path="/ateliers" element={<Ateliers />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
