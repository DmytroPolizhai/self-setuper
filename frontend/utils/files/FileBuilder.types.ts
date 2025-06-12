import {SystemExtension} from "@/utils/system/types/SystemExtension";

export type BuildData = {
    links: string[],
    extensionToBuild: SystemExtension,
    fileName: string,
}
