import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { statusCode = 500 } = err;
  const isErrorInternal = statusCode === 500;
  const message = isErrorInternal ? `На сервере произошла ошибка ${JSON.stringify(err)} ${JSON.stringify(req)}` : err.message;
  res.status(statusCode).send({ message });
  next();
};

export default errorHandler;
