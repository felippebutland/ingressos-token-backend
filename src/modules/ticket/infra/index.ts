import { PrismaClient, Ticket } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

async function save({ category, name }: Omit<Ticket, 'id'>) {
  console.log('oi' + category + name);
  try {
    const soWhat = await prisma.ticket.create({
      data: {
        category,
        name,
        id: uuid(),
      },
    });

    console.log('aha' + soWhat);

    return soWhat;
  } catch (e) {
    console.log(e);
  }
}

export { save };
