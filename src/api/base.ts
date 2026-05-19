const BASE_URL = 'https://your-energy.b.goit.study/api';

export async function api<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(BASE_URL + endpoint, options);

  if (!res.ok) {
    throw new Error('API error');
  }

  return res.json();
}
