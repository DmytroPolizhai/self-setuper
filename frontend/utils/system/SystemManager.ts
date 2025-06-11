import { SystemExtension } from "@/utils/system/types/SystemExtension";

export class SystemManager {
    static sysOptions = [
        {label: "Windows", value: SystemExtension.windows},
        {label: "Linux/MacOS", value: SystemExtension.others},
    ];
    static getDownloadCommand = (extension: SystemExtension, downloadLink: string, fileName: string) => {
        // Some logic here
        switch (extension) {
            case SystemExtension.windows:
                return `powershell -Command "(New-Object Net.WebClient).DownloadFile('${downloadLink}', '${fileName}')"`;
            case SystemExtension.others:
                return `no command`
        }
    }
}