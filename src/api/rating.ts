import { api } from './instance';

export function addRating(id: string, data: { rating: number; email: string }) {
  return api(`/exercises/${id}/rating`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
