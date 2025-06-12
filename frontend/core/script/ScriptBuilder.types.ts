import { ScriptExtension, Link } from "@/shared/types";

export type BuildData = {
    fileName: string,
    links: Link[],
    extensionToBuild: ScriptExtension,
}
