export class Pagination<T> {
    constructor(
        readonly currentPage: number,
        readonly perPage: number,
        readonly total: number,
        readonly items: T[]
    ) {
    }

    map<R>(mapper: (item: T) => R): Pagination<R> {
        const aNewList = this.items.map(mapper);
        return new Pagination<R>(this.currentPage, this.perPage, this.total, aNewList);
    }
}