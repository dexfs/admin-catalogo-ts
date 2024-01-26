import {describe, expect, test} from "vitest";
import {Category} from "./category";
import {CategoryID} from "./categoryID";
import {ThrowsValidationHandler} from "../validation/handler/throws-validation.handler";

describe("Category Entity", () => {
    test("Given a valida params, when call newCategory, then instiate a Category", () =>{
        const expected = {
            name: "Ação",
            description: "A categoria mais assistida",
            active: true,
        }

        const expectedId = CategoryID.unique()

        const sut = Category.newCategory(expected.name, expected.description, expected.active, expectedId)
        expect(sut).to.be.instanceof(Category)
        expect(sut.id).not.toBeNull();
        expect(sut.id).toEqual(expectedId);
        expect(sut.id.equals(expectedId)).toBeTruthy();
        expect(sut.name).not.toBeNull();
        expect(sut.description).not.toBeNull();
        expect(sut.active).not.toBeNull();
        expect(sut.createdAt).not.toBeNull();
        expect(sut.updatedAt).not.toBeNull();
        expect(sut.deletedAt).toBeNull();
    })

    test('Given an invalid null name, when call new category and validate, then should receive error', () => {
        const expected = {
            name: null,
            description: "A categoria mais assistida",
            active: true,
        }

        const expectedId = CategoryID.unique()

        const sut = Category.newCategory(expected.name as any, expected.description, expected.active, expectedId)
        console.log(sut.validate(new ThrowsValidationHandler()))

        // expect().toBeInstanceOf(DomainException)
    })
})