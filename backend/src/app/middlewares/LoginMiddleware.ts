import { Request, Response, NextFunction } from 'express';
import { isLoginValid } from '../../util/login';

export class LoginMiddleware {
  static async userLogged(request: Request, response: Response, next: NextFunction) {
    const { username } = request.headers;

    if( username && await isLoginValid(username.toString()) ) {
      return next();
    }

    return response.status(401).json({ err: 'Not authorized.' });
  } 
}