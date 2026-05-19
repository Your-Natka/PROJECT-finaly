const loader = document.querySelector<HTMLElement>('#loader');

export function showLoader(): void {
  loader?.classList.remove('is-hidden');
}

export function hideLoader(): void {
  loader?.classList.add('is-hidden');
}
