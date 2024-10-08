import type { Request, NextFunction } from 'express';
import type { ResponseWithInformation } from './sessionAuth.middleware';
import { logger } from '@/logger';

export const logAPIRequestURL = (
  req: Request,
  res: ResponseWithInformation,
  next: NextFunction
) => {
  logger.info(
    `API Request - ${req.method} - ${req.originalUrl} - ${JSON.stringify(res.locals)}`
  );

  next();
};
