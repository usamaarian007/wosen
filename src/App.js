import "./App.css";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/contact/Contact";
import Partical from "./components/partical";

function App() {
  return (
    <div  className="pointer-events-auto" >
<Partical/>

      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
      <Route path="/contact" element={<Contact />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
</div>

   
  );
}

export default App;
