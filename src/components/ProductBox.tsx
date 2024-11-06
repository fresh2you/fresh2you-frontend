import { Link } from "react-router-dom";
import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/bin.svg";
import { ProductBoxProps } from "@/components/types/type.productBox";

const ProductBox = ({
  item,
  hasOption = false,
  editCallback = undefined,
  deleteCallback = undefined,
}: ProductBoxProps) => {
  return (
    <Link
      to={`/product/${item.productId}`}
      className="relative flex items-center w-full gap-6 px-0 py-4 bg-white border-gray-300 rounded-none hover:text-inherit border-b-[1px]"
    >
      <div className="h-20 bg-gray-400 rounded-lg aspect-square">
        {item.imageUrl && <img src={item.imageUrl} alt={item.productName} className="object-cover w-full h-full" />}
      </div>

      <div className="flex flex-col items-start justify-start w-full gap-1 py-1">
        <div className="flex flex-col items-start gap-1">
          <div className="text-base font-semibold">{item.productName}</div>
          {/* <div className="text-base font-medium text-left text-gray-500 line-clamp-2">{item.productDescription}</div> */}
        </div>

        <div className="flex items-start h-full gap-1">
          {item.quantity && (
            <div className="text-base">
              수량: {item.quantity.toLocaleString()}개<span className="mx-2 text-custom-gray-dark">|</span>
            </div>
          )}

          <div className="text-base">가격: {item.price.toLocaleString()}원</div>
        </div>
      </div>

      {hasOption && (
        <div className="absolute right-0 top-[20%] flex items-center gap-1">
          {editCallback && (
            <button
              onClick={(e) => {
                e.preventDefault();
                // 수정 페이지로 이동
                editCallback();
              }}
              className=" p-0 bg-inherit text-custom-gray-dark tablet:top-[30%] "
            >
              <EditIcon className="w-6 h-6 tablet:w-8 tablet:h-8" />
            </button>
          )}

          {deleteCallback && (
            <button
              onClick={(e) => {
                e.preventDefault();
                // 삭제 로직
                deleteCallback();
              }}
              className=" p-0 bg-inherit text-red-400 tablet:top-[30%]"
            >
              <DeleteIcon className="w-6 h-6 tablet:w-8 tablet:h-8" />
            </button>
          )}
        </div>
      )}
    </Link>
  );
};

export default ProductBox;
