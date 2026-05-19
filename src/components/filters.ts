import { getFilters } from '../api/filters';

export async function initFilters() {
  const data = await getFilters('Muscles');

  console.log(data);
}
