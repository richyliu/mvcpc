import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-indigo-100">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
