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

  const handleOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // 현재 포커스를 잃은 요소에서 다음 포커스를 받는 요소 확인
    const currentTarget = e.currentTarget as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;

    // 다음 포커스가 드롭다운 내부 요소인지 확인
    if (!currentTarget.contains(relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={dropDownRef}
      role="menu"
      onBlur={handleOnBlur}
      className="flex-col hidden h-full gap-2 tablet:flex desktop:hidden"
    >
      <button onClick={() => setIsOpen((prev) => !prev)} className="h-full p-0 bg-white">
        {isOpen ? <IconClose className="w-7 h-7 text-custom-gray-dark" /> : <IconMenu className="w-7 h-7" />}
      </button>

      <div
        className={`z-50 fixed h-full left-0 w-full flex flex-col rounded-lg bg-white
          transform transition-all duration-300 ease-in-out origin-top
          ${
            isOpen
              ? "h-[calc(100vh-3.5rem)] top-14 scale-y-100 opacity-100"
              : "h-0 top-14 scale-y-0 opacity-0 pointer-events-none"
          }`}
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
