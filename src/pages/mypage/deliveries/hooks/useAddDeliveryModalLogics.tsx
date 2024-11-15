import { overlay } from "overlay-kit";
import { Address } from "react-daum-postcode";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DaumAddressModal from "@/pages/mypage/deliveries/components/DaumAddressModal";
import userAPI from "@/services/api/userAPI";

const useAddDeliveryModalLogics = () => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    recipientName: "",
    phone: "",
    postalCode: "",
    address: "",
    detailedAddress: "",
    isDefault: false,
  });

  const completeHandler = (data: Address) => {
    // 우편번호: data.zonecode
    const fullAddress = `${data.address} ${data.bname ? `(${data.bname})` : ""} ${
      data.buildingName ? `(${data.buildingName})` : ""
    }`;
    const postalCode = data.zonecode;

    //console.log(data.zonecode, fullAddress);

    setFormData((prev) => ({ ...prev, address: fullAddress, postalCode }));
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
    /* { id: "name", label: "배송지 이름", value: formData.name, placeholder: "" }, */
    {
      id: "recipientName",
      label: "받는 사람 이름",
      value: formData.recipientName,
      placeholder: "",
    },
    { id: "phone", label: "받는 사람 전화번호", value: formData.phone, placeholder: "" },
    {
      id: "address",
      label: "주소",
      value: formData.address,
      placeholder: "",
      onfocus: openDaumAddressModal,
    },
    {
      id: "detailedAddress",
      label: "",
      value: formData.detailedAddress,
      placeholder: "",
    },
  ];

  const { mutateAsync: patchDeliveries } = useMutation({
    mutationFn: async ({
      recipientName,
      phone,
      address,
      detailedAddress,
      postalCode,
      isDefault = false,
    }: {
      recipientName: string;
      phone: `${string}`;
      address: string;
      detailedAddress: string;
      postalCode: `${string}`;
      isDefault: boolean;
    }) => {
      const data = {
        recipientName,
        phone,
        address,
        detailedAddress,
        postalCode,
        isDefault,
      };

      const result = await userAPI.addDelivery(data);

      console.log(result);

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deliveries"] });
      overlay.unmount("AddDeliveryModal");
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    await patchDeliveries(formData);
  };

  const onChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    if (id === "address") return;

    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return { openDaumAddressModal, onSubmit, inputs, formData, onChangeFormData, patchDeliveries };
};

export default useAddDeliveryModalLogics;
