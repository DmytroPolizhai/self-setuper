import {FileDownloader} from "@/utils/FileDownloader";
import { OSType } from "@/models/OSType";

export async function buildFile(downloadLinks: string[], system: OSType) {
    let content = `@echo off\ncd .\n`;
    // const templateUri = `${system}/bat.template`;
    // TODO: Make backend server for this feature.
    // for (const downloadLink of downloadLinks) {
    //     const output = await Templater.passArgsWeb(templateUri, [
    //         downloadLink,
    //         system,
    //     ])
    //     if (output) {
    //         content += output + "\n";
    //     }
    // }
    // if (!content) {
    //     return null;
    // }

    // TODO: Remake file name generator.
    // Only works for windows.
    for (const link of downloadLinks) {
        content += `powershell -Command "(New-Object Net.WebClient).DownloadFile('${link}', '${link.substring(0, 5) + system}')`
    }
    content += `\npause`;


    await FileDownloader.downloadContent(content, `setup-${system.toString()}.bat`)
}