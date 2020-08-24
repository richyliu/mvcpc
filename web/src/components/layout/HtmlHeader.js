import React from 'react';

import { Helmet } from 'react-helmet';

export default function HtmlHeader({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `MVCPC | ${title}` : 'MVCPC'}</title>
      <meta
        name="description"
        content="Competitive programming is an activity where participants compete to solve algorithmic problems within a fixed time frame ranging from 2-8 hours. Besides just being fun, competitive programming also has many tangible benefits."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      <meta
        property="og:title"
        content="Monta Vista Competitive Programming Club"
      />
      <meta
        property="og:description"
        content="MVCPC is a club dedicated to competitive programming, such as USACO."
      />
    </Helmet>
  );
}
