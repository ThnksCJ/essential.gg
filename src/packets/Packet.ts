import * as uuid from "uuid";

export class Packet<T = any> {
    public name: string;
    public uuid: string;
    public data: T;

    constructor(name: string, data?: T) {
        this.name = name;
        this.uuid = uuid.v4()
        this.data = data ?? {} as T;
    }
}