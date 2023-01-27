import { hitOrMiss } from './http'

export async function SignInAPI(args) {
  console.info('Sign in try...', args)

  const response = hitOrMiss() ? {
    success: true,
    payload: {
      message: 'You are successfully logged in'
    }
  } : {
    success: false,
    payload: {
      message: 'Error, please check your credentials'
    }
  }

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 42 * 100)
  });
}
