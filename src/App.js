import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import { CourseHome } from "./components/allcourses/CourseHome";
import Team from "./components/teacher/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Activities from "./components/activites/Activities";
import Chatbot from "./components/chatbot/Chatbot";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/teacher" element={<Team />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
