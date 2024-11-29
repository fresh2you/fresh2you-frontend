import dayjs from "dayjs";

export function shouldShowDate(timestamp: string, previousMessageDate?: string): boolean {
  const currentDate = dayjs();
  const messageDate = dayjs(timestamp);
  const previousDate = previousMessageDate ? dayjs(previousMessageDate) : undefined;

  return (
    (messageDate.isSame(currentDate, "day") && (!previousDate || !previousDate.isSame(currentDate, "day"))) ||
    (messageDate.isSame(currentDate.subtract(1, "day"), "day") &&
      (!previousDate || !previousDate.isSame(currentDate.subtract(1, "day"), "day"))) ||
    !previousMessageDate ||
    !previousDate?.isSame(messageDate, "day")
  );
}
