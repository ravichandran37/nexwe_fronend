
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import { CursorProvider } from './context/CursorContext';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CursorProvider>
      <BrowserRouter>
        <ScrollToTop />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 origin-left z-100"
          style={{ scaleX, background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
        />
        <div className="app flex flex-col min-h-screen bg-(--bg) text-(--text) font-sans relative overflow-x-hidden">
          <Navbar />
          <main className="grow pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CursorProvider>
  );
}

export default App;
