export function formatCurrency(value) {
  return value.toLocaleString("ko-KR");
}
export function formatPriceInput(value) {
  if (!value) return "";
  const number = Number(value.replace(/,/g, ""));
  return formatCurrency(number);
}
export const convertTo24HourFormat = (timeString) => {
  const [period, time] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "오후" && hours !== 12) {
    hours += 12;
  } else if (period === "오전" && hours === 12) {
    hours = 0; // 오전 12시는 0시로 처리
  }

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};
export const isWithinOneMinute = (prevTimestamp, currentTimestamp) => {
  if (!prevTimestamp) return false;

  const prevTime = new Date(`1970-01-01T${convertTo24HourFormat(prevTimestamp)}`);
  const currentTime = new Date(`1970-01-01T${convertTo24HourFormat(currentTimestamp)}`);
  return (currentTime - prevTime) / 1000 <= 60;
};
export const groupMessagesByDateAndSender = (messages) => {
  const groupedByDate = {};

  // 메시지를 날짜별로 그룹화
  messages.forEach((message) => {
    const date = message.date;
    if (!groupedByDate[date]) {
      groupedByDate[date] = [];
    }
    groupedByDate[date].push(message);
  });

  // 날짜별 그룹 내에서 발신자별로 다시 그룹화
  const grouped = Object.keys(groupedByDate).map((date) => {
    const messagesForDate = groupedByDate[date];
    const groupedBySender = [];
    let currentGroup = [];

    messagesForDate.forEach((message, index) => {
      if (currentGroup.length === 0 || currentGroup[0].sender === message.sender) {
        currentGroup.push(message);
      } else {
        groupedBySender.push(currentGroup);
        currentGroup = [message];
      }

      if (index === messagesForDate.length - 1) {
        groupedBySender.push(currentGroup);
      }
    });

    return {
      date,
      messages: groupedBySender,
    };
  });

  return grouped;
};
