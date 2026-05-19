import { getQuote } from '../api/quote';

export async function initQuote() {
  try {
    const data = await getQuote();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
