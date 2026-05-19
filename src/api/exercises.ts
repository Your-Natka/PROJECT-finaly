import { showLoader } from '../components/loader';

import { hideLoader } from '../components/loader';

export async function getExercises() {
  try {
    showLoader();

    const response = await fetch(url);

    return response.json();
  } finally {
    hideLoader();
  }
}
