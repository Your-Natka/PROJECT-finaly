import { getExercises } from '../api/exercises';
import { showLoader, hideLoader } from './loader';

export async function initExercises() {
  showLoader();

  try {
    const data = await getExercises();

    console.log(data);
    // renderExercises(data)
  } finally {
    hideLoader();
  }
}
