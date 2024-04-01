// import './App.css';
// import NavBar from './components/NavBar';
// import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import  AboutUs  from "./pages/AboutUs/AboutUs"
// import  Community  from "./pages/Community/Community"
// import  Home  from "./pages/Home/Home";
// import Signup from "./components/SignUp/SignUp";
// import Login from "./components/Login/Login";
// function App() {
//   // const [project, setProject] = useState([]);

//   // const sectionRefs = [
//   //   useRef(null),
//   //   useRef(null),
//   //   useRef(null)
//   // ];

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const currentScroll = window.scrollY;
//   //     const windowHeight = window.innerHeight;

//   //     const currentSectionIndex = Math.floor((currentScroll + windowHeight / 2) / windowHeight);

//   //     if (sectionRefs[currentSectionIndex] && sectionRefs[currentSectionIndex].current) {
//   //       sectionRefs[currentSectionIndex].current.scrollIntoView({ behavior: 'smooth' });
//   //     }
//   //   };

//   //   window.addEventListener('scroll', handleScroll);

//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, [sectionRefs]);
// const user = localStorage.getItem("token");
//   return (
//     <div className="App">
//       <Router>
     
//         <Routes>
//           {user && <Route path="/" exact element={<Home />}></Route>}
//           <Route path="/Community" element={<Community />}></Route>
//           <Route path="/AboutUs" element={<AboutUs />}></Route>
//           <Route path="/signup" exact element={<Signup />}></Route>
//           <Route path="/login" exact element={<Login />}></Route>
//           <Route path='/' exact element={<Navigate replace to ="/login"/>} ></Route>
//         </Routes>
 


//       </Router>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AboutUs from "./pages/AboutUs/AboutUs"
import Community from "./pages/Community/Community"
import Home from "./pages/Home/Home";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { useEffect, useState } from 'react'; // Import useEffect and useState

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state to track login status

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
