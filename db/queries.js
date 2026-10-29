import { pool } from './pool.js';

export async function getAllGames() {
  const SQL = `
    SELECT games.title, games.release_year, genres.genre_name, consoles.console_name
    FROM games
    INNER JOIN genres ON games.genre_id = genres.id
    INNER JOIN consoles ON games.console_id = consoles.id;`;
  const { rows } = await pool.query(SQL);
  return rows;
}

export async function getGameById(gameId) {
  const { rows } = await pool.query('SELECT * FROM games WHERE id = $1', [
    gameId,
  ]);
  return rows[0];
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

export async function deleteGame(gameId) {
  await pool.query('DELETE FROM games WHERE id = $1', [gameId]);
}
