import ProfileFooter from './components/layout/ProfileFooter';
import ProfileLoadingScreen from './components/layout/ProfileLoadingScreen';
import ProfileNavbarClean from './components/layout/ProfileNavbarClean';
import ProfileScrollProgress from './components/layout/ProfileScrollProgress';
import ProfileAbout from './components/sections/ProfileAbout';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import ProfileEducationSection from './components/sections/ProfileEducationSection';
import ProfileHero from './components/sections/ProfileHero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { useDarkMode } from './hooks/useDarkMode';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    // Simulate loading time to show the cool animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ProfileLoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <div className="noise-overlay relative flex min-h-screen flex-col selection:bg-primary-500 selection:text-white">
          <ProfileScrollProgress />
          <ProfileNavbarClean isDark={isDark} toggleDark={toggleDark} />

          <main className="grow">
            <ProfileHero />
            <ProfileAbout />
            <Skills />
            <Projects />
            <ProfileEducationSection />
            <Certificates />
            <Contact />
          </main>

          <ProfileFooter />
        </div>
      )}
    </>
  );
}

export default App;
