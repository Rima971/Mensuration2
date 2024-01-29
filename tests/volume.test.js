import { expect } from  "chai";
import Volume from "../src/volume.js";
import { VolumeUnit } from "../src/constants.js";

describe("Volume class - convert functionality", () => {
    it("returns 0 cl when passed 0 l", () => {
        const volume = new Volume(0, VolumeUnit.l)
        const expected = 0;
        const actual = volume.convert(VolumeUnit.cl)
        expect(actual).to.equal(expected)
    })

    it("returns same value when same units are passed", ()=>{
        let volume = new Volume(12, VolumeUnit.kl)
        expect(12).to.equal(volume.convert(VolumeUnit.kl))

        volume = new Volume(13, VolumeUnit.l)
        expect(13).to.equal(volume.convert(VolumeUnit.l))

        volume = new Volume(14, VolumeUnit.cl)
        expect(14).to.equal(volume.convert(VolumeUnit.cl))

        volume = new Volume(15, VolumeUnit.ml)
        expect(15).to.equal(volume.convert(VolumeUnit.ml))
    })

    it("returns the correct conversion", () => {
        let volume = new Volume(16, VolumeUnit.l)
        expect(1600).to.equal(volume.convert(VolumeUnit.cl))

        volume = new Volume(16, VolumeUnit.cl)
        expect(160).to.equal(volume.convert(VolumeUnit.ml))

        volume = new Volume(16, VolumeUnit.l)
        expect(16000).to.equal(volume.convert(VolumeUnit.ml))

        volume = new Volume(16, VolumeUnit.cl)
        expect(160).to.equal(volume.convert(VolumeUnit.ml))

        volume = new Volume(16, VolumeUnit.ml)
        expect(1.6).to.equal(volume.convert(VolumeUnit.cl))

        volume = new Volume(16, VolumeUnit.l)
        expect(0.016).to.equal(volume.convert(VolumeUnit.kl))

        volume = new Volume(16, VolumeUnit.cl)
        expect(0.00016).to.equal(volume.convert(VolumeUnit.kl))

        volume = new Volume(16, VolumeUnit.ml)
        expect(0.000016).to.equal(volume.convert(VolumeUnit.kl))

        volume = new Volume(16, VolumeUnit.kl)
        expect(16000).to.equal(volume.convert(VolumeUnit.l))

        volume = new Volume(16, VolumeUnit.kl)
        expect(1600000).to.equal(volume.convert(VolumeUnit.cl))

        volume = new Volume(16, VolumeUnit.kl)
        expect(16000000).to.equal(volume.convert(VolumeUnit.ml))
    })
})

describe("Volume class - compare functionality", () => {
    it("returns true when comparing two volumes", () => {
        const l1 = new Volume(12, VolumeUnit.cl)
        const l2 = new Volume(1, VolumeUnit.l)
        const actual = l1.compare(l2)
        const expected = true
        expect(expected).to.equal(actual)
    })
})

describe("Volume class = add and subtract functionality", () => {
    it("adds two volumes correctly", () => {
        let l1 = new Volume(12, VolumeUnit.cl)
        let l2 = new Volume(1, VolumeUnit.l)
        let actual = l1.add(l2)
        let expected = new Volume(1.12, VolumeUnit.l)
        expect(true).to.equal(actual.equals(expected))

        l1 = new Volume(1, VolumeUnit.kl)
        l2 = new Volume(1, VolumeUnit.l)
        actual = l1.add(l2)
        expected = new Volume(1001, VolumeUnit.l)
        expect(true).to.equal(actual.equals(expected))
    })

    it("subtracts two volumes correctly", () => {
        let l1 = new Volume(12, VolumeUnit.cl)
        let l2 = new Volume(1, VolumeUnit.l)
        let actual = l1.subtract(l2)
        let expected = new Volume(0, VolumeUnit.l)
        expect(true).to.equal(actual.equals(expected))

        l1 = new Volume(1, VolumeUnit.kl)
        l2 = new Volume(1, VolumeUnit.l)
        actual = l1.subtract(l2)
        expected = new Volume(999, VolumeUnit.l)
        expect(true).to.equal(actual.equals(expected))
    })
})