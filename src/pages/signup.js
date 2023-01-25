import * as React from 'react'
import { Link } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'

// TODO rework ?
function SignUpPage() {
  return (
    <Layout>
      <h1>Hi from the SignupPage</h1>

      <p>Welcome to SignupPage</p>

      <Link to="/"><span>go home</span>Go back to the homepage333</Link>
    </Layout>
  )
}

export function Head() {
  return <Seo title="Sign up" />
}

export default SignUpPage
