import { Request, Response, NextFunction } from 'express';
import { isUserLogged } from '../../util/login';

export class LoginMiddleware {
  static async userLogged(request: Request, response: Response, next: NextFunction) {
    const { username } = request.headers;

    if( username && await isUserLogged(username.toString()) ) {
      return next();
    }

    return response.status(404).json({ err: 'Not authorized.' });
  } 
}