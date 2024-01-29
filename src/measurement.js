import { ErrorType, TypeToUnitFactorMap } from "./constants.js"

export default class Measurement {
    
    constructor(value, unit, type){
        if (value===null || isNaN(value) || value<0 || !unit || !type || TypeToUnitFactorMap[type] === undefined || TypeToUnitFactorMap[type][unit] === undefined) throw new Error(ErrorType.InvalidConstructorParameterMeasurement+" "+value+" "+unit+" "+type)
        const unitFactor = TypeToUnitFactorMap[type]
        this.convert = (targetUnit) => {
            return value*(unitFactor[unit]/unitFactor[targetUnit])
        }
        this.add = (measurement) => {
            if (!this.compare(measurement)) throw new Error(ErrorType.InvalidOperationAddedDifferentMeasurements)
            return measurement.newInstance(this.convert(measurement.unit) + measurement.value, measurement.unit)
        }
        this.subtract = (measurement) => {
            if (!this.compare(measurement)) throw new Error(ErrorType.InvalidOperationSubtractedDifferentMeasurements)
            return measurement.newInstance(Math.max(this.convert(measurement.unit) - measurement.value,0), measurement.unit) 
        }
        this.compare = (object) => {
            if (object instanceof Measurement && object.type && object.type === type) return true
            return false
        }
        this.equals = (object) => {
            if (this.compare(object)) return object.value === value && object.unit === unit
            return false
        }
    }

}