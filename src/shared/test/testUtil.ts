import { User } from '../../user/user.entity';

export default class TesteUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.email = 'valida@gmail.com';
    user.name = 'Bruce Wayne';
    user.id = '1';
    return user;
  }
}
