import { expect } from  "chai";
import Weight from "../src/weight.js";
import { WeightUnit } from "../src/constants.js";

describe("Weight class - convert functionality", () => {
    it("returns 0 cg when passed 0 g", () => {
        const weight = new Weight(0, WeightUnit.g)
        const expected = 0;
        const actual = weight.convert(WeightUnit.cg)
        expect(actual).to.equal(expected)
    })

    it("returns same value when same units are passed", ()=>{
        let weight = new Weight(12, WeightUnit.kg)
        expect(12).to.equal(weight.convert(WeightUnit.kg))

        weight = new Weight(13, WeightUnit.g)
        expect(13).to.equal(weight.convert(WeightUnit.g))

        weight = new Weight(14, WeightUnit.cg)
        expect(14).to.equal(weight.convert(WeightUnit.cg))

        weight = new Weight(15, WeightUnit.mg)
        expect(15).to.equal(weight.convert(WeightUnit.mg))
    })

    it("returns the correct conversion", () => {
        let weight = new Weight(16, WeightUnit.g)
        expect(1600).to.equal(weight.convert(WeightUnit.cg))

        weight = new Weight(16, WeightUnit.cg)
        expect(160).to.equal(weight.convert(WeightUnit.mg))

        weight = new Weight(16, WeightUnit.g)
        expect(16000).to.equal(weight.convert(WeightUnit.mg))

        weight = new Weight(16, WeightUnit.cg)
        expect(160).to.equal(weight.convert(WeightUnit.mg))

        weight = new Weight(16, WeightUnit.mg)
        expect(1.6).to.equal(weight.convert(WeightUnit.cg))

        weight = new Weight(16, WeightUnit.g)
        expect(0.016).to.equal(weight.convert(WeightUnit.kg))

        weight = new Weight(16, WeightUnit.cg)
        expect(0.00016).to.equal(weight.convert(WeightUnit.kg))

        weight = new Weight(16, WeightUnit.mg)
        expect(0.000016).to.equal(weight.convert(WeightUnit.kg))

        weight = new Weight(16, WeightUnit.kg)
        expect(16000).to.equal(weight.convert(WeightUnit.g))

        weight = new Weight(16, WeightUnit.kg)
        expect(1600000).to.equal(weight.convert(WeightUnit.cg))

        weight = new Weight(16, WeightUnit.kg)
        expect(16000000).to.equal(weight.convert(WeightUnit.mg))
    })
})

describe("Weight class - compare functionality", () => {
    it("returns true when comparing two weights", () => {
        const l1 = new Weight(12, WeightUnit.cg)
        const l2 = new Weight(1, WeightUnit.g)
        const actual = l1.compare(l2)
        const expected = true
        expect(expected).to.equal(actual)
    })
})

describe("Weight class = add and subtract functionality", () => {
    it("adds two weights correctly", () => {
        let l1 = new Weight(12, WeightUnit.cg)
        let l2 = new Weight(1, WeightUnit.g)
        let actual = l1.add(l2)
        let expected = new Weight(1.12, WeightUnit.g)
        expect(true).to.equal(actual.equals(expected))

        l1 = new Weight(1, WeightUnit.kg)
        l2 = new Weight(1, WeightUnit.g)
        actual = l1.add(l2)
        expected = new Weight(1001, WeightUnit.g)
        expect(true).to.equal(actual.equals(expected))
    })

    it("subtracts two weights correctly", () => {
        let l1 = new Weight(12, WeightUnit.cg)
        let l2 = new Weight(1, WeightUnit.g)
        let actual = l1.subtract(l2)
        let expected = new Weight(0, WeightUnit.g)
        expect(true).to.equal(actual.equals(expected))

        l1 = new Weight(1, WeightUnit.kg)
        l2 = new Weight(1, WeightUnit.g)
        actual = l1.subtract(l2)
        expected = new Weight(999, WeightUnit.g)
        expect(true).to.equal(actual.equals(expected))
    })
})