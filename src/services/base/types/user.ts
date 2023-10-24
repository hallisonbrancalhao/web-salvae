export interface User {
    cpf: string;
    nome: string;
    sobrenome: string;
    email: string;
  }
  
  export interface AuthData {
    access_token: string;
    user: User;
  }
  