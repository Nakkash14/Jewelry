// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/////////////////////////////////////////////////////////

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router

// Import the components for the pages
import HomePage from './components/HomePage.jsx'; // Import Home Page
import SignIn from './Auth/Sign_In'; // Import Sign In
import SignUp from './Auth/Sign_Up'; // Import Sign Up
import UserProfile from './User/UserProfile'; // Import User Profile
import EditProfile from './User/EditProfile.jsx';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer.jsx'; // Import Footer
import Cart from './Cart/Cart';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      {/* Navbar will appear on every page */}
      <Navbar />
      
      <Routes>
        {/* Define the Routes for the pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;