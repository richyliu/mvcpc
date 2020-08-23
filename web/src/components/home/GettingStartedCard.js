import React from 'react';

export default function GettingStartedCard() {
  return (
    <div className="py-24">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl">Getting started</h2>
        <p>Please make sure you've signed up for all of the following.</p>
        <ol className="space-y-3 pl-3 list-decimal">
          <li>
            Make a USACO account at usaco.org so you are ready for when the
            competition season begins in December.
          </li>
          <li>
            Create a Codeforces account and join{' '}
            <a
              href="https://codeforces.com/group/bO58xxnmVp/join"
              className="text-blue-500 font-medium"
            >
              MVCPC's Codeforces Group
            </a>{' '}
            with the link
          </li>
          <li>
            Fill out the{' '}
            <a
              href="https://forms.gle/KS9qQE8r5b2pzUy89"
              className="text-blue-500 font-medium"
            >
              interest form
            </a>{' '}
            to be added to the mailing list.
          </li>
        </ol>
      </div>
    </div>
  );
}
