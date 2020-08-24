import React from 'react';

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="max-w-2xl px-4 mx-auto space-y-4 py-6">
        <h1 className="text-3xl font-medium py-2">Contact</h1>
        <p>
          Email us at{' '}
          <a
            href="mailto:programmingcompetitive@gmail.com"
            className="text-blue-600 border-b border-transparent hover:border-blue-600 transition duration-150"
          >
            programmingcompetitive@gmail.com
          </a>{' '}
          or post a message on our{' '}
          <a
            href="https://codeforces.com/group/bO58xxnmVp/blog"
            className="text-blue-600 border-b border-transparent hover:border-blue-600 transition duration-150"
          >
            Codeforces group
          </a>
        </p>
      </div>
    </div>
  );
}
