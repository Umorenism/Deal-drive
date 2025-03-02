// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";

// import Navbar from "./component/Header";
// import HomePage from "./pages/HomePage";
// import HireComponent from "./component/HireComponent";
// import Footer from "./component/Footer";
// import Signup from "./component/Signup";
// import Success from "./component/Success";
// import ScrollToTop from "./component/ScrollTop";
// import ChatComponent from "./component/Chat";

// function App() {
//   return (
//     <BrowserRouter>
//     <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/hire" element={<HireComponent />} />
//         <Route path="/signup" element={<Signup/>}/>
//         <Route path="/success" element={<Success/>}/>
//         <Route path="/chat" element={<ChatComponent/>}/>
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

import Navbar from "./component/Header";
import HomePage from "./pages/HomePage";
import HireComponent from "./component/HireComponent";
import Footer from "./component/Footer";
import Signup from "./component/Signup";
import Success from "./component/Success";
import ScrollToTop from "./component/ScrollTop";
import ChatComponent from "./component/Chat";

const AppLayout = () => {
  const location = useLocation();

  // Define paths where Navbar and Footer should be hidden
  const hideLayoutPaths = ["/chat"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!shouldHideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hire" element={<HireComponent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/chat" element={<ChatComponent />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
