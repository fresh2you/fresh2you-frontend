import { instance } from "@/instance";

const termsAPI = {
  getAllTerms: async () => {
    const { data: response } = await instance.get("/terms");

    return response;
  },

  getTermDetailById: async (termsId: number) => {
    const { data: response } = await instance.get(`/terms/${termsId}`);

    return response;
  },
};

export default termsAPI;
