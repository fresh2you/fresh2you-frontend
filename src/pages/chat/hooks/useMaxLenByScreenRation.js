import { useState, useEffect } from "react";

const useMaxLengthByScreenRatio = () => {
  const [maxLength, setMaxLength] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = width / height;
      const calculatedMaxLength = Math.floor(ratio * 40);
      setMaxLength(calculatedMaxLength);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return maxLength;
};

export default useMaxLengthByScreenRatio;
