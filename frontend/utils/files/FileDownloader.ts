import {File} from '@/utils/files/File'

export class FileDownloader {
    private static emulateDownloading = (url: string, filename: string) => {
        const hiddenDownloader = document.createElement("a");
        hiddenDownloader.href = url;
        hiddenDownloader.download = filename;
        document.body.appendChild(hiddenDownloader);
        hiddenDownloader.click();
        document.body.removeChild(hiddenDownloader);
        URL.revokeObjectURL(url);
    }

    public static download(file: File) {
        const blob = new Blob([file.getContent()], {
            type: "text/plain"
        });
        const url = URL.createObjectURL(blob);

        this.emulateDownloading(url, file.getFullName());
    }
}
