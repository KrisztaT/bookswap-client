import "bootstrap/dist/css/bootstrap.min.css";    
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <NavBar />
        <HomePage />
        <Footer />
    </div>
  );
}

export default App;
