import React from "react"

import { Seo, Layout, SignUpForm } from "../components"

function SignUpPage() {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  )
}

export function Head() {
  return <Seo title="Sign up" />
}

export default SignUpPage
