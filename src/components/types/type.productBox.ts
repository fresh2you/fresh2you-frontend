interface BaseProductBoxProps {
  item: {
    productId: number;
    sellerName?: string;
    productName: string;
    productDescription?: string;
    quantity?: number;
    price: number;
    imageUrl: string;
  };
  hasOption?: boolean;
  editCallback?: () => void;
  deleteCallback?: () => void;
}

type OptionTypes =
  | {
      hasOption: true;
      editCallback: () => void;
      deleteCallback?: () => void;
    }
  | {
      hasOption: true;
      editCallback?: () => void;
      deleteCallback: () => void;
    }
  | {
      hasOption: false;
    };

export type ProductBoxProps = BaseProductBoxProps & OptionTypes;
