import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

type quotes = {
  ask: number,
  bid: number,
  inst: string,
  time: Date,
}

type getQuotationFunction = (req: Request, res: Response, next: NextFunction) => any;

const getQuotation:getQuotationFunction = async ( req, res, next) => {
  
  try {
    const { data } = await axios.get<quotes>('http://localhost:3000/quotes');
    res.json(data);    
  } catch (error) {
    next(error);
  }
}

export { getQuotation };
