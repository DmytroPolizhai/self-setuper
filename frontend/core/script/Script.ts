export class Script {
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

    public add<T>(data: T): void {
        function isArray<T>(value: T | unknown[]): value is unknown[] {
            return Array.isArray(value);
        }

        if (isArray(data)) {
            for (const K of data) {
                this.content += K + "\n"
            }
        } else {
            this.content += data + "\n";
        }
    }



    /**
     * Use add<string> instead.
     * @deprecated
     */
    public addString = async (command: string) => {
        this.content += command + "\n";
    }
}