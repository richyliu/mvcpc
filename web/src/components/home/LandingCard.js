import React, { useEffect, useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/index';

const ArrowDownIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-12 h-12"
  >
    <path
      fill="currentColor"
      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
    />
  </svg>
);

const LoadBackground = ({ withImage }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => withImage(data.file.childImageSharp.fluid)}
  />
);

export default function LandingCard() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    if (showArrow) {
      function hideArrow() {
        setShowArrow(false);
      }

      document.addEventListener('scroll', hideArrow);
      return () => document.removeEventListener('scroll', hideArrow);
    }
  }, [showArrow]);

  return (
    <div className="relative">
      <LoadBackground
        withImage={image => (
          <Img
            fluid={image}
            className="w-full h-screen absolute top-0 left-0 "
            style={{
              filter: 'brightness(50%) blur(6px)',
            }}
          />
        )}
      />
      <div className="absolute top-0 left-0">
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="text-center z-10 text-white px-2 max-w-3xl">
            <h1 className="font-bold leading-tight text-4xl sm:text-5xl">
              Monta Vista Competitive Programming Club
            </h1>
            <h2 className="text-xl sm:text-2xl mt-4">
              Meetings every Monday in A660
            </h2>
            <div className="mt-16 sm:mt-24">
              <a
                href="https://forms.gle/KS9qQE8r5b2pzUy89"
                className="py-3 sm:py-4 px-6 sm:px-8 text-2xl font-light bg-blue-700 mt-12 rounded-lg"
              >
                Interest form
              </a>
            </div>
          </div>
        </div>
      </div>
      {showArrow && (
        <div className="absolute bottom-0 left-0 w-full text-center text-white pb-4">
          <div className="animate-bounce inline-block">
            <ArrowDownIcon />
          </div>
        </div>
      )}{' '}
    </div>
  );
}
