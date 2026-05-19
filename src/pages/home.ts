import { initFilters } from '../components/filters';
import { initExercises } from '../components/exercises';
import { initQuote } from '../api/quote';
import { initScrollTop } from '../components/scrollTop';
import { initHeader } from '../components/header';

import { showLoader, hideLoader } from '../components/loader';

export async function initHome(): Promise<void> {
  showLoader();

  try {
    // 1. Header (якщо він має JS логіку)
    initHeader();

    // 2. Filters (Muscles / Bodyparts / Equipment)
    await initFilters();

    // 3. Exercises (список + рендер + пагінація)
    await initExercises();

    // 4. Quote of the day
    const quote = await initQuote();
    console.log('QUOTE:', quote);

    // 5. Scroll button
    initScrollTop();
  } catch (error) {
    console.error('Home init error:', error);
  } finally {
    hideLoader();
  }
}
