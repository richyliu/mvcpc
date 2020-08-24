import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const FooterItem = ({ name, link }) => (
  <Link
    to={link}
    className="flex-none mx-4 px-2 border-b-2 border-transparent hover:border-blue-900 transition duration-200"
  >
    {name}
  </Link>
);

export default function Footer() {
  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-center">
          <FooterItem name="Resources" link="/resources" />
          <FooterItem name="Calendar" link="/calendar" />
          <FooterItem name="About" link="/about" />
          <FooterItem name="Contact" link="/contact" />
        </div>
        <hr className="border border-blue-800 my-8" />
        <p className="text-center">&copy; Richard Liu 2020</p>
        <StaticQuery
          query={graphql`
            query {
              currentBuildDate {
                currentDate
              }
            }
          `}
          render={data => (
            <p className="text-center text-blue-700">
              Site last updated on {data.currentBuildDate.currentDate}
            </p>
          )}
        />
      </div>
    </div>
  );
}
