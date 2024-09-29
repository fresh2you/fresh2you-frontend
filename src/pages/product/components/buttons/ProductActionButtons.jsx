import Button from "../buttons/Button";

const ProductActionButtons = ({ productId, navigate }) => {
  return (
    <div className="flex gap-2 mobile:mt-1 tablet-sm:mt-2">
      <Button
        className="bg-custom-green text-white hover:bg-custom-green-hover"
        text="구매하기"
        onClick={() => navigate(`/purchase/${productId}`)}
      />
      <Button
        className="bg-custom-gray-light text-custom-black hover:bg-custom-gray-dark"
        text="협상하기"
        onClick={() => navigate(`/chatting/${productId}`)}
      />
    </div>
  );
};

export default ProductActionButtons;
