import { api } from './instance';

export function getFilters(filter: string, page = 1, limit = 12) {
  return api(`/filters?filter=${filter}&page=${page}&limit=${limit}`);
}
