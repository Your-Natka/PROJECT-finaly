import './styles/styles.css';

import { initHeader } from './components/header';

import { initFilters } from './components/filters';

import { initExercises } from './components/exercises';

import { initQuote } from './api/quote';

import { initScrollTop } from './components/scrollTop';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFilters();
  initExercises();
  initQuote();
  initScrollTop();
});
