import React from 'react';

import { Seo, Layout } from '../components';

function NotFoundPage() {
  return (
    <Layout>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export function Head() {
  return <Seo title="404: Not Found" />;
}

export default NotFoundPage;
