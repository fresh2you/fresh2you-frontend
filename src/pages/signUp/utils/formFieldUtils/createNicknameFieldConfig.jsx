import { mockCheckNicknameDuplicate } from '../mock/mockDuplicateCheck';
import { DuplicateCheckButton } from '../../component/buttons/DuplicateCheckBtn';
export const createNicknameFieldConfig = (formData, setFormData, setStatus, validity) => {
  return {
    label: '닉네임',
    type: 'text',
    value: formData.nickname,
    setValue: (value) => setFormData((prevFormData) => ({ ...prevFormData, nickname: value })),
    placeholder: '닉네임을 입력하세요',
    button: (
      <DuplicateCheckButton
        isValid={validity.isNicknameValid}
        onClick={() => mockCheckNicknameDuplicate(formData.nickname, setStatus)}
      />
    ),
  };
};
