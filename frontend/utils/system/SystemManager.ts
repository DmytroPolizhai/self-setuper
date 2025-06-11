import { SystemExtension } from "@/utils/system/types/SystemExtension";

export class SystemManager {
    static sysOptions = [
        {label: "Windows", value: SystemExtension.windows},
        {label: "Linux/MacOS", value: SystemExtension.others},
    ];
    static getDownloadCommand = (downloadLink: string, fileName: string) => {
        // Some logic here
        return `powershell -Command "(New-Object Net.WebClient).DownloadFile(${downloadLink})", ${fileName})`;
    }

    static currentSystemExtension = (): SystemExtension => {
        // Some logic here
        return SystemExtension.windows;
    };
}