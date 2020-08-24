import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HtmlHeader from './HtmlHeader';

export default function Layout({ children, title }) {
  return (
    <div className="bg-blue-100">
      <HtmlHeader title={title || false} />
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
