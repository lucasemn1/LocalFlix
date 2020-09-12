import { createConnection } from 'typeorm';
import { User } from '../app/entity/User';

export async function isLoginValid(username: string) {
  const connection = await createConnection();

  try{
    const user = await connection
      .getRepository(User)
      .createQueryBuilder('users')
      .where('users.nickname LIKE :username', { username })
      .getOne();

    await connection.close()
    return user ? true: false;
  }
  catch(err) {
    console.log(err);
    await connection.close();
    return false;
  }
}