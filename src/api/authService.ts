import axios, { AxiosResponse } from 'axios';
import { LoginCredentials, User, LoginResponse } from '../types/auth.types';

const API_URL = process.env.REACT_APP_API_URL || 'https://tu-api.com/api';

// Configurar interceptores con tipos
axios.interceptors.request.use(
  (config) => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user: User = JSON.parse(userStr);
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(
        `${API_URL}/login`,
        credentials
      );
      
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: (): void => {
    localStorage.removeItem('user');
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }
};

export default authService;