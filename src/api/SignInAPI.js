import { hitOrMiss } from './http'

export async function SignInAPI(_args) {
  const response = hitOrMiss() ? {
    success: true,
    payload: {
      message: 'You have successfully logged in. Now you will be moved to Mars.',
    }
  } : {
    success: false,
    payload: {
      message: 'Login error, please check your credentials',
    }
  }

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 420)
  });
}
