import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DigitalIdPage from "./pages/DigitalIdPage";
import SafetyPage from "./pages/SafetyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/digital-id" element={<DigitalIdPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/travel-guide" element={<HomePage />} />
            <Route path="/emergency" element={<SafetyPage />} />
            <Route path="/transport" element={<HomePage />} />
            <Route path="/reviews" element={<HomePage />} />
            <Route path="/support" element={<HomePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
