export const FileIdManager = {
    currentIds: new Set<number>(),

    add(id: number) {
        this.currentIds.add(id);
    },

    getFreeId(): number {
        let id = 1;
        while (this.currentIds.has(id)) {
            id++;
        }
        return id;
    },
};