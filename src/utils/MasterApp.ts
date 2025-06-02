import { CardApp } from "@/models/CardApp";

export class MasterApp {
    private apps: CardApp[] = [];

    public async add(app: CardApp) {
        return this.apps.push(app);
    }

    public async getDownloadLinks() {
        let links: string[] = [];
        if (this.apps.length) {
            this.apps.forEach((app: CardApp) => {
                links.push(app.downloadUrl);
            })
        }
        return links;
    }
}