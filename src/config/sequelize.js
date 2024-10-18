import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DIALECT = process.env.DB_DIALECT;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  user: DB_USERNAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

// Add a hook to modify query options before execution
sequelize.addHook('beforeFind', (options) => {
  options.raw = true; // Set raw: true for each query
});

// commands: 
//   sequelize migration:generate --name create-users
//   sequelize db:migrate
//   sequelize db:migrate:undo sequelize db:migrate:undo:all
//   sequelize db:migrate:undo:all
// package: npm install -g sequelize-cli
// sequelize-auto --host 127.0.0.1 --database sam_system --user root --port 3306 --dialect mysql

export default sequelize;
