export class Category {
    private _id: string;
    private _name: string
    private _description: string
    private _active: boolean
    private _createdAt: number
    private _updatedAt: number
    private _deletedAt: number | null

    private constructor(
        private readonly anId: string,
        private readonly aName: string,
        private readonly aDescription: string,
        private readonly isActive: boolean,
        private readonly aCreationDate: number,
        private readonly aUpdateDate: number,
        private readonly aDeleteDate: number | null,
    ) {
        this._id = anId
        this._name = aName
        this._description = aDescription
        this._active = isActive
        this._createdAt = aCreationDate
        this._updatedAt = aUpdateDate
        this._deletedAt = aDeleteDate
    }

    static newCategory(aName: string, aDescription: string, aActive: boolean) {
        const id = crypto.randomUUID()
        const now = Date.now();
        return new Category(id, aName, aDescription, aActive, now, now, null)
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt(value: number) {
        this._createdAt = value;
    }

    get updatedAt(): number {
        return this._updatedAt;
    }

    set updatedAt(value: number) {
        this._updatedAt = value;
    }

    get deletedAt(): number | null {
        return this._deletedAt;
    }

    set deletedAt(value: number | null) {
        this._deletedAt = value;
    }
}