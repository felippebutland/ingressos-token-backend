import { PrismaClient, Ticket } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

async function save({ category, name }: Omit<Ticket, 'id'>) {
  return await prisma.ticket.create({
    data: {
      category,
      name,
      id: uuid(),
    },
  });
}

export { save };
