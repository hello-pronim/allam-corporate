export const getUri = (uri: string): string => (uri === 'homepage' ? `/` : `/${uri}/`);
