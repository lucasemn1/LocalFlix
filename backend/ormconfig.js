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
      "build/app/entity/**/*.js"
   ],
   migrations: [
      "build/database/migration/**/*.js"
   ],
   subscribers: [
      "build/subscriber/**/*.js"
   ],
   cli: {
      entitiesDir: "build/app/entity",
      migrationsDir: "build/database/migration",
      subscribersDir: "build/subscriber"
   }
}

module.exports = dbConfig;