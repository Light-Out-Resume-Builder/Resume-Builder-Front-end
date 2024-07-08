import Header from "./components/Nav/Navbar.jsx"
import Home from "./Pages/Home/home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
  </Router>
  );
}

export default App
