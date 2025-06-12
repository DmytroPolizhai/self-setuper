import {SystemExtension} from "@/utils/system/types/SystemExtension";
import {File} from '@/utils/files/File'
import {BuildData} from './FileBuilder.types'
import {CommandHandler} from "@/utils/CommandHandler";
import {CommandList} from "@/utils/CommandHandler.types";
import {SystemManager} from "@/utils/system/SystemManager";

export class FileBuilder {
    /**
     * Method for building/generating file for downloading links.
     * @param data - information for building.
     */
    public async newBuild(data: BuildData): Promise<File> {
        let builtFile: File = new File(data.fileName, data.extensionToBuild);
        const command: string = CommandHandler.getCommand({
            os: data.extensionToBuild,
            action: CommandList.Download,
            params: {
                url: "43",
                fileName: data.fileName,
            }
        });

        console.log(command)

        // builtFile.add<string>(command);
        //
        // for (let downloadedLinkId: number = 0; downloadedLinkId < data.links.length; downloadedLinkId++) {
        //     const link: string = data.links[downloadedLinkId]
        //
        //
        // }

        return builtFile;
    }

    /**
     * Use instead newBuild()
     * @deprecated
     */
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
