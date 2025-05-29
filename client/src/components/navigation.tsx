import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import yumiaLogo from "@assets/097b012a-439f-4a25-80a7-51e6c3082c9fdanilo-costa.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "Início", href: "home" },
    { label: "Serviços", href: "services" },
    { label: "Eco emIA", href: "methodology" },
    { label: "Sobre", href: "about" },
    { label: "Contato", href: "contact" },
  ];

  return (
    <nav className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src={yumiaLogo} 
                alt="YumIA Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-yum-primary">YumIA</h1>
                <p className="text-xs text-yum-gray">Inteligência Artificial Estratégica</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-yum-gray hover:text-yum-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Agendar Consultoria
            </Button>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-yum-gray hover:text-yum-primary transition-colors duration-300 py-2 font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-primary text-white hover:opacity-90 mt-4"
                  >
                    Agendar Consultoria
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
