import { getQuote } from '../api/quote';

export async function initQuote() {
  const data = await getQuote();
  console.log(data);
}
