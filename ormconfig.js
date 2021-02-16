/* eslint-disable prettier/prettier */
module.exports = {
  type: process.env.CONECTION_DATABASE,
  host: process.env.HOST_DATABASE,
  port: process.env.PORT_DATABASE,
  username: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.NAME_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
