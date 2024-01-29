import { MeasurementType } from "./constants.js";
import Measurement from "./measurement.js";

export default class Volume extends Measurement{
    constructor(value, unit){
        super(value, unit, MeasurementType.volume)
        this.type = MeasurementType.volume
        this.unit = unit
        this.value = value
    }
    newInstance(value, unit){
        return new Volume(value, unit, this.type)
    }
}