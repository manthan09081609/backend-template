import "reflect-metadata";

import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Config } from ".";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: Config.DB_HOST,
  port: Number(Config.DB_PORT),
  username: Config.DB_USERNAME,
  password: Config.DB_PASSWORD,
  database: Config.DB_NAME,
  timezone: Config.DB_TIMEZONE,
  charset: Config.DB_CHARSET,
  // Always put this false
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
