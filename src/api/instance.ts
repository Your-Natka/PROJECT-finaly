const BASE_URL = 'https://your-energy.b.goit.study/api';

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
