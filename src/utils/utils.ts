export const createParamsString = (data: Record<string, unknown>): string => {
  const params = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
    .join('&');

  return params ? `?${params}` : '';
};