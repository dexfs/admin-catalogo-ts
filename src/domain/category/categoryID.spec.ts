import {describe, expect, it, test} from "vitest";
import {CategoryID} from "./categoryID";

describe("ValueObject CategoryID", () => {
    it("should be an instance of CategoryID", () => {
        const sut = CategoryID.unique()
        expect(sut).toBeInstanceOf(CategoryID)
    })

    test("value should not be empty", () => {
        const sut = CategoryID.unique()
        expect(sut.value).not.toBeNull()
        expect(sut.value).toBeTypeOf('string')
    })
})