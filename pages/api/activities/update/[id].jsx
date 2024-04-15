import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
    const activityId = req.query.id;

    if (req.method === 'PUT') {
        const { name, description, price, category_id } = req.body;
        const updatedActivity = await prisma.activities.update({
            where: { activity_id: parseInt(activityId) },
            data: {
                name,
                description,
                price,
                category_id,
            },
        });
        res.json(updatedActivity);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
