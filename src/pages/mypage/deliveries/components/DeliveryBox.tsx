interface DeliveryBoxProps {
  delivery: {
    deliveryAddressId: number;
    name: string;
    phone: string;
    address: string;
    detailedAddress: string;
    recipientName: string;
    postalCode: `${number}`;
  };
}

const DeliveryBox = ({ delivery }: DeliveryBoxProps) => {
  return (
    <section className="flex flex-col py-2 border-black border-y">
      <div className="font-bold">{delivery.name}</div>
      <div className="flex items-center justify-between w-full h-auto gap-2">
        <div className="flex gap-4">
          <div className="flex items-center justify-center px-0 font-semibold break-keep">{delivery.recipientName}</div>
          <div className="grow-0">
            <div>{delivery.phone || "01012345678"}</div>
            <div>
              {`(${delivery.postalCode}) `}
              {delivery.address}
              {delivery.detailedAddress}
            </div>
          </div>
        </div>

        <button
          onClick={() => console.log(delivery.deliveryAddressId)}
          className="items-end p-1 py-2 text-white rounded-lg min-w-16 bg-custom-gray-light"
        >
          수정
        </button>
      </div>
    </section>
  );
};

export default DeliveryBox;
