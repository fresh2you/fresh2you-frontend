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
