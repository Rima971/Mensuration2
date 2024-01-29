import { MeasurementType } from "./constants.js";
import Measurement from "./measurement.js";

export default class Length extends Measurement{
    constructor(value, unit){
        super(value, unit, MeasurementType.length)
        this.type = MeasurementType.length
        this.unit = unit
        this.value = value
    }
    newInstance(value, unit){
        return new Length(value, unit, this.type)
    }
}

