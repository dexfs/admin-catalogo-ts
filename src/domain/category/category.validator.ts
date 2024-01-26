import {Validator} from "../validation/validator";
import {ValidationHandler} from "../validation/validation.handler";
import {Category} from "./category";

export class CategoryValidator extends Validator {

    private readonly category: Category

    constructor(aCategory: Category, aHandler: ValidationHandler) {
        super(aHandler);
        this.category = aCategory
    }

    validate(): void {
        if (!this.category.name) {
            this.validationHandler().append(new Error("'name' should not be null"))
        }
    }
}