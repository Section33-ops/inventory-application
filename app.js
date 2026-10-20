import e from 'express';
import inventoryRouter from './routes/inventoryRoutes.js';
import { configDotenv } from 'dotenv';

configDotenv();

const app = e();
const port = process.env.PORT;

app.use('/', inventoryRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Inventory application is running on port ${port}`);
  }
});
