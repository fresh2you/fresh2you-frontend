import { useEffect, useRef, useState } from "react";
import MenuDropDownOption from "@/components/layout/components/MenuDropDownOption";
import IconMenu from "@/assets/icons/menu.svg";
import IconClose from "@/assets/icons/x-close.svg";

interface MenuDropDownProps {
  options: {
    name: string;
    to?: string;
    onClick?: () => void;
  }[];
}

const MenuDropDown = ({ options }: MenuDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const clickOutside = (event: MouseEvent) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-full gap-2" ref={dropDownRef}>
      <button onClick={() => setIsOpen((prev) => !prev)} className="h-full bg-white">
        {isOpen ? <IconClose className="w-6 h-6 text-custom-gray-dark" /> : <IconMenu className="w-6 h-6" />}
      </button>

      <div
        className={`z-50 fixed h-full left-0 top-14 w-full ${isOpen ? "flex" : "hidden"} flex-col rounded-lg bg-white`}
      >
        {options.map((option, idx) => (
          <MenuDropDownOption
            key={idx}
            option={option}
            onClick={() => {
              if (option.onClick) option.onClick();
              setIsOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuDropDown;
