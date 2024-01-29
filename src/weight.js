import { MeasurementType } from "./constants.js";
import Measurement from "./measurement.js";

export default class Weight extends Measurement{
    constructor(value, unit){
        super(value, unit, MeasurementType.weight)
        this.type = MeasurementType.weight
        this.unit = unit
        this.value = value
    }
    newInstance(value, unit){
        return new Weight(value, unit, this.type)
    }
}

