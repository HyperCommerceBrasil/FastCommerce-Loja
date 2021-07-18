export const getFirstName = (
  fullName?: string | undefined,
): string | undefined => {
  if (!fullName) return undefined;
  const names = fullName.split(' ');
  if (names.length === 1) return fullName;
  return names[0];
};
