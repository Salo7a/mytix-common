import Subjects from "./common/subjects";

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string,
        title: string,
        price: number,
        userId: string
    }
}