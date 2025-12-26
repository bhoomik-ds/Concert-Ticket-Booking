import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FanPitStanding from "./components/FanPitStanding";
import PlatinumSeating from "./components/PlatinumSeating";
import GeneralStanding from "./components/GeneralStanding";
import EventInfo from "./components/EventInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Banner /><EventInfo /></>} />
        <Route path="/FanPitStanding" element={<FanPitStanding />} />
        <Route path="/PlatinumSeating" element={<PlatinumSeating />} />
        <Route path="/GeneralStanding" element={<GeneralStanding />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
