import { api } from './instance';

export function getQuote() {
  return api('/quote');
}
