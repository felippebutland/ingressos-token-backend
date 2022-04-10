import { Ticket } from '@prisma/client';
import { save } from '@ticket/infra';
import { Router } from 'express';

export const ticketRoutes = Router();

ticketRoutes.post('/', async (req, res) => {
  const { category, name }: Ticket = req.body;
  console.log('mahoe');

  return res.status(201).json(await save({ category, name }));
});
