export function approvedCivilDay(approvedAt: string): string {
  const dateC = new Date(approvedAt);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(dateC);
}

export function isPastDeadline(approvedAt: string, deadlineDate: string): boolean {
  return approvedCivilDay(approvedAt) > deadlineDate;
}