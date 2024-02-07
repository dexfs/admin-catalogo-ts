import {AggregateRoot} from "../aggregate-root";
import {CategoryID} from "./categoryID";
import {ValidationHandler} from "../validation/validation.handler";
import {CategoryValidator} from "./category.validator";

export class Category  extends AggregateRoot<CategoryID> {
    private _name: string
    private _description: string
    private _active: boolean
    private _createdAt: number
    private _updatedAt: number
    private _deletedAt: number | null

    private constructor(
        readonly anId: CategoryID,
        readonly aName: string,
        readonly aDescription: string,
        readonly isActive: boolean,
        readonly aCreationDate: number,
        readonly aUpdateDate: number,
        readonly aDeleteDate: number | null,
    ) {
        super(anId)
        this._name = aName
        this._description = aDescription
        this._active = isActive
        this._createdAt = aCreationDate
        this._updatedAt = aUpdateDate
        this._deletedAt = aDeleteDate
    }

    static newCategory(aName: string, aDescription: string, aActive: boolean) {
        const id = CategoryID.unique()
        const now = Date.now();
        const deletedAt = aActive ? null : Date.now()
        return new Category(id, aName, aDescription, aActive, now, now, deletedAt)
    }

    validate(handler: ValidationHandler): void {
        new CategoryValidator(this, handler).validate();
    }



    get id(): CategoryID {
        return this._id;
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