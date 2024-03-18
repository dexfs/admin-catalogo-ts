export class CategorySearchQuery {
    constructor(
        readonly page: number,
        readonly perPage: number,
        readonly terms: string,
        readonly sort: string,
        readonly direction: string
        ) {}
}