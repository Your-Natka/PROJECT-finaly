import { apiRequest } from './instance';

export function getExerciseById(id: string) {
  return apiRequest(`/exercises/${id}`);
}
