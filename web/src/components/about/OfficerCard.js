import React from 'react';

export default function OfficerCard({ image, name, job, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="flex-none m-2 rounded-full overflow-hidden">{image}</div>
      <h2 className="flex-none text-xl font-medium mt-2">{name}</h2>
      <h3 className="flex-none text font-light leading-snug">{job}</h3>
      <p className="flex-auto mt-2 max-w-lg">{description}</p>
    </div>
  );
}
