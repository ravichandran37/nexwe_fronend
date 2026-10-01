
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import SecurityServicesPage from './pages/SecurityServicesPage';
import ProcessPage from './pages/ProcessPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import { CursorProvider } from './context/CursorContext';
import { ScheduleModalProvider } from './context/ScheduleModalContext';
import ScheduleCallModal from './components/ScheduleModal/ScheduleCallModal';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CursorProvider>
      <ScheduleModalProvider>
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
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/web-development" element={<WebDevelopmentPage />} />
                <Route path="/services/app-development" element={<AppDevelopmentPage />} />
                <Route path="/services/security" element={<SecurityServicesPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <ScheduleCallModal />
        </BrowserRouter>
      </ScheduleModalProvider>
    </CursorProvider>
  );
}

export default App;
