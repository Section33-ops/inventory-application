import { AppError } from '../utils/AppError.js';

const handlePostgresError = (err) => {
  switch (err.code) {
    case '23505':
      return new AppError('This record already exists.', 409);
    case '23503':
      return new AppError('Invalid reference: Related record not found.', 400);
    case '22P02':
      return new AppError('Invalid data format provided.', 400);
    default:
      return new AppError('Databse operation failed.', 500);
  }
};

export const errorHandler = (err, req, res, next) => {
  console.error('Error Logged:', err);

  let error = { ...err };
  error.message = err.message;

  if (err.code) {
    error = handlePostgresError(err);
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Something went wrong on the server';

  res.status(statusCode).json({
    status: 'error',
    message: message,
  });
};
