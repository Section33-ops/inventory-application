import { Client } from 'pg';
import { config } from 'dotenv';

config();

const SQL = `
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS consoles;

CREATE TABLE IF NOT EXISTS consoles (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  genre VARCHAR ( 255 ),
  release_year SMALLINT,
  console VARCHAR ( 255 )
);

INSERT INTO consoles (name) 
VALUES 
('Atari 2600'),
 ('Nintendo Entertainment System (NES)'),
 ('Sega Master System'),
 ('Nintendo Game Boy'),
 ('Super Nintendo (SNES)'),
 ('Sega Genesis'),
 ('Sega Game Gear'),
 ('Sony PlayStation 1'),
 ('Nintendo 64'),
 ('Sega Saturn'),
 ('Game Boy Color'),
 ('Sony PlayStation 2'),
 ('Nintendo GameCube'),
 ('Original Xbox'),
 ('Sega Dreamcast'),
 ('Game Boy Advance'),
 ('Xbox 360'),
 ('Sony PlayStation 3'),
 ('Nintendo Wii'),
 ('Nintendo DS'),
 ('PlayStation Portable (PSP)');

VALUES 
  ('Platformer'),
  ('Shoot ''Em Ups'),
  ('RPG'),
  ('Beat ''Em Ups'),
  ('Action-Adventure'),
  ('Arcade/Maze'),
  ('Fighting'),
  ('Run and Gun'),
  ('Sports'),
  ('Racing'),
  ('Simulation'),
  ('Strategy');

INSERT INTO games (title, genre, release_year, console)
VALUES ('Super Mario Bros', 'Platformer', 1985, 'Nintendo Entertainment System (NES)');
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
