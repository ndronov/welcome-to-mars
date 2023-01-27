import React from 'react'

import { Seo } from '../components/Seo'
import { Layout } from '../components/Layout'
import { SignUpForm } from '../components/SignUpForm'

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
