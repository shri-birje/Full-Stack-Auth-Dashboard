import { Request, Response, NextFunction } from "express";

export const validate =
  (requiredFields: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const missingFields = requiredFields.filter(
      (field) => !req.body[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Validation error",
        missingFields
      });
    }

    next();
  };
