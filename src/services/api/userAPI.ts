import { instance } from "@/instance";

const userAPI = {
  chargePoint: async (point: number) => {
    const { data: response } = await instance.post("/members/point-charge", {
      point,
    });

    return response;
  },

  getDeliveries: async () => {
    const { data: response } = await instance.get("/members/delivery-addresses");

    return response;
  },

  addDelivery: async ({
    recipientName,
    phone,
    address,
    detailedAddress,
    postalCode,
    isDefault,
  }: {
    recipientName: string;
    phone: string;
    address: string;
    detailedAddress: string;
    postalCode: string;
    isDefault: boolean;
  }) => {
    const { data: response } = await instance.post("/members/delivery-addresses", {
      recipientName,
      phone,
      address,
      detailedAddress,
      postalCode,
      isDefault,
    });

    return response;
  },

  deleteAllDeliveries: async () => {
    const { data: response } = await instance.delete("/members/delivery-addresses");

    return response;
  },

  getUserInfo: async () => {
    const { data: response } = await instance.get("/members/profile");

    return response;
  },

  patchUserProfile: async ({ nickname, image }: { nickname: string; image: File | null }) => {
    const request = { nickname: nickname };

    const formData = new FormData();
    formData.append("request", JSON.stringify(request));
    if (image) formData.append("image", image);

    const { data: response } = await instance.patch("/members/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  },

  deleteDelivery: async (deliveryAddressId: number) => {
    const { data: response } = await instance.delete(`/members/delivery-addresses/${deliveryAddressId}`);

    return response;
  },

  patchDelivery: async ({
    deliveryAddressId,
    recipientName,
    phone,
    address,
    detailedAddress,
    postalCode,
    isDefault,
  }: {
    recipientName: string;
    phone: string;
    address: string;
    detailedAddress: string;
    postalCode: string;
    isDefault: boolean;
    deliveryAddressId: number;
  }) => {
    const { data: response } = await instance.patch(`/members/delivery-addresses/${deliveryAddressId}`, {
      recipientName,
      phone,
      address,
      detailedAddress,
      postalCode,
      isDefault,
    });

    return response;
  },

  /* 판매자 인증에 사용되는 API */
  requestSMSCode: async (phoneNumber: string) => {
    const { data: response } = await instance.post("/auth/sms", undefined, {
      params: {
        phoneNumber,
      },
    });

    return response;
  },

  verifySMSCode: async ({ phoneNumber, verificationCode }: { phoneNumber: string; verificationCode: string }) => {
    const { data: response } = await instance.post("/auth/sms/verify", undefined, {
      params: {
        phoneNumber,
        verificationCode,
      },
    });

    return response;
  },
};

export default userAPI;
