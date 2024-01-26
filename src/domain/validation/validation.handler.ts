export abstract class ValidationHandler {
    abstract append(anErrorOrAHandler: Error): ValidationHandler
    abstract append(anErrorOrAHandler: ValidationHandler): ValidationHandler
    abstract validate(aValidation: Validation): ValidationHandler
    abstract validate(): void
    abstract getErrors(): Error[]
    hasErrors() {
        return this.getErrors() !== null && !(this?.getErrors()?.length === 0);
    }
}

export interface Validation {
    validate(): void
}