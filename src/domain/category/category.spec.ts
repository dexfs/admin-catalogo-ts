import {describe, expect, test} from "vitest";
import {Category} from "./category";
import {CategoryID} from "./categoryID";
import {ThrowsValidationHandler} from "../validation/handler/throws-validation.handler";
import {DomainException} from "../exceptions/domain.exception";

describe("Category Entity", () => {
    test("Given a valid params, when call newCategory, then Instantiate  a Category", () =>{
        const expected = {
            name: 'Filmes',
            description: 'A categoria mais assistida',
            active: true,
        }

        const actualCategory = Category
            .newCategory(expected.name, expected.description, expected.active)
        expect(actualCategory).to.be.instanceof(Category)
        expect(actualCategory.id).not.toBeNull();
        expect(actualCategory.id).not.toBeNull();
        expect(actualCategory.name).not.toBeNull();
        expect(actualCategory.description).not.toBeNull();
        expect(actualCategory.active).not.toBeNull();
        expect(actualCategory.createdAt).not.toBeNull();
        expect(actualCategory.updatedAt).not.toBeNull();
        expect(actualCategory.deletedAt).toBeNull();
    })

    test('Given an invalid null name, when call new category and validate, then should receive error', () => {
        expect.hasAssertions()
        const expected = {
            name: "Fi ",
            description: "A categoria mais assistida",
            active: true,
        }

        const sut = Category
            .newCategory(
                expected.name,
                expected.description,
                expected.active
            )
        try {
            sut.validate(new ThrowsValidationHandler())
        } catch (e) {
            const errors = e as DomainException[]
            const expectedMessages = ["'name' should not be null", "'description' should not be null"]
            expect(errors).toHaveLength(2)
            errors.forEach(e => expect(e).toBeInstanceOf(Error))
            errors.forEach((e, index) => expect(e.message).toBe(expectedMessages[index]))
        }
    })
})