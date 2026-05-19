import { apiRequest } from './instance';

export function getQuote() {
  return apiRequest('/quote');
}
