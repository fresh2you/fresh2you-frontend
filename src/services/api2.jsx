export const api2 = {
  async checkEmailDuplicate(email) {
    try {
      const response = await fetch(`/api/member/check-email?email=${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error('네트워크 응답이 정상적이지 않습니다.');
      }

      const result = await response.json();

      return result.success;
    } catch (error) {
      console.error('이메일 중복 확인 중 오류 발생:', error);
      return false;
    }
  },
  async checkNicknameDuplicate(nickname) {
    try {
      const response = await fetch(`/api/member/check-nickname?nickname=${encodeURIComponent(nickname)}`);
      if (!response.ok) {
        throw new Error('네트워크 응답이 정상적이지 않습니다.');
      }

      const result = await response.json();

      return result.success;
    } catch (error) {
      console.error('닉네임 중복 확인 1111중 오류 발생:', error);
      return false;
    }
  },
};
