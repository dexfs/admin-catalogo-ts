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
            name: null,
            description: null,
            active: true,
        }

        const sut = Category
            .newCategory(
                expected.name as any,
                expected.description as any,
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

    test('Given an invalid name length less than 3, when call call new category and validate, then should receive error', () => {
        expect.hasAssertions()
        const expected = {
            name: 'Fi ',
            description: 'A categoria mais assistida',
            active: true,
        }
        const expectedMessages = ["'name' must be between 3 and 255 characters"]

        const actualCategory = Category
            .newCategory(expected.name, expected.description, expected.active)

        try {
            actualCategory.validate(new ThrowsValidationHandler())
        } catch(e) {
            const errors = e as DomainException[]
            expect(errors).toHaveLength(1)
            errors.forEach(e => expect(e).toBeInstanceOf(Error))
            errors.forEach((e, index) => expect(e.message).toBe(expectedMessages[index]))
        }
    })

    test('Given an invalid name length greater than 255, when call call new category and validate, then should receive error', () => {
        expect.hasAssertions()
        const expected = {
            name: `No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção dos paradigmas corporativos.
                Gostaria de enfatizar que o surgimento do comércio virtual faz parte de um processo de gerenciamento do remanejamento dos quadros funcionais. Ainda assim, existem dúvidas a respeito.`,
            description: 'A categoria mais assistida',
            active: true,
        }
        const expectedMessages = ["'name' must be between 3 and 255 characters"]

        const actualCategory = Category
            .newCategory(expected.name, expected.description, expected.active)

        try {
            actualCategory.validate(new ThrowsValidationHandler())
        } catch(e) {
            const errors = e as DomainException[]
            expect(errors).toHaveLength(1)
            errors.forEach(e => expect(e).toBeInstanceOf(Error))
            errors.forEach((e, index) => expect(e.message).toBe(expectedMessages[index]))
        }
    })

    test('Given a valid empty description, when call new category, then instantiate a Category', () => {
        expect.hasAssertions()
        const expected = {
            name: 'Filmes',
            description: 'A categoria mais assistida',
            active: true,
        }
        const actualCategory = Category
            .newCategory(expected.name, expected.description, expected.active)

        expect(() => actualCategory.validate(new ThrowsValidationHandler())).not.toThrow()

        expect(actualCategory).toBeInstanceOf(Category)
        expect(actualCategory.id).not.toBeNull();
        expect(actualCategory.id).not.toBeNull();
        expect(actualCategory.name).not.toBeNull();
        expect(actualCategory.description).not.toBeNull();
        expect(actualCategory.active).not.toBeNull();
        expect(actualCategory.createdAt).not.toBeNull();
        expect(actualCategory.updatedAt).not.toBeNull();
        expect(actualCategory.deletedAt).toBeNull();
    })

})