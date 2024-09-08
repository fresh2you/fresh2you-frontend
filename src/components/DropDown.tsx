import { useEffect, useRef, useState } from 'react';
import DropDownOption from './DropDownOption';

interface DropDownProps {
  categories: string[];
  setCurrrentCategory: (category: string) => void;
}

const DropDown = ({ categories, setCurrrentCategory }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const clickOutside = (event: MouseEvent) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  return (
    <span className="relative inline-flex flex-col gap-2" ref={dropDownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full p-2 bg-white border border-black rounded-lg"
      >
        {'카테고리 선택'}
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] w-full ${
          isOpen ? 'flex' : 'hidden'
        } flex-col border rounded-lg bg-white`}
      >
        {categories.map((option, idx) => (
          <DropDownOption
            key={idx}
            option={option}
            onClick={() => {
              setCurrrentCategory(option);
              setIsOpen(false);
            }}
          />
        ))}
      </div>
    </span>
  );
};

export default DropDown;
