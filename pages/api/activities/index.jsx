import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const activities = await prisma.activities.findMany();
        res.json(activities);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
