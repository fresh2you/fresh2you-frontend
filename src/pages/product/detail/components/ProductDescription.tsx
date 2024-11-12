const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="mt-8">
      <p className="whitespace-pre-line text-custom-p">{description}</p>
    </div>
  );
};

export default ProductDescription;
