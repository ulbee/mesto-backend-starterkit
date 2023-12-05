import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { statusCode = 500 } = err;
  const isErrorInternal = statusCode === 500;
  const message = isErrorInternal ? err.message : `На сервере произошла ошибка ${JSON.stringify(err)}`;
  res.status(statusCode).send({ message });
  next();
};

export default errorHandler;
