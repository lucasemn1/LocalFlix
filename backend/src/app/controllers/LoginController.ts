import { Request, Response } from "express";
import { getUserFromUsername, isLoginValid } from '../../util/login';

export class LoginController {
  static async login(request: Request, response: Response) {
    const username = String(request.body.username);

    if(await isLoginValid(username) ){
      return response.status(200).json();
    }
    else {
      return response.status(401).json({ err: 'Not authorized.' });
    }
  }
}