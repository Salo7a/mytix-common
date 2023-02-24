import {Message, Stan} from "node-nats-streaming";
import {Event} from "./event";

export abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    protected logging: boolean;
    protected client: Stan;
    protected ackWait = 5 * 1000;

    abstract onMessage(data: T['data'], msg: Message): void

    constructor(client: Stan, logging: boolean = true) {
        this.client = client;
        this.logging = logging;
    }

    subscriptionOptions() {
        return this.client.subscriptionOptions()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDeliverAllAvailable()
            .setDurableName(this.queueGroupName);
    }

    listen() {
        const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());

        subscription.on('message', (msg: Message) => {
            if (this.logging) console.log(`Message Received: ${this.subject} => ${this.queueGroupName}`);
            const parsedData = this.parseMessage(msg);
            this.onMessage(parsedData, msg);
        });

    }

    parseMessage(msg: Message) {
        const data = msg.getData();
        if (typeof data === 'string') {
            return JSON.parse(data);
        } else {
            return JSON.parse(data.toString('utf8'));
        }
    }
}