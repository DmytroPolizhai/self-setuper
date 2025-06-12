import { Systems } from "@/constants/Systems";


export const ScriptBeginning: string = `
@echo off
mkdir .downloads
attrib +h ".downloads"

cd ./.downloads

`
export const ScriptEnding: string = `
echo Downloading is completed. Have fun!
pause
`

/**
 * Just alias for simply accessing to the systems script extensions.
 */
export const ScriptExtension = {
    windows: Systems.windows.scriptExtension,
    others: Systems.others.scriptExtension,
} as const;