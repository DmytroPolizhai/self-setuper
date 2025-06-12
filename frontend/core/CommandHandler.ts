import commands from '@/assets/data/commands.json';
import { ScriptExtensionType } from "@/shared/types";
import { CommandList, Command } from "@/core/CommandHandler.types";

export class CommandHandler {
    private static getCommandFromJson(scriptExtension: ScriptExtensionType, action: CommandList): string {
        return (commands as any)[scriptExtension]?.[action] ?? "Unknown command";
    }

    public static getCommand(command: Command): string {
        let template = this.getCommandFromJson(command.sysExtension, command.action);
        for (const key in command.params) {
            const placeholder = new RegExp(`\\[${key}\\]`, 'g');
            template = template.replace(placeholder, command.params[key]);
        }
        return template;
    }
}