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

export async function updateGame(gameId, title, genre, releaseYear, console) {
  await pool.query(
    'UPDATE games SET title = $2, genre = $3, release_year = $4, console = $5 WHERE id = $1',
    [gameId, title, genre, releaseYear, console],
  );
}
