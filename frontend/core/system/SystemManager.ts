import { ScriptExtension } from "@/shared/types";

/**
 * Use CommandHandler instead.
 * @deprecated
 */
export class SystemManager {
    static sysOptions = [
        {label: "Windows", value: ScriptExtension.windows},
        {label: "Linux/MacOS", value: ScriptExtension.others},
    ];


    static getDownloadCommand = (extension: ScriptExtension, downloadLink: string, fileName: string) => {
        // Some logic here
        switch (extension) {
            case ScriptExtension.windows:
                return `powershell -Command "(New-Object Net.WebClient).DownloadFile('${downloadLink}', '${fileName}')"`;
            case ScriptExtension.others:
                return `no command`
        }
    }
}