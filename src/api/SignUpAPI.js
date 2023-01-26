import { hitOrMiss } from './http'

export async function SignUpAPI(args) {
  console.info('Sign up try...', args)

  const response = hitOrMiss() ? {
    success: true,
    payload: {
      message: 'Account has been created successfully, now you can sign in'
    }
  } : {
    success: false,
    payload: {
      message: 'Error, please try again later'
    }
  }

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 42 * 100)
  });
}