import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const NavItem = ({ name, link }) => (
  <Link
    to={link}
    className="flex-none mx-4 px-2 border-b-2 border-transparent hover:border-blue-900 transition duration-200"
  >
    {name}
  </Link>
);

export default function DesktopNavbar() {
  return (
    <div className="flex flex-row items-center bg-blue-600 text-white py-2 lg:py-3 px-2 lg:px-4">
      <Link className="flex-auto px-2" to="/">
        <Logo />
      </Link>
      <NavItem name="Resources" link="/resources" />
      <NavItem name="Calendar" link="/calendar" />
      <NavItem name="About" link="/about" />
      <NavItem name="Contact" link="/contact" />
    </div>
  );
}
