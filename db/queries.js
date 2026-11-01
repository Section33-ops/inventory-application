import { pool } from './pool.js';

export async function getAllGames() {
  const SQL = `
    SELECT games.id, games.title, games.release_year, genres.genre_name, consoles.console_name
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

export async function insertGame(title, genre_id, releaseYear, console_id) {
  const { rows } = await pool.query(
    'INSERT INTO games (title, genre_id, release_year, console_id) VALUES($1, $2, $3, $4) RETURNING *',
    [title, genre_id, releaseYear, console_id],
  );

  return rows[0];
}

export async function updateGame(gameId, title, genre, releaseYear, console) {
  const { rows } = await pool.query(
    'UPDATE games SET title = $2, genre_id = $3, release_year = $4, console_id = $5 WHERE id = $1 RETURNING *',
    [gameId, title, genre, releaseYear, console],
  );

  return rows[0];
}

export async function deleteGame(gameId) {
  const { rows } = await pool.query(
    'DELETE FROM games WHERE id = $1 RETURNING *',
    [gameId],
  );
  console.log(rows);
  return rows[0];
}

export async function getAllGenres() {
  const SQL = `
  SELECT * FROM genres`;

  const { rows } = await pool.query(SQL);
  return rows;
}

export async function getAllConsoles() {
  const SQL = `
  SELECT * FROM consoles`;

  const { rows } = await pool.query(SQL);
  return rows;
}
