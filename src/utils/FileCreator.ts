import * as fs from 'fs';


export class FileCreator {
    async createBatFile(id: string, date: string, filling: string) {
        fs.writeFile(
            `@/assets/temp/${id}-${date}.bat`,
            filling,
            (err) => {
                if (err) throw err;
            })
    }
}