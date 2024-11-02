import { useMemo } from "react";
import useMaxLengthByScreenRatio from "./useMaxLenByScreenRation";

const useChatRoomName = (participants: Participant[], userId: number) => {
  const maxLen = useMaxLengthByScreenRatio(26);
  const threshold = 24;

  return useMemo(() => {
    const filteredParticipants = participants.filter((participant) => participant.userId !== userId);

    if (filteredParticipants.length > 1) {
      const participantNames = filteredParticipants.map((p) => p.nickname).join(", ");
      return participantNames.length > threshold
        ? participantNames.slice(0, Math.min(threshold, maxLen)) + "..."
        : participantNames;
    } else if (filteredParticipants.length === 1) {
      return filteredParticipants[0].nickname;
    } else {
      return "알 수 없음";
    }
  }, [participants, userId, maxLen]);
};

export default useChatRoomName;
