import { instance } from '@/instance';

const userAPI = {
  // 세팅을 위한 임시 api
  getMyInfo: async () => {
    const response = await instance.get('/user');

    return response;
  },
};

export default userAPI;
