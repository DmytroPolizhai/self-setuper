import { Script } from '@/core/script/Script'

export class ScriptDownloader {
    private static emulateDownloading = (url: string, filename: string) => {
        const hiddenDownloader = document.createElement("a");
        hiddenDownloader.href = url;
        hiddenDownloader.download = filename;
        document.body.appendChild(hiddenDownloader);
        hiddenDownloader.click();
        document.body.removeChild(hiddenDownloader);
        URL.revokeObjectURL(url);
    }

    public static download(file: Script) {
        const blob = new Blob([file.getContent()], {
            type: "text/plain"
        });
        const url = URL.createObjectURL(blob);

        this.emulateDownloading(url, file.getFullName());
    }
}
