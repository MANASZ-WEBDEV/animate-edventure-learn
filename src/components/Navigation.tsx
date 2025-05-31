
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, BookOpen, FileText, Users, Settings, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'lecture', label: 'Lectures', icon: BookOpen },
    { id: 'quiz', label: 'Quiz', icon: FileText },
    { id: 'studyplan', label: 'Study Plan', icon: Users },
    { id: 'map', label: 'Progress Map', icon: Settings },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variant="outline"
          size="sm"
          className="glass-morphism"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Desktop sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 glass-morphism flex-col p-6 z-40">
        <div className="mb-8">
          <h1 className="text-2xl font-bold gradient-text">Edventure</h1>
          <p className="text-sm text-muted-foreground">Learn. Explore. Achieve.</p>
        </div>
        
        <div className="space-y-2 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                variant={currentPage === item.id ? "default" : "ghost"}
                className="w-full justify-start gap-3 h-12 transition-all duration-200 hover:scale-105"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Mobile sidebar */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <nav className="absolute left-0 top-0 h-full w-64 glass-morphism flex-col p-6">
            <div className="mb-8 mt-12">
              <h1 className="text-2xl font-bold gradient-text">Edventure</h1>
              <p className="text-sm text-muted-foreground">Learn. Explore. Achieve.</p>
            </div>
            
            <div className="space-y-2 flex-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    className="w-full justify-start gap-3 h-12"
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
