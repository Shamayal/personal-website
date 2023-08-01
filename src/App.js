import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import ReactDOM from 'react-dom'

import NavigationBar from "./components/NavigationBar";
import HomePage from "./routes/HomePage";
import Footer from "./components/Footer";

import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from "./components/Contact";

function App() {
  return (

    <main>

      <Router>

        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
         
          <Route path="*" element={<h1>404 Page Not Found</h1>} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </Router>

    </main>
  );
}

export default App;
