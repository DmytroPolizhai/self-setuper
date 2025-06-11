export class File {
    private content: string = "";

    constructor(private fileName: string, private fileExtension: string) {
    }

    public getContent(): string {
        return this.content;
    }

    public getName(): string {
        return this.fileName;
    }

    public getFullName() {
        return this.fileName + this.fileExtension;
    }

    public addString = async (command: string) => {
        this.content += command + "\n";
    }
}