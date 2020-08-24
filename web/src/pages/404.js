import React from 'react';
import Layout from '../components/layout/Layout';

export default function NotFound404() {
  return (
    <Layout title="Not Found">
      <div className="py-24">
        <div className="max-w-2xl mx-auto my-4">
          <h1 className="text-3xl font-medium">404 page not found</h1>
          <p className="mt-2">
            Sorry, but we could not find that page. Please contact the webmaster
            if this issue persists.
          </p>
        </div>
      </div>
    </Layout>
  );
}
