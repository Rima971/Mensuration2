import { expect } from  "chai";
import Measurement from "../src/measurement.js";
import { ErrorType, LengthUnit, MeasurementType, VolumeUnit } from "../src/constants.js";

describe("Measurement class - exceptions", () => {
    it("cannot create a measurement with invalid value", () => {
        expect(()=>new Measurement(-1, LengthUnit.cm, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(null, LengthUnit.cm, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(undefined, LengthUnit.cm, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement("string", LengthUnit.cm, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
    })

    it("cannot create a measurement with invalid unit", () => {
        expect(()=>new Measurement(1, null, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(1, undefined, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(1, "unit", MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
    })

    it("cannot create a measurement with invalid type", () => {
        expect(()=>new Measurement(1, LengthUnit.cm, null)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(1, LengthUnit.cm, undefined)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(1, LengthUnit.cm, "type")).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
    })

    it("cannot create a measurement with incompatible unit and type", () => {
        expect(()=>new Measurement(1, LengthUnit.cm, MeasurementType.volume)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
        expect(()=>new Measurement(1, LengthUnit.ml, MeasurementType.length)).to.throw(ErrorType.InvalidConstructorParameterMeasurement)
    })

    it("cannot add two measurements of different types", () => {
        let l1 = new Measurement(12, LengthUnit.cm, MeasurementType.length)
        let l2 = new Measurement(12, VolumeUnit.cl, MeasurementType.volume)
        expect(()=>l1.add(l2)).to.throw(ErrorType.InvalidOperationAddedDifferentMeasurements)
    })

    it("cannot subtract two measurements of different types", () => {
        let l1 = new Measurement(12, LengthUnit.cm, MeasurementType.length)
        let l2 = new Measurement(12, VolumeUnit.cl, MeasurementType.volume)
        expect(()=>l1.subtract(l2)).to.throw(ErrorType.InvalidOperationSubtractedDifferentMeasurements)
    })

})