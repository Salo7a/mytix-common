import {Subjects} from "../types/subjects";

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string,
        title: string,
        type?: string,
        price: number,
        userId: string
    }
}