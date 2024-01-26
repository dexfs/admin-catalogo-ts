import {ValidationHandler} from "./validation.handler";

export abstract class Validator {
    private handler: ValidationHandler

    protected constructor(handler: ValidationHandler) {
        this.handler = handler
    }

    abstract validate(): void

    protected validationHandler(): ValidationHandler {
        return this.handler
    }
}