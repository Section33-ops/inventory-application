import { Router } from 'express';
import * as inventoryController from '../controllers/inventoryController.js';

const inventoryRouter = Router();

inventoryRouter.get('/', inventoryController.getHomePage);
inventoryRouter.get('/games', inventoryController.getAllGames);
inventoryRouter.get('/genres', inventoryController.getAllGenres);
inventoryRouter.get('/consoles', inventoryController.getAllConsoles);
inventoryRouter.get('/games/create', inventoryController.getCreateGame);
inventoryRouter.get('/game/update/:id', inventoryController.getUpdateGame);
inventoryRouter.post('/games/create', inventoryController.createGame);
inventoryRouter.post('/game/update/:id', inventoryController.postGameUpdate);
inventoryRouter.post('/game/delete/:id', inventoryController.postGameDelete);

export default inventoryRouter;
