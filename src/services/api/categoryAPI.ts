import { instance } from "@/instance";

const categoryAPI = {
  getCategories: async () => {
    const { data: response } = await instance.get("/categories");

    return response;
  },
};

export default categoryAPI;
