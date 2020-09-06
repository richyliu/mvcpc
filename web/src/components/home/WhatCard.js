import React from 'react';

const BrainIcon = (
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-24 h-24 text-gray-700"
  >
    <path
      fill="currentColor"
      d="M160 178.94V176c0 1-.23 1.89-.29 2.85a2.46 2.46 0 0 1 .29.09zM509.21 275c-20.94-47.12-48.44-151.73-73.08-186.75A207.94 207.94 0 0 0 266.09 0H192C86 0 0 86 0 192a191.28 191.28 0 0 0 64 142.82V512h256v-64h64a64 64 0 0 0 64-64v-64h32a32 32 0 0 0 29.21-45zM336 208h-50.94a47.5 47.5 0 0 1 2.94 16 48 48 0 0 1-48 48 47.5 47.5 0 0 1-16-2.94V320h-64v-50.94a47.5 47.5 0 0 1-16 2.94 48 48 0 0 1-48-48c0-1 .23-1.89.29-2.85A47.88 47.88 0 0 1 112 128a48 48 0 0 1 48-48 47.46 47.46 0 0 1 23.53 6.4 47.76 47.76 0 0 1 80.94 0 47.37 47.37 0 0 1 68.59 25.6H336a48 48 0 0 1 0 96z"
    />
  </svg>
);

const PersonIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="user-tie"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-24 h-24 text-gray-700"
  >
    <path
      fill="currentColor"
      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
    />
  </svg>
);

const ConnectIcon = (
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="w-24 h-24 text-gray-700"
  >
    <path
      fill="currentColor"
      d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
    ></path>
  </svg>
);

const Tile = ({ icon, title, description }) => (
  <div className="mx-auto my-8 flex flex-col items-stretch">
    <div className="flex-none flex items-center justify-center py-4">
      {icon}
    </div>
    <h3 className="flex-none text-xl font-medium mt-2">{title}</h3>
    <p className="flex-auto leading-snug font-light mt-1">{description}</p>
  </div>
);

export default function WhatCard() {
  return (
    <div className="py-24">
      <div className="max-w-2xl px-4 sm:mx-auto">
        <h2 className="text-3xl leading-snug">
          What is Competitive Programming?
        </h2>
        <p className="mt-2">
          Competitive programming is an activity where participants compete to
          solve algorithmic problems within a fixed time frame ranging from 2-8
          hours. Besides just being fun, competitive programming also has many
          tangible benefits.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:space-x-4 lg:space-x-8 max-w-6xl mx-auto mt-12 px-8">
        <Tile
          icon={BrainIcon}
          title="Critical Problem Solving"
          description="Competitive programming teaches participants to solve problems using critical thinking and modern computational techniques, both important skills to address complex problems in the 21st century."
        />
        <Tile
          icon={PersonIcon}
          title="Programming Interviews"
          description="Many interviews for technology companies like Google require applicants to solve algorithmic problems to demonstrate capability. If you're familiar with competitive programming, these problems will be easy!"
        />
        <Tile
          icon={ConnectIcon}
          title="Make Connections"
          description="Get to know other people who are interested in competitive, as they might be your coworkers someday! Making connections in a highly competitive field is quite useful"
        />
      </div>
    </div>
  );
}
