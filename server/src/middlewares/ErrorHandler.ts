import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'

const notFound:ErrorRequestHandler = (error: any, req: Request, res: Response, next:NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    error: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
  })
  
};

export default notFound;
