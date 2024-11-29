export const getTruncatedMessage = (message: string | null, maxLength: number) =>
  (message ?? "").length > maxLength ? (message ?? "").slice(0, maxLength) + "..." : message ?? "";
