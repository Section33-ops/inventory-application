import { Router } from 'express';
import * as inventoryController from '../controllers/inventoryController.js';

const inventoryRouter = Router();

inventoryRouter.get('/', inventoryController.getHomePage);
inventoryRouter.get('/games', inventoryController.getAllGames);
inventoryRouter.get('/genres', inventoryController.getAllGenres);
inventoryRouter.get('/consoles', inventoryController.getAllConsoles);
inventoryRouter.post('/games/create', inventoryController.createGame);

export default inventoryRouter;
