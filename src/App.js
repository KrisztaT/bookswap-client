import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BorrowingPage from "./pages/BorrowingPage";
import LendingPage from "./pages/LendingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/borrowing" element={<BorrowingPage />} />
        <Route path="/lending" element={<LendingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
