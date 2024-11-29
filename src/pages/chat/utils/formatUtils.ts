import dayjs from "dayjs";

export const formatDate = (dateString: string) => {
  const messageDate = new Date(dateString);
  const today = new Date();

  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startOfYesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

  if (messageDate >= startOfToday) {
    return messageDate.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } else if (messageDate >= startOfYesterday) {
    return "어제";
  } else if (messageDate.getFullYear() === today.getFullYear()) {
    return `${messageDate.getMonth() + 1}월 ${messageDate.getDate()}일`;
  } else {
    const year = String(messageDate.getFullYear()).slice(-2);
    const month = String(messageDate.getMonth() + 1).padStart(2, "0");
    const day = String(messageDate.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  }
};

export const formatTimestamp = (timestamp: string | number) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: true });
};

export const formatTimestampDate = (timestamp: string): string => {
  const date = dayjs(timestamp);

  if (date.isSame(dayjs(), "day")) {
    return "오늘";
  } else if (date.isSame(dayjs().subtract(1, "day"), "day")) {
    return "어제";
  } else if (date.isSame(dayjs(), "year")) {
    return date.format("M월 D일");
  } else {
    return date.format("YYYY년 M월 D일");
  }
};
