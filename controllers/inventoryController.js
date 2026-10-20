export const getAllGames = (req, res) => {
  res.send('Get all games');
};

export const getAllGenres = (req, res) => {
  res.send('Get all genres');
};

export const getAllConsoles = (req, res) => {
  res.send('Get all consoles');
};

export const getHomePage = (req, res) => {
  const data = {
    title: 'Inventory',
  };
  res.render('index', data);
};

export const createGame = (req, res) => {
  res.send('Create game');
};
