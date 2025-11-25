import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// axios 기본 설정
const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    /*console.log('🚀 API 요청:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      params: config.params,
      data: config.data,
    });*/
    return config;
  },
  (error) => {
    //console.error('❌ 요청 에러:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    /*console.log('✅ API 응답:', {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
    });*/
    return response;
  },
  (error) => {
    /*    console.error('❌ 응답 에러:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
    });*/
    return Promise.reject(error);
  },
);

// API 클라이언트 객체
const apiInstance = {
  // GET 요청
  get: async (url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response.data;
    } catch (error: any) {
      console.error(`GET ${url} 호출 실패:`, error);
      throw error;
    }
  },

  // POST 요청
  post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error: any) {
      console.error(`POST ${url} 호출 실패:`, error);
      throw error;
    }
  },

  // PUT 요청
  put: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      return response.data;
    } catch (error: any) {
      console.error(`PUT ${url} 호출 실패:`, error);
      throw error;
    }
  },

  // DELETE 요청
  delete: async (url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error: any) {
      console.error(`DELETE ${url} 호출 실패:`, error);
      throw error;
    }
  },

  // 원본 axios 인스턴스 접근 (필요시)
  instance: axiosInstance,
};

export default apiInstance;
