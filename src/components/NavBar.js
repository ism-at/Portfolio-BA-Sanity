//---------------This make the BG Fix and some nav responsive---------------------//
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";


// import { FaBars, FaTimes } from "react-icons/fa";
// import { useRef } from "react";
// import "../index.css";

// export default function NavBar(){


//     return(
//         <header className="bg-gray-900 md:px-10"> 
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> 
//                 <nav  className="flex flex-wrap items-center text-base justify-center md:mr-auto">
//                     <NavLink to="/" exact 
//                     activeClassName="text-white"
//                     className="mr-5 hover:text-gray-500 text-5xl font-bold cursive tracking-widest text-red-100">
//                         Ismail
//                     </NavLink>

//                     <NavLink to="/Post" 
//                     activeClassName="text-red-100 bg-red-700"
//                     className="mr-5 hover:text-gray-500 text-red-100">
//                         Blog 
//                     </NavLink>

//                     <NavLink to="/Project" 
//                     activeClassName="text-red-100 bg-red-700"
//                     className="mr-5 hover:text-gray-500 text-red-100">
//                         Projects
//                     </NavLink>

//                     <NavLink to="/About" 
//                     activeClassName="text-red-100 bg-red-700"
//                     className="mr-5 hover:text-gray-500 text-red-100">
//                         About Me!
//                     </NavLink>
//                 </nav>

//                 <div className="inline-flex ml-auto">
//                     <SocialIcon
//                     url="https://github.com/ism85" 
//                     className="mr-4" 
//                     target="_blank" 
//                     bgColor="#ffffff"
//                     style={{height:35, width: 35}}
//                     network="github"
//                     />

//                     <SocialIcon
//                     url="mailto:alagele.ismail@gmail.com"
//                     className="mr-4" 
//                     target="_blank" 
//                     bgColor="#ffffff"
//                     style={{height:35, width: 35}}
//                     network="email"
//                     />

//                     <SocialIcon
//                     url="tel:+4368860866874"
//                     className="mr-4" 
//                     target="_blank" 
//                     bgColor="#ffffff"
//                     style={{height:35, width: 35}}
//                     network="whatsapp"
//                     />
//                 </div>
//             </div>
//         </header>
//     )
// };

//------------ This is after I installed npm install react-responsive ---------------//

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="bg-gray-900 md:px-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/" exact
          activeClassName="text-white"
          className="mr-5 hover:text-gray-500 text-5xl font-bold cursive tracking-widest text-red-100">
          Ismail
        </NavLink>
        <button onClick={handleToggle} className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none">
          {navbarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`md:flex flex-grow items-center ${navbarOpen ? ' block' : ' hidden'}`} onClick={closeMenu}>
          <nav className="mobile flex flex-col flex-wrap md:flex-row justify-center md:justify-between text-base md:ml-auto md:mr-auto">
            <NavLink to="/Post"
              activeClassName="text-red-100 bg-red-700"
              className="mt-4 md:mt-0 mr-5 hover:text-gray-500 text-red-100">
              Blog
            </NavLink>

            <NavLink to="/Project"
              activeClassName="text-red-100 bg-red-700"
              className="mt-4 md:mt-0 mr-5 hover:text-gray-500 text-red-100">
              Projects
            </NavLink>

            <NavLink to="/About"
              activeClassName="text-red-100 bg-red-700"
              className="mt-4 md:mt-0 mr-5 hover:text-gray-500 text-red-100">
              About Me!
            </NavLink>
          </nav>
          <div className="inline-flex ml-auto">
            <SocialIcon
              url="https://github.com/ism85"
              className="mr-4"
              target="_blank"
              bgColor="#ffffff"
              style={{ height: 35, width: 35 }}
              network="github"
            />

            <SocialIcon
              url="mailto:alagele.ismail@gmail.com"
              className="mr-4"
              target="_blank"
              bgColor="#ffffff"
              style={{ height: 35, width: 35 }}
              network="email"
            />

            <SocialIcon
              url="tel:+4368860866874"
              className="mr-4"
              target="_blank"
              bgColor="#ffffff"
              style={{ height: 35, width: 35 }}
              network="whatsapp"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
