import axios from 'axios';
import { api2 } from '../../../services/api2';
export const checkEmailDuplicate = async (email, setStatus) => {
  try {
    const response = await axios.post('/api/check-email', { email });
    const isDuplicate = response.data.isDuplicate;
    setStatus((prevStatus) => ({ ...prevStatus, emailStatus: isDuplicate ? '이메일 주소가 이미 사용 중입니다.' : '' }));
  } catch (error) {
    console.error('이메일 중복 확인 중 오류 발생:', error);
  }
};

export const checkNicknameDuplicate = async (nickname, setStatus) => {
  try {
    const response = await axios.post('/api/check-nickname', { nickname });
    const isDuplicate = response.data.isDuplicate;
    setStatus((prevStatus) => ({ ...prevStatus, nicknameStatus: isDuplicate ? '닉네임이 이미 사용 중입니다.' : '' }));
  } catch (error) {
    console.error('닉네임 중복 확인 중 오류 발생:', error);
  }
};
