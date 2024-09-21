interface DeliveryBoxProps {
  delivery: {
    id: number;
    name: string;
    phone: string;
    address: string;
    recipient: string;
  };
}

const DeliveryBox = ({ delivery }: DeliveryBoxProps) => {
  return (
    <section className="flex flex-col py-2 border-black border-y">
      <div className="font-bold">{delivery.name}</div>
      <div className="flex items-center justify-between w-full h-auto gap-2">
        <div className="flex gap-4">
          <div className="flex items-center justify-center px-0 break-keep">{delivery.recipient}</div>
          <div className="grow-0">
            <div>{delivery.phone}</div>
            <div>{delivery.address}</div>
          </div>
        </div>

        <button
          onClick={() => console.log(delivery.id)}
          className="items-end p-1 text-white min-w-16 bg-custom-gray-light"
        >
          수정
        </button>
      </div>
    </section>
  );
};

export default DeliveryBox;
