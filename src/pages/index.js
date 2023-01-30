import React from "react";

import { Seo, Layout, SignInForm } from "../components";

function IndexPage() {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo title="Sign in" />;
}

export default IndexPage;
