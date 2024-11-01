import ImgFallback from "../../../assets/img/fallback.svg";
import LogoImg from "../../../assets/img/circle-logo.svg";

export const ParticipantImages: React.FC<{ participants: Participant[] }> = ({ participants }) => {
  return (
    <div className="mobile:w-2/12 max-w-[64px] mobile:min-w-[48px] flex flex-wrap justify-center relative">
      {participants.length > 0 ? (
        participants
          .slice(0, 4)
          .map((participant) =>
            participant.profileImageUrl ? (
              <img
                key={participant.userId}
                src={participant.profileImageUrl}
                alt={participant.nickname}
                className={`rounded-full ${participants.length > 1 ? "w-[50%] h-[50%]" : "w-full h-full"}`}
              />
            ) : (
              <ImgFallback key={participant.userId} className="w-full h-full rounded-full" alt={participant.nickname} />
            ),
          )
      ) : (
        <LogoImg className="w-full h-full rounded-full" alt="알 수 없음" />
      )}
    </div>
  );
};
