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
        this.checkNameConstraints();
        this.validationHandler().validate(this)
    }

    private readonly NAME_MAX_LENGTH = 255;

    private readonly NAME_MIN_LENGTH = 3;

    private checkNameConstraints() {
        const name = this.category.name;
        if (!name) {
            this.validationHandler().append(new DomainException("'name' should not be null"))
            return;
        }

        const length = name.trim().length;

        if (length > this.NAME_MAX_LENGTH || length < this.NAME_MIN_LENGTH) {
            this.validationHandler().append(new DomainException("'name' must be between 3 and 255 characters"))
            return;
        }


    }
}