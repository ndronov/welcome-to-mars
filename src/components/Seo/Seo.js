import React from 'react';

export function Seo(props) {
  const { title, children } = props;

  return (
    <>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Welcome to Mars" />
      <meta
        property="og:description"
        content="Mars teleport authentication form"
      />
      <meta
        property="og:image"
        content="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia20282-full.jpg"
      />
      <meta
        property="og:url"
        content="https://ndronov.github.io/welcome-to-mars/"
      />

      <title>{title}</title>

      {children}
    </>
  );
}
