import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./component/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
