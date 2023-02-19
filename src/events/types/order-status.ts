export enum OrderStatus {
    // Order was created, but not yet reserved
    Created = 'created',

    // The ticket an order is trying to reserve has been already
    Duplicate = 'duplicate',

    // The user canceled the payment
    Cancelled = 'cancelled',

    // The ticket has expired
    Expired = 'expired',

    // Waiting for the user to complete payment
    AwaitingPayment = 'awaiting_payment',

    // The order has been completed successfully
    Completed = 'completed'
}