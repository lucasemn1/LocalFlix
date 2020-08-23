const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const dbConfig = {
   type: "mysql",
   host: "localhost",
   port: 3306,
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   synchronize: true,
   logging: false,
   entities: [
      "src/app/entity/**/*.ts"
   ],
   migrations: [
      "src/database/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      entitiesDir: "src/app/entity",
      migrationsDir: "src/database/migration",
      subscribersDir: "src/subscriber"
   }
}

module.exports = dbConfig;