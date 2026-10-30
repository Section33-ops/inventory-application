import * as query from '../db/queries.js';

export const getAllGames = async (req, res) => {
  const games = await query.getAllGames();
  console.log(games);
  res.json(games);
};

export const getAllGenres = async (req, res) => {
  const genres = await query.getAllGenres();
  const data = {
    categoryName: 'Genres',
    category: genres,
    titleColumnName: 'genre_name',
  };
  res.render('category-view', data);
};

export const getAllConsoles = async (req, res) => {
  const consoles = await query.getAllConsoles();
  const data = {
    categoryName: 'Consoles',
    category: consoles,
    titleColumnName: 'console_name',
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
  const gameGenreNum = Number(gameGenre);
  const gameconsoleNum = Number(gameConsole);

  await query.insertGame(
    gameTitle,
    gameGenreNum,
    gameReleaseYear,
    gameconsoleNum,
  );
  res.redirect('/');
};

export const getCreateGame = (req, res) => {
  const data = {
    title: 'Add Game',
  };
  res.render('createGameForm', data);
};

export const getUpdateGame = async (req, res) => {
  const game = await query.getGameById(req.params.id);

  const data = {
    title: game.title,
    game: game,
  };
  res.render('updateGameForm', data);
};

export const postGameUpdate = async (req, res) => {
  const { gameTitle, gameGenre, gameReleaseYear, gameConsole } = req.body;

  const gameGenreNum = Number(gameGenre);
  const gameconsoleNum = Number(gameConsole);

  await query.updateGame(
    req.params.id,
    gameTitle,
    gameGenreNum,
    gameReleaseYear,
    gameconsoleNum,
  );

  res.redirect('/');
};

export const postGameDelete = async (req, res) => {
  await query.deleteGame(req.params.id);
  res.redirect('/');
};
