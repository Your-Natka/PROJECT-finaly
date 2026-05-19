import { apiRequest } from './instance';

export function addRating(id: string, data: { rating: number; email: string }) {
  return apiRequest(`/exercises/${id}/rating`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
