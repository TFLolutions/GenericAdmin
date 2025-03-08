export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface User {
    id: number;
    email: string;
    name: string;
    token: string;
  }
  
  export interface LoginResponse {
    user: User;
    token: string;
  }