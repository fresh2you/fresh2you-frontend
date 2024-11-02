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

  fetchProducts: async ({
    categoryId = undefined,
    page = 0,
    size = 20,
  }: {
    categoryId?: number;
    page: number;
    size: number;
  }) => {
    const params: { categoryId?: number; page: number; size: number } = {
      page,
      size,
    };

    if (categoryId !== undefined) {
      params.categoryId = categoryId;
    }

    const { data: response } = await instance.get("/products", { params });

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

  postProduct: async ({ name, price, description, categoryId, quantity, image }: ProductDataType) => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append(
      "request",
      JSON.stringify({
        name,
        quantity,
        description,
        price,
        categoryId,
      }),
    );

    const { data: response } = await instance.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

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

  getSellingProducts: async ({ page = 0, pageSize }: { page: number; pageSize: number }) => {
    const { data: response } = await instance.get<IGetSellingProductResponse>("/products/seller", {
      params: {
        page,
        size: pageSize,
      },
    });

    return response;
  },

  getLikeProducts: async () => {
    const { data: response } = await instance.get<ILikeProductResponse>("/products/like");

    return response;
  },
};

export default productAPI;
