import { Request, Response, NextFunction } from 'express';
import { createConnection } from 'typeorm';
import { User } from '../entity/User';

export class LoginMiddleware {
  static async userLogged(request: Request, response: Response, next: NextFunction) {
    const connection = await createConnection();

    try {
      const { username } = request.headers

      const user = await connection
        .getRepository(User)
        .createQueryBuilder('users')
        .where('users.nickname LIKE :username', { username })
        .getOne();

      await connection.close();

      if( user ) {
        return next();
      }
  
      return response.status(404).json({ err: 'Not authorized.' });
    }
    catch(err) {
      await connection.close();
      return response.status(400).json({ err });
    }
  } 
}