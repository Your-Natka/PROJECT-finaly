import { api } from './instance';

export function subscribe(email: string) {
  return api('/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
}
