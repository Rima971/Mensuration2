import { expect } from  "chai";
import Length from "../src/length.js";
import { LengthUnit } from "../src/constants.js";

describe("Length class - convert functionality", () => {
    it("returns 0 cm when passed 0 m", () => {
        const length = new Length(0, LengthUnit.m)
        const expected = 0;
        const actual = length.convert(LengthUnit.cm)
        expect(actual).to.equal(expected)
    })

    it("returns same value when same units are passed", ()=>{
        let length = new Length(12, LengthUnit.km)
        expect(12).to.equal(length.convert(LengthUnit.km))

        length = new Length(13, LengthUnit.m)
        expect(13).to.equal(length.convert(LengthUnit.m))

        length = new Length(14, LengthUnit.cm)
        expect(14).to.equal(length.convert(LengthUnit.cm))

        length = new Length(15, LengthUnit.mm)
        expect(15).to.equal(length.convert(LengthUnit.mm))
    })

    it("returns the correct conversion", () => {
        let length = new Length(16, LengthUnit.m)
        expect(1600).to.equal(length.convert(LengthUnit.cm))

        length = new Length(16, LengthUnit.cm)
        expect(160).to.equal(length.convert(LengthUnit.mm))

        length = new Length(16, LengthUnit.m)
        expect(16000).to.equal(length.convert(LengthUnit.mm))

        length = new Length(16, LengthUnit.cm)
        expect(160).to.equal(length.convert(LengthUnit.mm))

        length = new Length(16, LengthUnit.mm)
        expect(1.6).to.equal(length.convert(LengthUnit.cm))

        length = new Length(16, LengthUnit.m)
        expect(0.016).to.equal(length.convert(LengthUnit.km))

        length = new Length(16, LengthUnit.cm)
        expect(0.00016).to.equal(length.convert(LengthUnit.km))

        length = new Length(16, LengthUnit.mm)
        expect(0.000016).to.equal(length.convert(LengthUnit.km))

        length = new Length(16, LengthUnit.km)
        expect(16000).to.equal(length.convert(LengthUnit.m))

        length = new Length(16, LengthUnit.km)
        expect(1600000).to.equal(length.convert(LengthUnit.cm))

        length = new Length(16, LengthUnit.km)
        expect(16000000).to.equal(length.convert(LengthUnit.mm))
    })
})

describe("Length class - compare functionality", () => {
    it("returns true when comparing two lengths", () => {
        const l1 = new Length(12, LengthUnit.cm)
        const l2 = new Length(1, LengthUnit.m)
        const actual = l1.compare(l2)
        const expected = true
        expect(expected).to.equal(actual)
    })
})

describe("Length class = add and subtract functionality", () => {
    it("adds two lengths correctly", () => {
        let l1 = new Length(12, LengthUnit.cm)
        let l2 = new Length(1, LengthUnit.m)
        let actual = l1.add(l2)
        let expected = new Length(1.12, LengthUnit.m)
        expect(true).to.equal(actual.equals(expected))

        l1 = new Length(1, LengthUnit.km)
        l2 = new Length(1, LengthUnit.m)
        actual = l1.add(l2)
        expected = new Length(1001, LengthUnit.m)
        expect(true).to.equal(actual.equals(expected))
    })

    it("subtracts two lengths correctly", () => {
        let l1 = new Length(12, LengthUnit.cm)
        let l2 = new Length(1, LengthUnit.m)
        let actual = l1.subtract(l2)
        let expected = new Length(0, LengthUnit.m)
        expect(true).to.equal(actual.equals(expected))

        l1 = new Length(1, LengthUnit.km)
        l2 = new Length(1, LengthUnit.m)
        actual = l1.subtract(l2)
        expected = new Length(999, LengthUnit.m)
        expect(true).to.equal(actual.equals(expected))
    })
})