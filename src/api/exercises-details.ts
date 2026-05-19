import { api } from './instance';

export function getExerciseById(id: string) {
  return api(`/exercises/${id}`);
}
