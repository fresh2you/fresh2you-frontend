export const mockCheckEmailDuplicate = async (email, setStatus) => {
  if (email === 'test@example.com') {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: '이메일 주소가 이미 사용 중입니다.' }));
  } else {
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: 'SUCCESS' }));
  }
  return email === 'test@example.com';
};

export const mockCheckNicknameDuplicate = async (nickname, setStatus) => {
  if (nickname === 'test') {
    setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: '닉네임이 이미 사용 중입니다.' }));
  } else {
    setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: 'SUCCESS' }));
  }
  return nickname === 'test';
};
