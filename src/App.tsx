import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import PlansPage from "./pages/PlansPage";
import LoginPage from "./pages/LoginPage";
import CreateListingPage from "./pages/CreateListingPage";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";
import AgenciesPage from "./pages/AgenciesPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import VeiculosPage from "./pages/VeiculosPage";
import EletronicosPage from "./pages/EletronicosPage";
import MoveisPage from "./pages/MoveisPage";
import EmpregoPage from "./pages/EmpregoPage";
import ServicosPage from "./pages/ServicosPage";
import SelectPlanPage from "./pages/SelectPlanPage";
import UserDashboard from "./pages/dashboard/UserDashboardNew";
import MyListingsPage from "./pages/dashboard/MyListingsPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminListingsPage from "./pages/admin/AdminListingsPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminPlansPage from "./pages/admin/AdminPlansPage";
import AdminReportsPage from "./pages/admin/AdminReportsPage";
import AdminAgenciesPage from "./pages/admin/AdminAgenciesPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import AgencyDashboard from "./pages/agency/AgencyDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            <Route path="/veiculos" element={<VeiculosPage />} />
            <Route path="/eletronicos" element={<EletronicosPage />} />
            <Route path="/moveis" element={<MoveisPage />} />
            <Route path="/empregos" element={<EmpregoPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/anuncio/:id" element={<ListingDetailPage />} />
            <Route path="/planos" element={<PlansPage />} />
            <Route path="/ajuda" element={<HelpPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/imobiliarias" element={<AgenciesPage />} />
            <Route path="/termos" element={<TermsPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            
            {/* Select Plan - Protected */}
            <Route 
              path="/select-plan" 
              element={
                <ProtectedRoute>
                  <SelectPlanPage />
                </ProtectedRoute>
              } 
            />
            
            {/* User Dashboard - Protected */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requiredType="user">
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/anuncios" 
              element={
                <ProtectedRoute requiredType="user">
                  <MyListingsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/criar-anuncio" 
              element={
                <ProtectedRoute requiredType="user">
                  <CreateListingPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Dashboard - Protected */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/usuarios" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminUsersPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/anuncios" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminListingsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/categorias" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminCategoriesPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/planos" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminPlansPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/relatorios" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminReportsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/imobiliarias" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminAgenciesPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/configuracoes" 
              element={
                <ProtectedRoute requiredType="admin">
                  <AdminSettingsPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Agency Dashboard - Protected */}
            <Route 
              path="/imobiliaria" 
              element={
                <ProtectedRoute requiredType="agency">
                  <AgencyDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Create Listing - Any authenticated user */}
            <Route 
              path="/anunciar" 
              element={
                <ProtectedRoute>
                  <CreateListingPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
