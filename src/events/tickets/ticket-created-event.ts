import {Subjects} from "../types/subjects";

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string,
        title: string,
        type?: string,
        location?: string,
        version: number,
        price: number,
        userId: string,
        createdAt?: string
    }
}