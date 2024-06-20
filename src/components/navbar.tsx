import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="container bg-secondcolor mx-auto max-w-full p-5 font-Consolas text-2xl font-bold ">
            <div className="mx-10 max-w-full text-right	tracking-wider antialiased">
                <Link to="/" className="m-20 text-black hover:text-maincolor">HOME</Link>
                <Link to="/projects" className="m-20 text-black hover:text-maincolor">PROJECTS</Link>
                <Link to="/about" className="m-20 text-black hover:text-maincolor">ABOUT</Link>
                <Link to="/map" className="m-20 text-black hover:text-maincolor">MAP</Link>
            </div>
        </div>
    );
}
