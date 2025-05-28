import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import LandingSection from "./components/landing-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import { AlertProvider } from "./context/alert-context";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
