import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdonate from "./components/user/Userdonate";
import Userhome from "./components/user/Userhome";
import Userresults from "./components/user/Userresults";
import Userresultone from "./components/user/Userresultone";
import Userupdate from "./components/user/Userupdate";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Userhome />} />
          <Route path="/user/home" element={<Userhome />} />
          <Route path="/user/donate" element={<Userdonate />} />
          <Route path="/user/results" element={<Userresults />} />
          <Route path="/user/resultone" element={<Userresultone />} />
          <Route path="/user/update" element={<Userupdate />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
