import React from 'react';
import { Link } from 'gatsby';

const FooterItem = ({ name, link }) => (
  <Link
    to={link}
    className="flex-none mx-4 px-2 border-b-2 border-transparent hover:border-indigo-900 transition duration-200"
  >
    {name}
  </Link>
);

export default function Footer() {
  return (
    <div className="bg-indigo-900 text-white py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-center">
          <FooterItem name="Resources" link="/" />
          <FooterItem name="Calendar" link="/" />
          <FooterItem name="About" link="/" />
          <FooterItem name="Contact" link="/" />
        </div>
        <hr className="border border-indigo-800 my-8" />
        <p className="text-center">&copy; Richard Liu 2020</p>
      </div>
    </div>
  );
}
