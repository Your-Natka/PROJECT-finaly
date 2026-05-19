import { apiRequest } from './instance';

export function subscribe(email: string) {
  return apiRequest('/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
}
