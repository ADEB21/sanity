import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className=" flex">
          <NavLink to="/" exact="true" activeclassname='text-white' className='inflex-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widset'>
            Accueil
          </NavLink>
          <NavLink to="/projects" activeclassname='text-red-100 bg-red-700' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
            Projets
          </NavLink>
          <NavLink to="/post" activeclassname='text-red-100 bg-red-700' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
            Post
          </NavLink>
          <NavLink to="/about" activeclassname='text-red-100 bg-red-700' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
            A propos
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url='https://twitter.com/Turo179' className="mr-4" target='_blank' fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url='https://www.linkedin.com/in/arthur-debruille/' className="mr-4" target='_blank' fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url='https://www.instagram.com/arthur_dbre/' className="mr-4" target='_blank' fgColor="#fff" style={{height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  );
}
