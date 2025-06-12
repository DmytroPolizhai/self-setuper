import commands from '@/assets/data/commands.json';
import {SystemExtension} from "@/utils/system/types/SystemExtension";
import {CommandList, Command} from "@/utils/CommandHandler.types";

export class CommandHandler {
    private static getCommandFromJson(os: SystemExtension, action: CommandList): string {
        return (commands as any)[os]?.[action] ?? "Unknown command";
    }

    public static getCommand(command: Command): string {
        let template = this.getCommandFromJson(command.os, command.action);
        for (const key in command.params) {
            const placeholder = new RegExp(`\\[${key}\\]`, 'g');
            template = template.replace(placeholder, command.params[key]);
        }
        return template;
    }
}