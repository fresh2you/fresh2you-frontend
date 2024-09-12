import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

const PurchaseForm = ({ recipientDetails, setRecipientDetails, error }) => {
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDetailedAddressChange = (e) => {
    setDetailedAddress(e.target.value);
  };

  const completeHandler = (data) => {
    const fullAddress = `${data.address} ${data.bname ? `(${data.bname})` : ''} ${
      data.buildingName ? `(${data.buildingName})` : ''
    }`;
    setRecipientDetails((prevDetails) => ({
      ...prevDetails,
      address: `${fullAddress} ${detailedAddress}`,
    }));
    setIsPostcodeVisible(false);
    setDetailedAddress('');
  };

  const openPostcode = () => {
    setIsPostcodeVisible(true);
  };

  const closePostcode = () => {
    setIsPostcodeVisible(false);
  };

  return (
    <div className="w-4/5 mt-4">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <label className="block text-lg font-semibold mb-2">받는 사람</label>
      <input
        type="text"
        name="recipientName"
        value={recipientDetails.recipientName}
        onChange={handleChange}
        className="w-80 p-2 border border-gray-300 rounded mb-4 focus:outline-none"
      />

      <label className="block text-lg font-semibold mb-2">전화번호</label>
      <input
        type="text"
        name="phoneNumber"
        value={recipientDetails.phoneNumber}
        onChange={handleChange}
        className="w-80 p-2 border border-gray-300 rounded mb-4 focus:outline-none"
      />

      <label className="block text-lg font-semibold mb-2">배송지 주소</label>
      <div className="flex flex-row items-center mb-2 md:w-7/12 w-full">
        <input
          name="address"
          value={recipientDetails.address}
          onChange={handleChange}
          className="w-full lg:flex-grow p-2 border border-gray-300 rounded focus:outline-none lg:mb-0"
          readOnly
        />
        <button
          type="button"
          onClick={openPostcode}
          className="bg-custom-green text-white hover:bg-custom-green-hover py-2 px-4 rounded ml-2 
          focus:outline-none whitespace-nowrap hover:border-transparent"
        >
          주소 찾기
        </button>
      </div>

      <input
        type="text"
        value={detailedAddress}
        onChange={handleDetailedAddressChange}
        placeholder="상세 주소를 입력해주세요"
        className="p-2 border border-gray-300 rounded mb-4 focus:outline-none md:w-7/12 w-full"
      />

      {isPostcodeVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-full max-w-3xl relative">
            <button
              type="button"
              onClick={closePostcode}
              className="absolute bottom-6 right-8 text-custom-black hover:border-transparent bg-custom-green 
              hover:text-white hover:bg-custom-green-hover transition z-30 focus:outline-none"
            >
              뒤로 가기
            </button>
            <DaumPostcodeEmbed onComplete={completeHandler} />
          </div>
        </div>
      )}
    </div>
  );
};
export default PurchaseForm;
