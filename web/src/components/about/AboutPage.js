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
      }
    `}
    render={data =>
      withProfileData([
        {
          name: 'Eric Zhang',
          job: 'President',
          description:
            "Eric is a senior at Monta Vista High School. He is a 2018 and 2020 USACO Finalist, a member of the winning team of Stanford ProCo's 2019 Speed Round, and a three-time AIME qualifier. In his free time, he enjoys learning about ML as well as teaching at AlphaStar Academy.",
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
        },
        {
          name: 'Nathan Wang',
          job: 'President',
          description:
            'Nathan is currently a sophomore at Monta Vista High School. He is a 2 time AIME qualifier and a USACO Platinum Contestant since his 7th grade. Nathan has qualified for USACO camp, and is additionally an active member of School Leadership.',
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
        },
        {
          name: 'Abhinav Kommula',
          job: '',
          description:
            'Abhinav is a current senior at Monta Vista High School. In addition to being a three-time AIME qualifier, Abhinav is a USACO Platinum Contestant and a Division 1 contestant on codeforces. Apart from competitions, he’s also interested in conducting CS research within Machine Learning and Cybersecurity. In his free time, Abhinav enjoys cooking, playing pop music on the piano, and contemplating life.',
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
        },
        {
          name: 'Anika Jain',
          job: '',
          description:
            'Anika is a current senior at Monta Vista High School. She is a USACO Platinum Contestant and a Technovation international semifinalist. In her free time, she enjoys reading about the recent breakthroughs in astronomy, developing apps, as well as teaching coding to elementary school kids.',
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
        },
        {
          name: 'Jay Yeung',
          job: '',
          description:
            'Jay is a sophomore at MVHS. He participated and organized Hack Cupertino and is in USACO Silver. In his free time, he enjoys playing minecraft, scouting with Troop 452, and playing piano.',
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
        },
        {
          name: 'Richard Liu',
          job: 'Webmaster',
          description:
            'Richard is a senior at Monta Vista High School. He participated in FLL and FRC and is in USACO Gold. He is part of BSA Troop 485 and programs in his free time.',
          image: <Img fixed={data.default_profile.childImageSharp.fixed} />,
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
