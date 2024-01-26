import {Identifier} from "../identifier";
import * as crypto from "node:crypto";

export class CategoryID extends Identifier {
    private readonly _value: string


    private constructor(value: string) {
        if (!value) throw new Error("should not be empty")
        super();
        this._value = value;
    }

    static unique(): CategoryID {
        return new CategoryID(crypto.randomUUID());
    }

    static from(anId: string): CategoryID {
        return new CategoryID(anId)
    }

    get value(): string {
        return this._value;
    }

    equals(o: object) {
        if (this === o) return true;
        if (o === null || Reflect.getPrototypeOf(this) !== Reflect.getPrototypeOf(o)) return false;
        const entity = <CategoryID>o;
        return this.value === entity.value;
    }
}