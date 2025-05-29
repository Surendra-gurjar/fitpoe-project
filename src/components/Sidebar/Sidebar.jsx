// import React from 'react';
// import { navigationData } from '../../data/navigation';
// import './Sidebar.css';
// import { 
//   FiHome, 
//   FiClock, 
//   FiCalendar, 
//   FiClipboard, 
//   FiBarChart2, 
//   FiActivity,
//   FiMessageSquare,
//   FiHelpCircle,
//   FiSettings
// } from 'react-icons/fi';

// const iconComponents = {
//   dashboard: FiHome,
//   history: FiClock,
//   calendar: FiCalendar,
//   appointments: FiClipboard,
//   statistics: FiBarChart2,
//   tests: FiActivity,
//   chat: FiMessageSquare,
//   support: FiHelpCircle,
//   setting: FiSettings
// };

// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-content">
//         <h3 className="sidebar-heading">General</h3>
//         <nav className="sidebar-nav">
//           <ul className="nav-list">
//             {navigationData.map((item) => {
//               const Icon = iconComponents[item.icon];
//               return (
//                 <li key={item.id} className="nav-item">
//                   <a href="#" className="nav-link">
//                     <Icon className="nav-icon" />
//                     <span className="nav-text">{item.text}</span>
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;



import React from 'react';
import './Sidebar.css';
import { FiHome, FiClock, FiCalendar, FiClipboard, FiBarChart2, FiTool, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Health<strong>care. </strong></h1>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3>General</h3>
          <ul>
            <li className="active"><FiHome /> Dashboard</li>
            <li><FiClock /> History</li>
            <li><FiCalendar /> Calendar</li>
            <li><FiClipboard /> Appointments</li>
            <li><FiBarChart2 /> Statistics</li>
            <li> Tools</li>
            <li><FiMessageSquare /> Chat</li>
            <li><FiHelpCircle /> Support</li>
          </ul>
          
        </div>
       
      </nav>
      
    </aside>
  );
}

export default Sidebar;