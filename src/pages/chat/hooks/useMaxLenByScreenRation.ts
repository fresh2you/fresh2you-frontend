import { useState, useEffect } from "react";

const useMaxLengthByScreenRatio = (threshold: number, maxLimit: number) => {
  const [maxLength, setMaxLength] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = width / height;
      const calculatedMaxLength = Math.floor(ratio * threshold);
      setMaxLength(Math.min(calculatedMaxLength, maxLimit));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold, maxLimit]);

  return maxLength;
};

export default useMaxLengthByScreenRatio;
