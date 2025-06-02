import { CardApp } from "@/models/CardApp";
import { MasterApp } from "@/utils/MasterApp";
import { FileCreator } from "@/utils/FileCreator";
import { FileIdManager } from "@/utils/FileIdManager"

async function buildFile(cards: CardApp[]) {
    const masterApp: MasterApp = new MasterApp();
    const fileCreator: FileCreator = new FileCreator();

    cards.forEach(card => {
        masterApp.add(card);
    })

    await fileCreator.createBatFile(String(FileIdManager.getFreeId()), new Date().toISOString(), masterApp.toString());

    // TODO: Upload file to user and after uploading delete the file.
}