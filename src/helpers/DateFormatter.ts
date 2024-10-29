export const DateFormatter = (date: string): string => {
  const newDate = new Date(date);

  return newDate
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    })
    .replace(/\//g, '/');
};
