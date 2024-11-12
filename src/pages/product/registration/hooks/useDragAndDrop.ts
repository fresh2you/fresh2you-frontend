import { useState } from "react";

const useDragAndDrop = () => {
  const [fileName, setFileName] = useState<string>("");
  const [isDragOver, setIsDragOver] = useState(false);
  return { fileName, setFileName, isDragOver, setIsDragOver };
};

export default useDragAndDrop;
