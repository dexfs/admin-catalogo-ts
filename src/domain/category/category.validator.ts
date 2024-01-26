import {Validator} from "../validation/validator";
import {ValidationHandler} from "../validation/validation.handler";
import {Category} from "./category";
import {DomainException} from "../exceptions/domain.exception";

export class CategoryValidator extends Validator {

    private readonly category: Category

    constructor(aCategory: Category, aHandler: ValidationHandler) {
        super(aHandler);
        this.category = aCategory
    }

    validate(): void {
        if (!this.category.name) {
            this.validationHandler().append(new DomainException("'name' should not be null"))
        }
        if (!this.category.description) {
            this.validationHandler().append(new DomainException("'description' should not be null"))
        }

        this.validationHandler().validate(this)
    }
}