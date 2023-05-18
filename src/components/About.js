import React from "react";

import image  from "../imgs/15.jpg";
import CV from "../Documents/CV.pdf"



export default function About(){
    //return <h1>About Page</h1>

    return (
        <main>
        <img src={image} alt="LapTop" className="bg-cover bg-center absolute object-cover w-full h-full"/>
          <section className="relative flex flex-col justify-left items-center min-h-screen pt-12 lg:pt-64 px-8">
              <div className="relative flex flex-col justify-center items-center">
                <code><h1 className="text-6xl font-bold mb-4 text-white">WELCOME</h1></code>
                <code><p className="text-4xl mb-8 text-white">Ismail</p></code>
                <a href={CV} target="_blank" rel="noreferrer" className="text-white 
                bg-blue-500 hover:bg-blue-700 transition-colors duration-300 
                ease-in-out px-6 py-3 rounded-full font-bold">Download my CV</a>
              </div>
          </section>
        </main>
    )
}