import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
    if (req.method === 'POST') {
        const { name, description, price, category_id } = req.body;
        const newActivity = await prisma.activities.create({
            data: {
                name,
                description,
                price,
                category_id,
            },
        });
        res.json(newActivity);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
