import { pool } from './pool.js';

export async function getAllGames() {
  const { rows } = await pool.query('SELECT * FROM games');
  return rows;
}

export async function insertGame(title, genre, releaseYear, console) {
  await pool.query(
    'INSERT INTO games (title, genre, release_year, console) VALUES($1, $2, $3, $4)',
    [title, genre, releaseYear, console],
  );
}
