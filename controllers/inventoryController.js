import * as query from '../db/queries.js';

export const getAllGames = async (req, res) => {
  const games = await query.getAllGames();
  console.log(games);
  res.json(games);
};

export const getAllGenres = (req, res) => {
  const data = {
    categoryName: 'Genres',
  };
  res.render('category-view', data);
};

export const getAllConsoles = (req, res) => {
  const data = {
    categoryName: 'Consoles',
  };
  res.render('category-view', data);
};

export const getHomePage = async (req, res) => {
  const games = await query.getAllGames();
  const data = {
    title: 'Inventory',
    games: games,
  };
  res.render('index', data);
};

export const createGame = async (req, res) => {
  const { gameTitle, gameGenre, gameReleaseYear, gameConsole } = req.body;
  await query.insertGame(gameTitle, gameGenre, gameReleaseYear, gameConsole);
  res.redirect('/');
};

export const getCreateGame = (req, res) => {
  const data = {
    title: 'Add Game',
  };
  res.render('createGameForm', data);
};

export const getUpdateGame = async (req, res) => {
  const games = await query.getAllGames();
  const game = await games.find((game) => game.id === Number(req.params.id));

  const data = {
    title: game.title,
    game: game,
  };
  res.render('updateGameForm', data);
};
