import React from 'react';

export default function WhyCard() {
  return (
    <div className="bg-blue-900 text-white py-24">
      <div className="max-w-2xl px-4 sm:mx-auto">
        <h2 className="text-3xl leading-snug">Why MVCPC?</h2>
        <p className="mt-2">
          Monta Vista has a lot of clubs that focus on computer-related
          subjects. But none of the other clubs emphasize competitive
          programming, nor do they have a track record like us. Here are some of
          our club’s achievements in the past two years:
        </p>
        <ul className="mt-6 pl-8 list-disc space-y-2">
          <li>
            Over 20 members have been promoted into the USACO’s highest
            division, the Platinum Division.
          </li>
          <li>
            Members have made three first-time USACO Finalist appearances (top
            26 in the nation!) and two second-time USACO Finalist appearances
            (top 13 in the nation!)
          </li>
          <li>
            In local competitions like Stanford ProCo and Harker Programming
            Invitational, MVCPC members appear all over the leaderboards.
          </li>
        </ul>
      </div>
    </div>
  );
}
