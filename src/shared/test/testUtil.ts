import { User } from '../../user/user.entity';

export default class TesteUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.email = 'valid@gmail.com';
    user.name = 'Bruce Wayne';
    user.id = '1';
    user.password = '123456789';
    return user;
  }
}
