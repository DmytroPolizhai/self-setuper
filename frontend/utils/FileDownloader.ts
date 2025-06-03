export const downloadContent = async (content: string, filename: string) => {
    const blob = new Blob([content], {type: "text/plain"});
    const url = URL.createObjectURL(blob);

    const hiddenDownloader = document.createElement("a");
    hiddenDownloader.href = url;
    hiddenDownloader.download = filename;
    document.body.appendChild(hiddenDownloader);
    hiddenDownloader.click();
    document.body.removeChild(hiddenDownloader);

    URL.revokeObjectURL(url);
}
