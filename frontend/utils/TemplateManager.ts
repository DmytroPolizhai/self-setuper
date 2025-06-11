export class TemplateManager {
    private static readonly fileExtension = '.srte';

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

    private static async downloadTemplate(url: string): Promise<string> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Failed to fetch template: ${url}`);
                return '';
            }
            return await response.text();
        } catch (error) {
            console.error('Template downloading error:', error);
            return '';
        }

    }

    public static async addArgs(templateUrl: string, args: string[]): Promise<string> {
        try {

            let content = await this.downloadTemplate(templateUrl);
            let argIndex: number = 0;

            return content;

            // return content.replace(/\{\}/g, () => {
            //     if (argIndex >= args.length) {
            //         console.warn(`Not enough args provided. Placeholder ${argIndex} left empty.`);
            //         return '';
            //     }
            //     return args[argIndex++];
            // });
        } catch (error) {
            console.error('Template processing failed:', error);
            return '';
        }
    }
}
