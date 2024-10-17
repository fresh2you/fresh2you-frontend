import { useEffect } from "react";

interface FormData {
  email: string;
  password: string;
}

interface UseFormHandlersProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const useFormHandlers = ({ formData, setFormData, setError }: UseFormHandlersProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (formData.email || formData.password) {
      setError("");
    }
  }, [formData, setError]);

  return { handleChange };
};
