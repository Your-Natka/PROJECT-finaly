import { apiRequest } from './instance';

export function getFilters(filter: string, page = 1, limit = 12) {
  return apiRequest(`/filters?filter=${filter}&page=${page}&limit=${limit}`);
}
