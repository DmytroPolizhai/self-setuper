import { SystemExtension } from "@/utils/system/types/SystemExtension";
import { File } from '@/utils/files/types/File'

import { SystemManager } from "../system/SystemManager";

export class FileBuilder {
    constructor(private systemType: System) {
    }

    public build = async (downloadLinks: string[], outFileName: string = 'setuper') => {
        let outputFile: File = new File(outFileName, SystemManager.currentSystemExtension.toString());

        for (let index: number = 0; index < downloadLinks.length; index++) {
            const downloadLink = downloadLinks[index];

            const command: string = SystemManager.getDownloadCommand(downloadLink, index.toString());

            await outputFile.addString(command);
        }
        return outputFile;
    }
}
