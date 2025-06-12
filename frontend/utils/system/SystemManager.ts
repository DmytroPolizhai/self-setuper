import { SystemExtension } from "@/utils/system/types/SystemExtension";

/**
 * Use CommandHandler instead.
 * @deprecated
 */
export class SystemManager {
    static sysOptions = [
        {label: "Windows", value: SystemExtension.Windows},
        {label: "Linux/MacOS", value: SystemExtension.Others},
    ];


    static getDownloadCommand = (extension: SystemExtension, downloadLink: string, fileName: string) => {
        // Some logic here
        switch (extension) {
            case SystemExtension.Windows:
                return `powershell -Command "(New-Object Net.WebClient).DownloadFile('${downloadLink}', '${fileName}')"`;
            case SystemExtension.Others:
                return `no command`
        }
    }
}