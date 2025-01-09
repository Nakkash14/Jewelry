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
import HomePage from './components/HomePage.js'; // Assuming HomePage.js is in the same folder
import SignIn from './Auth/Sign_In'; // Adjust the path based on where your components are located
import SignUp from './Auth/Sign_Up';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the Routes for the pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;