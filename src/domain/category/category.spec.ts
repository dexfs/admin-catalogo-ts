import {describe, expect, test} from "vitest";
import {Category} from "./category";

describe("Category Entity", () => {
    test("should be defined", () =>{
        const sut = new Category("Andre");
        expect(sut).to.be.instanceof(Category)
    })

    test("the name should be 'Andre'", () => {
        const sut = new Category("Andre");
        expect(sut.getName()).toBe("Andre");
    })
})