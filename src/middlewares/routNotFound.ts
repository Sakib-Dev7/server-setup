import { NextFunction, Request, Response } from "express";

const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404).json({
    status: "fail",
    message: error.message,
  });
};

export default routeNotFound;
