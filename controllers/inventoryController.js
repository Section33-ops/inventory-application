import * as query from '../db/queries.js';
import { AppError } from '../utils/AppError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getAllGames = asyncHandler(async (req, res) => {
  const games = await query.getAllGames();
  console.log(games);
  res.json(games);
});

export const getAllGenres = asyncHandler(async (req, res) => {
  const genres = await query.getAllGenres();
  const data = {
    categoryName: 'Genres',
    category: genres,
    titleColumnName: 'genre_name',
  };
  res.render('category-view', data);
});

export const getAllConsoles = asyncHandler(async (req, res) => {
  const consoles = await query.getAllConsoles();
  const data = {
    categoryName: 'Consoles',
    category: consoles,
    titleColumnName: 'console_name',
  };
  res.render('category-view', data);
});

export const getHomePage = asyncHandler(async (req, res) => {
  const games = await query.getAllGames();
  const data = {
    title: 'Inventory',
    games: games,
  };
  res.render('index', data);
});

export const createGame = asyncHandler(async (req, res, next) => {
  const { gameTitle, gameGenre, gameReleaseYear, gameConsole } = req.body;
  const gameGenreNum = Number(gameGenre);
  const gameconsoleNum = Number(gameConsole);

  if (Number.isNaN(gameGenreNum) || Number.isNaN(gameconsoleNum)) {
    return next(new AppError('Bad Request', 400));
  }

  await query.insertGame(
    gameTitle,
    gameGenreNum,
    gameReleaseYear,
    gameconsoleNum,
  );
  res.redirect('/');
});

export const getCreateGame = (req, res) => {
  const data = {
    title: 'Add Game',
  };
  res.render('createGameForm', data);
};

export const getUpdateGame = asyncHandler(async (req, res, next) => {
  const game = await query.getGameById(req.params.id);

  if (!game) {
    return next(new AppError('Game not found', 404));
  }

  const data = {
    title: game.title,
    game: game,
  };
  res.render('updateGameForm', data);
});

export const postGameUpdate = asyncHandler(async (req, res, next) => {
  const { gameTitle, gameGenre, gameReleaseYear, gameConsole } = req.body;

  const gameGenreNum = Number(gameGenre);
  const gameconsoleNum = Number(gameConsole);

  if (Number.isNaN(gameGenreNum) || Number.isNaN(gameconsoleNum)) {
    return next(new AppError('Bad Request', 400));
  }

  await query.updateGame(
    req.params.id,
    gameTitle,
    gameGenreNum,
    gameReleaseYear,
    gameconsoleNum,
  );

  res.redirect('/');
});

export const postGameDelete = asyncHandler(async (req, res) => {
  await query.deleteGame(req.params.id);
  res.redirect('/');
});
