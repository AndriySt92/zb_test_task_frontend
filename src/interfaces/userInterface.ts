export interface User {
    name: string
    email: string
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    name: string;
    email: string;
    token: string;
  }