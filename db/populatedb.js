import { Client } from 'pg';
import { config } from 'dotenv';

config();

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  genre VARCHAR ( 255 ),
  release_year SMALLINT,
  console VARCHAR ( 255 )
);

INSERT INTO games (title, genre, release_year, console)
VALUES ('Super Mario Bros', 'Platformer', 1985, 'Nintendo Entertainment System (NES)')
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

try {
  main();
} catch (error) {
  console.error(error);
}
