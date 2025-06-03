export class Templater {
    private static readonly fileExtension = '.template';

    /**
     * Check if the file has the .template extension
     */
    private static isTemplate(fileName: string): boolean {
        return fileName.endsWith(this.fileExtension);
    }

    /**
     * Fetch template content from a URL, replace `{}` placeholders with args,
     * and return the processed string.
     */
    public static async passArgsWeb(templateUrl: string, args: string[]): Promise<string> {
        if (!this.isTemplate(templateUrl)) {
            console.warn(`Skipped: "${templateUrl}" is not a template file.`);
            return '';
        }

        try {
            const response = await fetch(templateUrl);
            if (!response.ok) {
                console.error(`Failed to fetch template: ${templateUrl}`);
                return '';
            }
            const content = await response.text();

            let argIndex: number = 0;
            return content.replace(/\{\}/g, () => {
                if (argIndex >= args.length) {
                    console.warn(`Not enough args provided. Placeholder ${argIndex} left empty.`);
                    return '';
                }
                return args[argIndex++];
            });
        } catch (err) {
            console.error('Template processing failed:', err);
            return '';
        }
    }
}
