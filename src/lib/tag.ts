export class Tag {

    text: string;

    weight?: number;
    image?: string;

    constructor(init?: Partial<Tag>) {
        Object.assign(this, init);
    }

}
