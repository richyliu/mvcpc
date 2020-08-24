import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavItem = ({ name, link }) => (
  <Link to={link} className="flex-none px-2 py-2 border-blue-900 text-lg">
    {name}
  </Link>
);

export default function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full shadow-lg">
      <div className="w-full py-2 px-4 text-white bg-blue-600 flex items-center shadow">
        <Link className="flex-auto pr-2" to="/">
          <Logo />
        </Link>
        <button
          className="flex-none text-white p-1 border border-blue-800 rounded"
          onClick={() => setShowMenu(!showMenu)}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className="flex flex-col items-stretch bg-blue-800 text-white overflow-x-hidden px-4 divide-y-2 transition-all duration-300"
        style={{ maxHeight: showMenu ? 200 : 0 }}
      >
        <NavItem name="Resources" link="/resources" />
        <NavItem name="Calendar" link="/calendar" />
        <NavItem name="About" link="/about" />
        <NavItem name="Contact" link="/contact" />
      </div>
    </div>
  );
}
