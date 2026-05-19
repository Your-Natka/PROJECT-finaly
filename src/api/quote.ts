import { apiRequest } from './instance';

export const getQuote = () => {
  return apiRequest('/quote');
};
