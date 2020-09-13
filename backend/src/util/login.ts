import { createConnection } from 'typeorm';
import { User } from '../app/entity/User';

export async function getUserFromUsername(username: string) {
  const connection = await createConnection();

  try{
    const user = await connection
      .getRepository(User)
      .createQueryBuilder('users')
      .where('users.nickname LIKE :username', { username })
      .getOne();

    await connection.close()
    return user;
  }
  catch(err) {
    console.log(err);
    await connection.close();
    return false;
  }
}

export async function isLoginValid(username: string) {
  if(await getUserFromUsername(username)) {
    return true;
  }
  else {
    return false;
  }
}