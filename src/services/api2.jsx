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
  async loginUser(formData) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, token: data.token };
      } else {
        // 서버에서 반환한 메시지가 있을 경우 사용
        let errorMessage = '로그인에 실패했습니다.';

        if (data.message) {
          // 이메일 또는 비밀번호에 관련된 오류를 하나의 메시지로 묶음
          if (data.message.includes('email') || data.message.includes('password')) {
            errorMessage = '이메일 또는 비밀번호를 확인해주세요.';
          }
        }

        return { success: false, message: errorMessage };
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      return { success: false, message: '서버에 문제가 발생했습니다.' };
    }
  },
};
