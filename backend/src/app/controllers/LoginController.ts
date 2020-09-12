import { Request, Response } from "express";
import { isLoginValid } from '../../util/login';

export class LoginController {
  static async login(request: Request, response: Response) {
    console.log(request)

    if( request.body && isLoginValid(String(request.body.username)) ){
      return response.status(200).json();
    }
    else {
      return response.status(401).json({ err: 'Not authorized.' });
    }
  }
}