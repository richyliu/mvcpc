import React from 'react';
import OfficerCard from './OfficerCard';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/index';

const LoadProfileData = ({ withProfileData }) => (
  <StaticQuery
    query={graphql`
      query {
        default_profile: file(
          relativePath: { eq: "images/default_profile.png" }
        ) {
          childImageSharp {
            fixed(width: 224) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        nathan: file(
          relativePath: { eq: "images/nathan.jpg" }
        ) {
          childImageSharp {
            fixed(width: 224) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        abhinav: file(
          relativePath: { eq: "images/abhinav.jpg" }
        ) {
          childImageSharp {
            fixed(width: 224) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        anika: file(
          relativePath: { eq: "images/anika.jpg" }
        ) {
          childImageSharp {
            fixed(width: 224) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        jay: file(
          relativePath: { eq: "images/jay.jpg" }
        ) {
          childImageSharp {
            fixed(width: 224) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        richard: file(
          relativePath: { eq: "images/richard.jpg" }
        ) {
          childImageSharp {
            fixed(width: 224) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data =>
      withProfileData([
        {
          name: 'Eric Zhang',
          job: 'President',
          description:
            "Eric is a senior at Monta Vista High School. He is a 2018 and 2020 USACO Finalist, a member of the winning team of Stanford ProCo’s 2019 Speed Round, and a three-time AIME qualifier. In his free time, he enjoys learning about ML as well as teaching at AlphaStar Academy.",
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
        },
        {
          name: 'Nathan Wang',
          job: 'President',
          description:
            'Nathan is currently a junior at Monta Vista High School. He is a 2x USACO Finalist, a 4x AIME qualifier, and the co-creator of the USACO Guide. Outside of competitive programming, he enjoys playing social deduction games like Secret Hitler.',
          image: <Img fixed={data.nathan.childImageSharp.fixed} />,
        },
        {
          name: 'Abhinav Kommula',
          job: 'Vice President',
          description:
            'Abhinav is a current senior at Monta Vista High School. In addition to being a three-time AIME qualifier, Abhinav is a USACO Platinum Contestant and a Division 1 contestant on codeforces. Apart from competitions, he’s also interested in conducting CS research within Machine Learning and Cybersecurity. In his free time, Abhinav enjoys cooking, playing pop music on the piano, and contemplating life.',
          image: <Img fixed={data.abhinav.childImageSharp.fixed} />,
        },
        {
          name: 'Anika Jain',
          job: 'Director of Curriculum',
          description:
            'Anika is a current senior at Monta Vista High School. She is a USACO Platinum Contestant and a Technovation international semifinalist. In her free time, she enjoys reading about the recent breakthroughs in astronomy, developing apps, as well as teaching coding to elementary school kids.',
          image: <Img fixed={data.anika.childImageSharp.fixed} />,
        },
        {
          name: 'Jay Yeung',
          job: '',
          description:
            'Jay is a sophomore at MVHS. He participated and organized <Hack> Cupertino and is in USACO Silver. In his free time, he enjoys playing minecraft, scouting with Troop 452, and playing piano.',
          image: <Img fixed={data.jay.childImageSharp.fixed} />,
        },
        {
          name: 'Richard Liu',
          job: 'Webmaster',
          description:
            'Richard is a senior at Monta Vista High School. He participated in FLL and FRC and is in USACO Gold. He is part of BSA Troop 485 and programs in his free time.',
          image: <Img fixed={data.richard.childImageSharp.fixed} />,
        },
      ])
    }
  />
);

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="max-w-2xl px-4 mx-auto space-y-4 py-6">
        <h1 className="text-3xl font-medium py-2">Club Officers</h1>
      </div>
      <div className="max-w-4xl px-4 mx-auto sm:grid md:grid-cols-2 lg:grid-cols-3">
        <LoadProfileData
          withProfileData={profiles =>
            profiles.map(profile => <OfficerCard {...profile} />)
          }
        />
      </div>
    </div>
  );
}
