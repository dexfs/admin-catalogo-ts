import {Identifier} from "./identifier";
import {Entity} from "./Entity";

export abstract class AggregateRoot<ID extends Identifier> extends Entity<ID> {
    constructor(id: ID) {
        super(id);
    }
}