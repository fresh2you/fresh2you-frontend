import { mockCheckEmailDuplicate } from '../mock/mockDuplicateCheck';
import { DuplicateCheckButton } from '../../component/buttons/DuplicateCheckBtn';
export const createEmailFieldConfig = (formData, setFormData, validity, setStatus) => {
  return {
    label: '이메일 주소',
    type: 'email',
    value: formData.email,
    setValue: (value) => setFormData((prevFormData) => ({ ...prevFormData, email: value })),
    placeholder: '이메일을 입력하세요',
    autoComplete: 'email',
    button: (
      <DuplicateCheckButton
        isValid={validity.isEmailValid}
        onClick={() => mockCheckEmailDuplicate(formData.email, setStatus)}
      />
    ),
  };
};
