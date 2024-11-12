import userAPI from "@/services/api/userAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const usePointPagelogics = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: patchUserPoint } = useMutation({
    mutationFn: async (chargingPoint: number) => {
      try {
        const { data: result } = await userAPI.chargePoint(chargingPoint);

        return result;
      } catch (error: unknown) {
        console.log("포인트 충전 에러!");
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      navigate(-1);
    },
  });

  return { patchUserPoint };
};

export default usePointPagelogics;
