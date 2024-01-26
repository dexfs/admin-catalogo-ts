import {Validation, ValidationHandler} from "../validation.handler";
import {DomainException} from "../../exceptions/domain.exception";

export class ThrowsValidationHandler extends ValidationHandler {
    append(anErrorOrAHandler: Error): ValidationHandler;
    append(anErrorOrAHandler: ValidationHandler): ValidationHandler;
    append(anErrorOrAHandler: Error | ValidationHandler): ValidationHandler {
        if (anErrorOrAHandler instanceof Error) {
            throw new DomainException([anErrorOrAHandler]);
        }

        if (anErrorOrAHandler instanceof ValidationHandler) {
            throw new DomainException(anErrorOrAHandler.getErrors())
        }

        return this
    }

    getErrors(): Error[] {
        return []
    }

    validate(aValidation: Validation): ValidationHandler {
        try {
            aValidation.validate()
        } catch (e) {
            // @ts-ignore
            throw DomainException.with(new Error(e.message))
        }
        return this;
    }
}