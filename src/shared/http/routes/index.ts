import { ticketRoutes } from '@ticket/http';
import { Router } from 'express';

const router = Router();

router.use('/tickets', ticketRoutes);

export { router };
