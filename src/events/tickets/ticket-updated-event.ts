import {Subjects} from "../types/subjects";

export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string,
        title: string,
        type?: string,
        location?: string,
        version: number,
        price: number,
        userId: string,
        orderId?: string,
        updatedAt?: string
    }
}