import {Validation, ValidationHandler} from "../validation.handler";

export class ThrowsValidationHandler extends ValidationHandler {
    private errors: any = []
    append(anErrorOrAHandler: Error): ValidationHandler;
    append(anErrorOrAHandler: ValidationHandler): ValidationHandler;
    append(anErrorOrAHandler: Error | ValidationHandler): ValidationHandler {
        if (anErrorOrAHandler instanceof Error) {
            this.errors.push(anErrorOrAHandler)
        }

        if (anErrorOrAHandler instanceof ValidationHandler) {
            for (let error of anErrorOrAHandler.getErrors()) {
                this.errors.push(error)
            }
        }

        return this
    }

    getErrors(): Error[] {
        return this.errors
    }

    validate(aValidation: Validation): ValidationHandler;
    validate(): void;
    validate(aValidation?: Validation): ValidationHandler | void {
        try {
            if (this.hasErrors()) {
                console.log("Errors", this.getErrors())
                throw this.getErrors()
            }
        } catch (e) {
            // @ts-ignore
            throw e
        }

        return undefined;
    }


}