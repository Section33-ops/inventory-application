export const getAllGames = (req, res) => {
  res.send('Get all games');
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

export const getHomePage = (req, res) => {
  const data = {
    title: 'Inventory',
    games: games,
  };
  res.render('index', data);
};

const games = [];
let id = 0;
export const createGame = (req, res) => {
  const { gameTitle, gameGenre, gameReleaseYear, gameConsole } = req.body;
  games.push({
    id: id++,
    title: gameTitle,
    genre: gameGenre,
    releaseYear: gameReleaseYear,
    console: gameConsole,
  });
  res.redirect('/');
};

export const getCreateGame = (req, res) => {
  const data = {
    title: 'Add Game',
  };
  res.render('createGameForm', data);
};
