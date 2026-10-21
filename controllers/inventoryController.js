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
  };
  res.render('index', data);
};

export const createGame = (req, res) => {
  const { gameTitle, gameGenre, gameReleaseYear, gameConsole } = req.body;
  res.redirect('/');
};

export const getCreateGame = (req, res) => {
  const data = {
    title: 'Add Game',
  };
  res.render('createGameForm', data);
};
