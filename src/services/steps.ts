import apiInstance from '@/services/api';

export const analyzeStep1 = {
  // 기본 GET 요청
  get: async (params?: any) => {
    try {
      const config = params ? { params } : {};

      return await apiInstance.get('/step', config);
    } catch (error) {
      console.error('Step1 API 호출 에러:', error);
      throw error;
    }
  },
};
