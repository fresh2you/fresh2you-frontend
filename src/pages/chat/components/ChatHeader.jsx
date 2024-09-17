import { useState } from "react";
import ArrowLeftIcon from "../../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import ListIcon from "../../../assets/icons/list.svg";
import DropDownMenu from "./DropDownMenu";
const ChatHeader = ({ nickname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="flex items-center p-3 border-b border-gray-300 fixed top-0 
    z-10 w-full bg-white justify-between"
    >
      <button
        onClick={() => navigate(-1)}
        className="text-gray-600 hover:text-gray-900 hover:border-transparent focus:outline-none
    justify-self-start bg-transparent p-0"
      >
        <ArrowLeftIcon className="w-4 h-4" />
      </button>
      <span className="text-lg font-semibold justify-self-center">{nickname}</span>
      <button className="hover:border-transparent focus:outline-none bg-transparent p-0" onClick={toggleDropdown}>
        <ListIcon className="w-8 h-8" />
      </button>
      {isOpen && <DropDownMenu />}
    </div>
  );
};
export default ChatHeader;
