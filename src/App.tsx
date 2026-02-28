import { useState, useRef, useEffect } from 'react';
import { PaymentProvider } from '@/context/PaymentContext';
import { EmojiEffects } from '@/components/effects/EmojiEffects';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Networks } from '@/sections/Networks';
import { Payments } from '@/sections/Payments';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'networks', 'payments'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PaymentProvider>
      <div ref={mainRef} className="min-h-screen bg-background text-foreground">
        {/* Emoji Effects */}
        <EmojiEffects />

        {/* Navigation */}
        <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

        {/* Main Content */}
        <main>
          <Hero onNavigate={handleNavigate} />
          <Networks />
          <Payments />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PaymentProvider>
  );
}

export default App;
