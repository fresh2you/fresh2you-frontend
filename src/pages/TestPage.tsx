import React, { useEffect, useState } from "react";
import api from "./test";
import { AxiosError } from "axios";

const TestPage = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    (async function test() {
      try {
        const response = await api.getAllBoard();

        console.log(response);
      } catch (e: unknown) {
        const error = e as AxiosError<{
          message: string;
        }>;

        const errorMessage = error?.response?.data.message;

        setResult("error: " + errorMessage);
      }
    })();
  }, []);

  return (
    <div>
      Test
      <div>{result}</div>
    </div>
  );
};

export default TestPage;
