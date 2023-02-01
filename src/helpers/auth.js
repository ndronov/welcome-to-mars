import { showToast } from '../components';

const DEFAULT_SUCCESS_MESSAGE = 'Welcome!';
const DEFAULT_FAILURE_MESSAGE = 'Error';

export function handleAuthSuccess(payload) {
  const message = payload.message ?? DEFAULT_SUCCESS_MESSAGE;

  showToast({
    kind: 'success',
    message,
    onHide: goToMars,
  });
}

export function handleAuthFailure(payload) {
  const message = payload.message ?? DEFAULT_FAILURE_MESSAGE;

  showToast({
    kind: 'error',
    message,
  });
}

export function goToMars() {
  window.location = 'https://mars.com/';
}
