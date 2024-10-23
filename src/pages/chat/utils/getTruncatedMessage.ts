export const getTruncatedMessage = (message: string, maxLength: number) =>
  message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
