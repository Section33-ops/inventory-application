import { Router } from 'express';

const inventoryRouter = Router();

inventoryRouter.get('/games', getAllGames);
inventoryRouter.get('/genres', getAllGenres);
inventoryRouter.get('/consoles', getAllConsoles);
inventoryRouter.post('/games/create', createGame);

export default inventoryRouter;
