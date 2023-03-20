import prismaClient from "../../prisma";

interface DetailRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: DetailRequest) {
        
        const orderItems = await prismaClient.item.findMany({
           where: {
            order_id: order_id,
           },
           include: {
            product: true,
            order: true
           }
        })

        return orderItems;
    }
}

export { DetailOrderService }
