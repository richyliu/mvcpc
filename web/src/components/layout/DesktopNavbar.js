import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const NavItem = ({ name, link }) => (
  <Link
    to={link}
    className="flex-none mx-4 px-2 border-b-2 border-transparent hover:border-indigo-900 transition duration-200"
  >
    {name}
  </Link>
);

export default function DesktopNavbar() {
  return (
    <div className="flex flex-row items-center bg-indigo-600 text-white py-2 px-4">
      <Link className="flex-auto px-2" to="/">
        <Logo />
      </Link>
      <NavItem name="Resources" link="/" />
      <NavItem name="Calendar" link="/" />
      <NavItem name="About" link="/" />
      <NavItem name="Contact" link="/" />
    </div>
  );
}
