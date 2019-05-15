export class DataStore {
    private store: Map<any, any> = new Map();

    public put(key: any, value: any): void {
        this.store.set(key, value);
    }

    public get(key: any): any {
        return this.store.get(key);
    }

    public remove(key: any): boolean {
        return this.store.delete(key);
    }

    public clear(): void {
        this.store.clear();
    }

    public entries(): IterableIterator<[any, any]> {
        return this.store.entries();
    }
}