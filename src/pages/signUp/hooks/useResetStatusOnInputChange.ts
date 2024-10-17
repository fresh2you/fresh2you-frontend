import { useEffect } from "react";

export const useResetStatusOnInputChange = (
  email: string,
  nickname: string,
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>,
) => {
  useEffect(() => {
    if (email) {
      setStatus((prevStatus) => ({
        ...prevStatus,
        emailStatus: "",
      }));
    }
  }, [email, setStatus]);

  useEffect(() => {
    if (nickname) {
      setStatus((prevStatus) => ({
        ...prevStatus,
        nicknameStatus: "",
      }));
    }
  }, [nickname, setStatus]);
};
