import React from 'react';
import { createRoot } from 'react-dom/client';

import { Toast } from './Toast';

export function showToast(args) {
  const { root, container } = createToastRoot();

  function hide(onHide) {
    setTimeout(() => {
      root.unmount();
      container.remove();
      onHide?.();
    }, TRANSITION_TIMEOUT);
  }

  root.render(<Toast {...args} hide={hide} />);
}

export function createToastRoot() {
  const container = document.createElement('div');

  document.body.append(container);

  const root = createRoot(container);

  return { root, container };
}

export const TRANSITION_TIMEOUT = 1000;
export const AUTO_CLOSE_TIMEOUT = 5000;
