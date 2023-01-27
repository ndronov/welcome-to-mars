import { showToast } from '../components/Toast'

const DEFAULT_SUCCESS_MESSAGE = 'Welcome!'
const DEFAULT_FAILURE_MESSAGE = 'Error'

export function handleSignInSuccess(payload) {
  const message = payload.message ?? DEFAULT_SUCCESS_MESSAGE

  showToast({
    kind: 'success',
    message,
    onHide: goToMars,
  })
}

export function handleSignUpSuccess(payload) {
  const message = payload.message ?? DEFAULT_SUCCESS_MESSAGE

  showToast({
    kind: 'success',
    message,
    onHide: goToSignInPage,
  })
}

export function handleAuthFailure(payload) {
  const message = payload.message ?? DEFAULT_FAILURE_MESSAGE

  showToast({
    kind: 'error',
    message,
  })
}

export function goToMars() {
  window.location = 'https://mars.com/'
}

export function goToSignInPage() {
  window.location = '/'
}
