import { instance } from "@/instance";

const productAPI = {
  getRecommendProductsByHistory: async () => {
    const { data: response } = await instance.get("/recommendations/order-history", {
      params: {
        size: 10,
      },
    });

    return response;
  },

  getRecommendProductsByRandom: async () => {
    const { data: response } = await instance.get("/recommendations/random", {
      params: {
        size: 10,
      },
    });

    return response;
  },

  getAllProducts: async ({ page = 0, size = 20 }: { page: number; size: number }) => {
    const { data: response } = await instance.get("/products", {
      params: {
        page,
        size,
      },
    });

    return response;
  },

  getSearchedProducts: async ({ keyword, page = 0, size = 20 }: { keyword: string; page: number; size: number }) => {
    const { data: response } = await instance.get("/products", {
      params: {
        keyword,
        page,
        size,
      },
    });

    return response;
  },

  getProductsByCategory: async ({
    categoryId,
    page = 0,
    size = 20,
  }: {
    categoryId: number;
    page: number;
    size: number;
  }) => {
    const { data: response } = await instance.get("/products", {
      params: {
        categoryId,
        page,
        size,
      },
    });

    return response;
  },

  postProduct: async ({
    name,
    quantity,
    description,
    price,
    categoryId,
    image,
  }: {
    name: string;
    quantity: number;
    description: string;
    price: number;
    categoryId: number;
    image: File;
  }) => {
    const { data: response } = await instance.post(
      "/products",
      {
        name,
        quantity,
        description,
        price,
        categoryId,
        image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response;
  },

  deleteProduct: async (productId: number) => {
    const { data: response } = await instance.delete("/products", {
      params: {
        productId,
      },
    });

    return response;
  },

  likeProduct: async (productId: number) => {
    const { data: response } = await instance.post(`/products/${productId}/like`);

    return response;
  },

  cancelLikeProduct: async (productId: number) => {
    const { data: response } = await instance.delete(`/products/${productId}/like`);

    return response;
  },

  purchaseProduct: async ({
    productId,
    deliveryAddressId,
    quantity,
  }: {
    productId: number;
    deliveryAddressId: number;
    quantity: number;
  }) => {
    const { data: response } = await instance.post(`/products/${productId}/buy`, {
      deliveryAddressId,
      quantity,
    });

    return response;
  },

  getProductDetails: async (productId: number) => {
    const { data: response } = await instance.get(`/products/${productId}`);

    return response;
  },

  patchProduct: async ({
    productId,
    name,
    quantity,
    description,
    price,
    categoryId,
    image,
  }: {
    productId: number;
    name: string;
    quantity: number;
    description: string;
    price: number;
    categoryId: number;
    image: File;
  }) => {
    const { data: response } = await instance.patch(
      `/products/${productId}`,
      {
        name,
        quantity,
        description,
        price,
        categoryId,
        image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response;
  },

  getLikeProducts: async () => {
    const { data: response } = await instance.get("/products/like");

    return response;
  },
};

export default productAPI;
