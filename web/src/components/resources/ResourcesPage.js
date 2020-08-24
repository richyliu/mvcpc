import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="py-24">
      <div className="max-w-2xl px-4 mx-auto space-y-4 py-6">
        <h1 className="text-3xl font-medium py-2">How to train?</h1>
        <p>
          In general, MVCPC officers believe that the best way to practice for
          USACO is to solve real problems. Go through the old problems of the
          division you compete in and solve them.
        </p>
        <p>
          Do not give up on a problem if you cannot immediately come up with a
          solution! Spend at least 15-60 minutes before you read the editorial.
          If the editorial mentions a technique that you are unfamiliar with,
          use an Algorithm reference or Google it.
        </p>
        <p>
          Afterwards, spend at least 5 minutes reflecting on the problem. Here
          are some questions to consider:
          <ul className="list-disc pl-8 mt-1 space-y-1">
            <li>Why were you able/unable to solve the problem?</li>
            <li>Which techniques work/don’t work for the problem and why?</li>
            <li>
              Can the technique used in the problem be generalized to work for
              other problems?
            </li>
            <li>
              Are there any hints/qualities of the problem that should
              immediately suggest a certain solution?
            </li>
          </ul>
        </p>
        <p>
          Make a copy of{' '}
          <a
            href="https://docs.google.com/spreadsheets/d/1o-v5jraNWyqkpmj5clEsTSIyMH3iYsbmFBWTyFG1ZHY/edit?usp=sharing"
            className="text-blue-600 border-b border-transparent hover:border-blue-600 transition duration-150"
          >
            this google sheet
          </a>{' '}
          to help you keep organized while solving old problems.
        </p>
      </div>
      <div className="max-w-2xl px-4 mx-auto space-y-4 py-6">
        <h1 className="text-3xl font-medium py-2">Resources</h1>
        <ul className="list-disc pl-8 mt-1 space-y-1">
          <li>
            <a
              href="https://cp-algorithms.com/"
              className="text-blue-600 border-b border-transparent hover:border-blue-600 transition duration-150"
            >
              CP-Algorithms
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bqi343/USACO"
              className="text-blue-600 border-b border-transparent hover:border-blue-600 transition duration-150"
            >
              BenQ’s Github
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1sKM0topXZnh2IVzCG-RYtH6912NOtcCS?usp=sharing"
              className="text-blue-600 border-b border-transparent hover:border-blue-600 transition duration-150"
            >
              Club Slides and Lectures
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
