import { Injectable } from '@nestjs/common';
import {
  AccessToken,
  BaseResponse,
  SignInRequest,
  SignUpRequest,
  TokenResponse,
} from 'ums-proto';

@Injectable()
export class AuthService {
  public async signIn(signInReq: SignInRequest): Promise<TokenResponse> {
    console.log(signInReq);
    return {
      access: '123dsa',
      refresh: 'dsadasdas',
      responseStatus: {
        message: '123',
        statusCode: 'SUCCESS',
      },
    };
  }

  public async signUp(signUpReq: SignUpRequest): Promise<TokenResponse> {
    console.log(signUpReq);
    return 'test' as any;
  }

  public async signOut(accessToken: AccessToken): Promise<BaseResponse> {
    console.log(accessToken);
    return 'test' as any;
  }
}
