import { ReactNode, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { User } from '@/data/mockData';
import DashboardSidebar from './DashboardSidebar';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
  user: User;
  title: string;
}

const DashboardLayout = ({ children, user, title }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="font-display font-bold text-lg">Plantão</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-muted">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground font-bold">
                  {user.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar user={user} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <>
            <div 
              className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="fixed left-0 top-0 h-full z-50 lg:hidden animate-slide-in-right">
              <div className="relative">
                <DashboardSidebar user={user} />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Desktop Header */}
          <header className="hidden lg:block bg-card border-b border-border px-8 py-6">
            <div className="flex items-center justify-between">
              <h1 className="font-display font-bold text-2xl text-foreground">{title}</h1>
              <div className="flex items-center gap-4">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Voltar ao site
                </Link>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-4 lg:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
