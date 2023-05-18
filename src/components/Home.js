import React from "react";
import image  from "../imgs/01.jpg";
import CV from "../Documents/CV.pdf"

export default function Home(){
    return (
      <main className="h-screen w-screen">
        <img src={image} alt="Background" className="absolute object-cover w-full h-full blur-img bg-fixed"/>
          <section className="relative flex flex-col justify-left items-center min-h-screen pt-12 lg:pt-64 px-8">
              <div className="relative flex flex-col justify-center items-center">
                <code><h1 className="text-6xl font-bold mb-4 text-white">WELCOME</h1></code>
                <code><p className="text-4xl mb-8 text-white">Ismail</p></code>
                <a href={CV} target="_blank" rel="noreferrer" className="text-white 
                bg-blue-500 hover:bg-blue-800 transition-colors duration-300 
                ease-in-out px-6 py-3 rounded-full font-bold">Download my CV</a>
              </div>
          </section>
        </main>
    )
  }
  
  
  /* <div className="relative z-10"> */
  
  // import React from 'react';
  // import cv from './Documents/CV.pdf'; // adjust the path accordingly
  
  // const DownloadButton = () => {
    //   return (
      //     <a href={cv} target="_blank" rel="noopener noreferrer">
      //       <button>
      //         Open CV
      //       </button>
      //     </a>
      //   );
      // };
      // export default DownloadButton;
      

    /*----------------------------------------------------------------------------------*/
      /* <img src={image} alt="LapTop" className="absolute object-cover w-full h-full"/> 
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
      <h1 className="text-3xl text-red-100 
      font-bold cursive leading-none 
      lg:leading-snung home-name">Ismail Al Agele</h1>
      </section>  */