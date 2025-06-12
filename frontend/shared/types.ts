import { ScriptExtension } from "@/constants/Script";


export type ScriptExtensionType = (typeof ScriptExtension)[keyof typeof ScriptExtension];
export type Link = string;
export type Path = string;
