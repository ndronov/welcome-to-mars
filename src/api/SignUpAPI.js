import { hitOrMiss } from './http'

export async function SignUpAPI(_args) {
  const response = hitOrMiss() ? {
    success: true,
    payload: {
      message: 'Account has been created successfully, now you can sign in'
    }
  } : {
    success: false,
    payload: {
      message: 'Failed to create an account, please try again later'
    }
  }

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 420)
  });
}
