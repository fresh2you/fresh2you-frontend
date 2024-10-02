import { useState } from "react";
import SendIcon from "../../../assets/icons/send.svg";
import ListIcon from ".././.././../assets/icons/list.svg";
import DropDownMenu from "./DropDownMenu";
import "../../../styles/styles.css";
const ChatFooter = ({ chatInfo, navigate }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-white py-2  flex items-center 
    tablet:justify-center border-t w-full bottom-0 fixed left-0 mobile:justify-evenly tablet:gap-9"
    >
      <button className="custom-focus p-0 bg-white" onClick={toggleDropdown}>
        <ListIcon className="w-8 h-8 tablet-sm:w-9 tablet:h-9" />
      </button>
      {isOpen && <DropDownMenu action={setIsOpen} navigate={navigate} chatInfo={chatInfo} />}
      <input
        type="text"
        value={inputValue}
        className="bg-gray-200 w-8/12 p-2 rounded custom-focus"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="p-0 custom-focus ml-2 bg-white">
        <SendIcon className="w-7 h-7 tablet-sm:w-9 tablet:h-9" />
      </button>
    </div>
  );
};
export default ChatFooter;
