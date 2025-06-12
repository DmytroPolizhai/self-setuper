import {SystemExtension} from "@/utils/system/types/SystemExtension";

export const enum CommandList {
    Download = "Download",
    MakeDirectory = "MakeDirectory",
}

export type CommandParams = { [key: string]: string };

export type Command = {
    action: CommandList,
    os: SystemExtension,
    params: CommandParams
}

