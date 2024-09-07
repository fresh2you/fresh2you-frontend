import { useRef } from 'react';
export function getStepsConfig(
  formData,
  setFormData,
  status,
  setStatus,
  mockCheckEmailDuplicate,
  mockCheckNicknameDuplicate,
  handleConfirmPasswordChange,
  validity,
) {
  return {
    이메일입력: [
      {
        label: '이메일 주소',
        type: 'email',
        value: formData.email,
        setValue: (value) => setFormData({ ...formData, email: value }),
        placeholder: '이메일을 입력하세요',
        autoComplete: 'email',
        button: (
          <button
            key="email-duplicate-check"
            type="button"
            onClick={() => mockCheckEmailDuplicate(formData.email, status, setStatus)}
            className="flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap"
            style={{
              backgroundColor: validity.isEmailValid ? '#7D7D7D' : '#40A578',
              color: 'white',
              borderColor: 'transparent',
              outline: 'none',
            }}
          >
            {validity.isEmailValid ? '확인' : '중복 확인'}
          </button>
        ),
      },
    ],
    비밀번호입력: [
      {
        label: '비밀번호',
        type: 'password',
        value: formData.password,
        setValue: (value) => setFormData({ ...formData, password: value }),
        placeholder: '대문자, 숫자, 특수문자를 포함하여 8자 이상',
        autoComplete: 'new-password',
      },
      {
        label: '이메일 주소',
        type: 'email',
        value: formData.email,
        setValue: (value) => setFormData({ ...formData, email: value }),
        placeholder: '이메일을 입력하세요',
        autoComplete: 'email',
        button: (
          <button
            key="email-duplicate-check"
            type="button"
            onClick={() => mockCheckEmailDuplicate(formData.email, status, setStatus)}
            className="flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap"
            style={{
              backgroundColor: validity.isEmailValid ? '#7D7D7D' : '#40A578',
              color: 'white',
              borderColor: 'transparent',
              outline: 'none',
            }}
          >
            {validity.isEmailValid ? '확인' : '중복 확인'}
          </button>
        ),
      },
    ],
    비밀번호확인: [
      {
        label: '비밀번호 확인',
        type: 'password',
        value: formData.confirmPassword,
        setValue: (value) =>
          handleConfirmPasswordChange(value, formData.password, formData, setFormData, status, setStatus),
        placeholder: '비밀번호를 다시 입력하세요',
        autoComplete: 'new-password',
      },
      {
        label: '비밀번호',
        type: 'password',
        value: formData.password,
        setValue: (value) => setFormData({ ...formData, password: value }),
        placeholder: '대문자, 숫자, 특수문자를 포함하여 8자 이상',
        autoComplete: 'new-password',
      },
      {
        label: '이메일 주소',
        type: 'email',
        value: formData.email,
        setValue: (value) => setFormData({ ...formData, email: value }),
        placeholder: '이메일을 입력하세요',
        autoComplete: 'email',
        button: (
          <button
            key="email-duplicate-check"
            type="button"
            onClick={() => mockCheckEmailDuplicate(formData.email, status, setStatus)}
            className="flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap"
            style={{
              backgroundColor: validity.isEmailValid ? '#7D7D7D' : '#40A578',
              color: 'white',
              borderColor: 'transparent',
              outline: 'none',
            }}
          >
            {validity.isEmailValid ? '확인' : '중복 확인'}
          </button>
        ),
      },
    ],
    닉네임입력: [
      {
        label: '닉네임',
        type: 'text',
        value: formData.nickname,
        setValue: (value) => setFormData({ ...formData, nickname: value }),
        placeholder: '닉네임을 입력하세요',
        button: (
          <button
            key="nickname-duplicate-check"
            type="button"
            onClick={() => mockCheckNicknameDuplicate(formData.nickname, status, setStatus)}
            className="flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap"
            style={{
              backgroundColor: validity.isNicknameValid ? '#7D7D7D' : '#40A578',
              color: 'white',
              borderColor: 'transparent',
              outline: 'none',
            }}
          >
            {validity.isNicknameValid ? '확인' : '중복 확인'}
          </button>
        ),
      },
      {
        label: '비밀번호 확인',
        type: 'password',
        value: formData.confirmPassword,
        setValue: (value) =>
          handleConfirmPasswordChange(value, formData.password, formData, setFormData, status, setStatus),
        placeholder: '비밀번호를 다시 입력하세요',
        autoComplete: 'new-password',
      },
      {
        label: '비밀번호',
        type: 'password',
        value: formData.password,
        setValue: (value) => setFormData({ ...formData, password: value }),
        placeholder: '대문자, 숫자, 특수문자를 포함하여 8자 이상',
        autoComplete: 'new-password',
      },
      {
        label: '이메일 주소',
        type: 'email',
        value: formData.email,
        setValue: (value) => setFormData({ ...formData, email: value }),
        placeholder: '이메일을 입력하세요',
        autoComplete: 'email',
        button: (
          <button
            key="email-duplicate-check"
            type="button"
            onClick={() => mockCheckEmailDuplicate(formData.email, status, setStatus)}
            className="flex items-center justify-center min-w-20 h-10 ml-2 rounded-md px-2 whitespace-nowrap"
            style={{
              backgroundColor: validity.isEmailValid ? '#7D7D7D' : '#40A578',
              color: 'white',
              borderColor: 'transparent',
              outline: 'none',
            }}
          >
            {validity.isEmailValid ? '확인' : '중복 확인'}
          </button>
        ),
      },
    ],
  };
}
