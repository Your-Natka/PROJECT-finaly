import { apiRequest } from './instance';

export function getExercises(params: {
  bodypart?: string;
  muscles?: string;
  equipment?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();

  if (params.bodypart) query.append('bodypart', params.bodypart);

  if (params.muscles) query.append('muscles', params.muscles);

  if (params.equipment) query.append('equipment', params.equipment);

  if (params.keyword) query.append('keyword', params.keyword);

  query.append('page', String(params.page ?? 1));
  query.append('limit', String(params.limit ?? 10));

  return apiRequest(`/exercises?${query.toString()}`);
}
