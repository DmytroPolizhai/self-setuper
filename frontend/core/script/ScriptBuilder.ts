import { Link } from "@/shared/types";
import { Script } from '@/core/script/Script'
import { BuildData } from './ScriptBuilder.types'
import { CommandHandler } from "@/core/CommandHandler";
import { CommandList } from "@/core/CommandHandler.types";

// Importing presets
import { ScriptBeginning, ScriptEnding } from '@/constants/Script'


export class ScriptBuilder {
    /**
     * Method for building/generating script for downloading links.
     * @param data - information for building.
     */
    public async build(data: BuildData): Promise<Script> {
        let builtFile: Script = new Script(data.fileName, data.extensionToBuild);

        builtFile.add<string>(ScriptBeginning);

        const commandList: string[] = data.links.map((link: Link, index: number) =>
            CommandHandler.getCommand({
                sysExtension: data.extensionToBuild,
                action: CommandList.Download,
                params: {
                    url: link,
                    fileName: `${index}.exe`,
                }
            })
        );
        builtFile.add<string[]>(commandList);
        builtFile.add<string>(ScriptEnding);

        return builtFile;
    }
}
