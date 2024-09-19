import { overlay } from "overlay-kit";
import { Address } from "react-daum-postcode";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "@/instance";
import DaumAddressModal from "@/pages/mypage/deliveries/components/DaumAddressModal";

const useAddDeliveryModalLogics = () => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({ name: "", recipient: "", phone: "", mainAddress: "", subAddress: "" });

  const completeHandler = (data: Address) => {
    // 우편번호: data.zonecode
    const fullAddress = `${data.address} ${data.bname ? `(${data.bname})` : ""} ${
      data.buildingName ? `(${data.buildingName})` : ""
    }`;
    setFormData((prev) => ({ ...prev, mainAddress: fullAddress }));
  };

  const openDaumAddressModal = () => {
    overlay.open(
      ({ isOpen, unmount }) => {
        return <DaumAddressModal isOpen={isOpen} unmount={unmount} callback={completeHandler} />;
      },
      { overlayId: "DaumAddressModal" },
    );
  };

  const inputs = [
    { id: "name", label: "배송지 이름", value: formData.name, placeholder: "" },
    {
      id: "recipient",
      label: "받는 사람 이름",
      value: formData.recipient,
      placeholder: "",
    },
    { id: "phone", label: "받는 사람 전화번호", value: formData.phone, placeholder: "" },
    {
      id: "mainAddress",
      label: "주소",
      value: formData.mainAddress,
      placeholder: "",
      onfocus: openDaumAddressModal,
    },
    {
      id: "subAddress",
      label: "",
      value: formData.subAddress,
      placeholder: "",
    },
  ];

  const { mutateAsync: patchDeliveries } = useMutation({
    mutationFn: async ({
      name,
      recipient,
      phone,
      address,
    }: {
      name: string;
      recipient: string;
      phone: string;
      address: string;
    }) => {
      const result = await instance.post("/deliveries", {
        name,
        recipient,
        phone,
        address,
      });

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deliveries"] });
      overlay.unmount("AddDeliveryModal");
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await patchDeliveries({
      name: formData.name,
      recipient: formData.recipient,
      phone: formData.phone,
      address: `${formData.mainAddress}${formData.subAddress}`,
    });
    console.log(formData);
  };

  const onChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    if (id === "mainAddress") return;

    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return { openDaumAddressModal, onSubmit, inputs, formData, onChangeFormData, patchDeliveries };
};

export default useAddDeliveryModalLogics;
