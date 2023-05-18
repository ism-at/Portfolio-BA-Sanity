import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    //return <h1>NavBar Page</h1> Just for Test
    //style={{backgroundColor: '#1c1d25'}}
    return(
        <header className="bg-gray-900" > 
            <div className="container mx-auto flex justify-between"> 
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gray-500 text-4xl font-bold cursive tracking-widest">
                        Ismail
                    </NavLink>

                    <NavLink to="/Post" 
                    activeClassName="text-red-100 bg-red-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-gray-500">
                        Blog 
                    </NavLink>

                    <NavLink to="/Project" 
                    activeClassName="text-red-100 bg-red-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-gray-500">
                        Projects
                    </NavLink>

                    <NavLink to="/About" 
                    activeClassName="text-red-100 bg-red-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-gray-500">
                        About Me!
                    </NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://github.com/ism85" 
                    className="mr-4" 
                    target="_blank" 
                    style={{height:35, width: 35}}
                    bgColor="#ffffff"
                    network="github"
                    />

                    <SocialIcon 
                    url="mailto:alagele.ismail@gmail.com"
                    className="mr-4" 
                    target="_blank" 
                    style={{height:35, width: 35}}
                    bgColor="#ffffff" 
                    network="email"
                    />

                    <SocialIcon 
                    url="tel:+4368860866874"
                    className="mr-4" 
                    target="_blank" 
                    style={{height:35, width: 35}}
                    bgColor="#ffffff" 
                    network="whatsapp"
                    />
                </div>
            </div>
        </header>
    )
}