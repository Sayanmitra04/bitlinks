import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex px-3 justify-between items-center text-white">
      <div className="logo font-bold text-2xl">BitLinks</div>
      <ul className="flex gap-4 justify-center items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
      
      
        
        <li>
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">Try now</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
