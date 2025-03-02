import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./component/Header";
import HomePage from "./pages/HomePage";
import HireComponent from "./component/HireComponent";
import Footer from "./component/Footer";
import Signup from "./component/Signup";
import Success from "./component/Success";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hire" element={<HireComponent />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
