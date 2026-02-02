import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import PlansPage from "./pages/PlansPage";
import LoginPage from "./pages/LoginPage";
import CreateListingPage from "./pages/CreateListingPage";
import UserDashboard from "./pages/dashboard/UserDashboard";
import MyListingsPage from "./pages/dashboard/MyListingsPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AgencyDashboard from "./pages/agency/AgencyDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/imoveis" element={<CategoryPage />} />
          <Route path="/anuncio/:id" element={<ListingDetailPage />} />
          <Route path="/planos" element={<PlansPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<LoginPage />} />
          <Route path="/anunciar" element={<CreateListingPage />} />
          
          {/* User Dashboard */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/anuncios" element={<MyListingsPage />} />
          <Route path="/dashboard/criar-anuncio" element={<CreateListingPage />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/usuarios" element={<AdminUsersPage />} />
          
          {/* Agency Dashboard */}
          <Route path="/imobiliaria" element={<AgencyDashboard />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
