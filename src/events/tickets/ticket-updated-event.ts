import {Subjects} from "../types/subjects";

export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string,
        title: string,
        type?: string,
        price: number,
        userId: string
    }
}