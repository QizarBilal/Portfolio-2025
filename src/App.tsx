import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Loader from './components/Loader';
import { ThemeToggle } from './components/ThemeToggle';
import { VirtualAvatar } from './components/VirtualAvatar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Ensure minimum loading time for the animation
    const minLoadTime = setTimeout(() => {
      // Check if document is ready
      if (document.readyState === 'complete') {
        handleLoadingComplete();
      } else {
        window.addEventListener('load', handleLoadingComplete);
      }
    }, 7500); // Minimum 7.5 seconds to show the loader (7s loading + 0.5s completion)

    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener('load', handleLoadingComplete);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to allow loader exit animation
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <ThemeProvider>
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      
      {showContent && (
        <Router>
          <div className="min-h-screen bg-bg-primary text-text-primary">
            <ThemeToggle />
            
            <main>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            
            {/* Virtual Avatar Chatbot */}
            <VirtualAvatar />
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
