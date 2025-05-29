// import React from 'react';

// import './App.css';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
// import DashboardMainContent from './components/Dashboard/DashboardMainContent';

// function App() {
//   return (
//     <div className="app">
//       <Header/>
//       <div className="app-body">
//         <Sidebar/>
//         <DashboardMainContent/>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardContent from './components/Dashboard/DashboardMainContent';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="main-content">
        <Header/>
        <DashboardContent/>
      </div>
    </div>
  );
}

export default App;