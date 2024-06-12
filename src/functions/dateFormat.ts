export const formatDateOfBirth = (selected: Date | null): string => {
  if (!selected) {
    return "";
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const formattedDate: string = selected?.toLocaleDateString("ar", dateOptions);

  return formattedDate.replace(/\//g, "/");
};
