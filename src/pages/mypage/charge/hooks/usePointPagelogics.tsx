import { instance } from "@/instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const usePointPagelogics = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: patchUserPoint } = useMutation({
    mutationFn: async (chargingPoint: number) => {
      const {
        data: { point: currentPoint },
      } = await instance.patch("/userInfo");

      const result = await instance.patch("/userInfo", {
        point: currentPoint + chargingPoint,
      });

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      navigate(-1);
    },
  });

  return { patchUserPoint };
};

export default usePointPagelogics;
