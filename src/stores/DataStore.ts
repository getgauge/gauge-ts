export class DataStore {

    private readonly store: Map<unknown, unknown> = new Map();

    public put<K, V>(key: K, value: V): void {
        this.store.set(key, value);
    }

    public get<K, V>(key: K): V {
        return this.store.get(key) as V;
    }

    public remove<K>(key: K): boolean {
        return this.store.delete(key);
    }

    public clear(): void {
        this.store.clear();
    }

    public entries(): IterableIterator<[unknown, unknown]> {
        return this.store.entries();
    }

}