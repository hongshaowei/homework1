export class InnerItem {
    private status: string;
    private content: string;

    constructor(status: string, content: string) {
        this.status = status;
        this.content = content;
    }

    setStatus(s: string) {
        this.status = s;
    }

    getStatus(): string {
        return this.status;
    }

    getContent(): string {
        return this.content;
    }

}
