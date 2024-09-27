/* 모든 상품 목록 조회 */
declare interface IGetAllProductsResponse extends defaultApiResponse {
  data: {
    productList: {
      productId: number;
      sellerName: string;
      productName: string;
      productDescription: string;
      quantity: number;
      price: number;
      imageUrl: string;
    }[];

    pageNumber: number;
    pageSize: number;
    totalPageNumber: number;
  };
}

/* 상품 등록 */
declare interface IPostProductResponse extends defaultApiResponse {
  data: {
    id: number;
    name: string;
    createdAt: string;
  };
}

/* 상품 삭제 */
declare interface IDeleteProductResponse extends defaultApiResponse {
  data: {
    productId: number;
  };
}

/* 상품 좋아요 */
declare interface ILikeProductResponse extends defaultApiResponse {
  data: {
    productLikeId: number;
    productId: number;
    productName: string;
    likedAt: string;
  };
}

/* 상품 좋아요 취소 */
declare interface IDeleteLikeResponse extends defaultApiResponse {
  data: object;
}

/* 상품 구매 */
declare interface IBuyProductResponse extends defaultApiResponse {
  data: {
    productOrderId: number;
    productName: string;
    buyerName: string;
    totalPrice: number;
  };
}

/* 제품 상세 조회 */
declare interface IGetProductInfoResponse extends defaultApiResponse {
  data: {
    productId: number;
    productName: string;
    sellerName: string;
    price: number;
    quantity: number;
    description: string;
    imageUrl: string;
  };
}

/* 상품 수정 */
declare interface IPatchProductInfoResponse extends defaultApiResponse {
  data: {
    productId: 0;
  };
}

/* 좋아요한 모든 상품 목록 조회 */
declare interface IGetAllLikeProductResponse extends defaultApiResponse {
  data: {
    productList: {
      productId: number;
      productName: string;
      imageUrl: string;
      price: number;
    }[];
  };
}

/* 서비스 카테고리 조회 */
declare interface IGetCategoriesResponse extends defaultApiResponse {
  data: {
    categories: {
      categoryId: number;
      categoryName: string;
      subCategories: {
        categoryId: number;
        categoryName: string;
      }[];
    }[];
  };
}
