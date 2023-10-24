import axios from 'axios';
import { AuthData } from '../../../base/types/user';
import {URL_AUTENTICACAO} from '../../../../framework/constantes/URL.API';

async function signIn(
  email: string,
  senha: string,
): Promise<AuthData | undefined> {
  try {
    const response = await axios.post(URL_AUTENTICACAO, {
      email,
      senha,
    });

    if (response.data.access_token) {
      return {
        access_token: response.data.access_token,
        user: response.data.user,
      };
    }
    return undefined;
  } catch (error) {
    throw new Error('Usuário ou senha inválidos');
  }
}

export const authService = {signIn};
