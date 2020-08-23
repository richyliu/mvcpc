import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/index';

const LoadBackground = ({ withImage }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/bg.png" }) {
          childImageSharp {
            fluid(maxHeight: 700) {
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
  return (
    <div className="relative">
      <LoadBackground
        withImage={image => (
          <Img
            fluid={image}
            className="w-full absolute top-0 left-0 "
            style={{
              filter: 'brightness(50%) blur(6px)',
            }}
          />
        )}
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="text-center mx-auto z-10 text-white max-w-3xl mt-32 lg:mt-64">
          <h1 className="font-bold leading-tight text-6xl">
            Monta Vista Competitive Programming Club
          </h1>
          <h2 className="text-2xl mt-4">Meetings every Monday in A660</h2>
        </div>
      </div>
    </div>
  );
}
