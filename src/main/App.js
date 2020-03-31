// import '../common/template/Dependencies';
import React from 'react';
import '../common/template/Dependencies'; 

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import Routes from './Routes';

export default props => (
  <div>
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes/>
    </div>
    <Footer />
  </div>
)




// import React from 'react';
// import logo from '../logo.svg';
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
