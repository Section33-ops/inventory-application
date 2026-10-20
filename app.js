import e from 'express';

const app = e();
const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Inventory application is running on port ${port}`);
  }
});
