import { MeasurementType, TypeToUnitFactorMap } from "./constants.js";
import Measurement from "./measurement.js";

export default class Temperature extends Measurement{
    constructor(value, unit){
        super(value, unit, MeasurementType.temperature)
        this.type = MeasurementType.temperature
        this.unit = unit
        this.value = value
    }
    newInstance(value, unit){
        return new Temperature(value, unit, this.type)
    }

    convert(){
        return TypeToUnitFactorMap[this.unit](this.value)
    }
}

