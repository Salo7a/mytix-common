import {Stan} from "node-nats-streaming";
import {Event} from "./event";


export abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: Stan;
    protected logging: boolean;

    constructor(client: Stan, logging: boolean = true) {
        this.client = client;
        this.logging = logging;
    }

    publish(data: T['data']): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }
                if (this.logging) console.log(`${this.subject} event published`);
                resolve()
            });
        })

    }
}