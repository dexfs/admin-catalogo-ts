import {Identifier} from "./identifier";
import {ValidationHandler} from "./validation/validation.handler";

export abstract class Entity<ID extends Identifier> {
    protected readonly _id: ID

    constructor(id: ID) {
        if (!id) throw Error("'id' should not be null")
        this._id = id;
    }

    abstract validate(handler: ValidationHandler): void

    get id(): ID {
        return this._id
    }

    equals(o: object) {
        if (this === o) return true;
        if (o === null || Reflect.getPrototypeOf(this) !== Reflect.getPrototypeOf(o)) return false;
        const entity = <Entity<ID>>o;
        return this.id === entity.id;
    }

}