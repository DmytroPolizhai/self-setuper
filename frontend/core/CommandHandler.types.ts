import { ScriptExtensionType } from "@/shared/types";

export const enum CommandList {
    Download = "Download",
    MakeDirectory = "MakeDirectory",
}

export type CommandParams = { [key: string]: string };

export type Command = {
    action: CommandList,
    sysExtension: ScriptExtensionType,
    params: CommandParams
}

