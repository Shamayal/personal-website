import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import ReactDOM from 'react-dom'

import NavigationBar from "./components/NavigationBar.jsx"
import HomePage from "./routes/HomePage.jsx"

function App() {
  return (
    <main className="column">

      <Router>

        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

         
          <Route path="*" element={<h1>404 Page Not Found</h1>} />

        </Routes>
        {/* <Footer /> */}
      </Router>

    </main>
  );
}

export default App;
