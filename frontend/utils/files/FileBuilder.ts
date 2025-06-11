import { SystemExtension } from "@/utils/system/types/SystemExtension";
import { File } from '@/utils/files/types/File'

import { SystemManager } from "../system/SystemManager";

export class FileBuilder {
    public build = async (downloadLinks: string[], extension: SystemExtension, outFileName: string = 'setuper') => {
        let outputFile: File = new File(outFileName, extension);
        await outputFile.addString(`@echo off\nmkdir .downloads\nattrib +h ".downloads"\ncd .downloads`)

        for (let index: number = 0; index < downloadLinks.length; index++) {
            const downloadLink = downloadLinks[index];

            const command: string = SystemManager.getDownloadCommand(extension, downloadLink, `${index.toString()}.exe`);

            await outputFile.addString(command);
        }

        await outputFile.addString(`powershell -Command "(New-Object -ComObject WScript.Shell).Popup('All files are downloaded!', 0, 'self-setuper', 0x40)"\npause`)

        return outputFile;
    }
}
