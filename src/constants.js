// Length

export const LengthUnit = {
    mm: "mm",
    cm: "cm",
    m: "m",
    km: "km",
    inch: "inch"
}

export const LengthUnitConversionFactorsToBase = {
    [LengthUnit.mm]: 0.001,
    [LengthUnit.cm]: 0.01,
    [LengthUnit.m]: 1,
    [LengthUnit.km]: 1000,
    [LengthUnit.inch]: 0.0254
}

// Volume

export const VolumeUnit = {
    ml: "ml",
    cl: "cl",
    l: "l",
    kl: "kl"
}

export const VolumeUnitConversionFactorsToBase = {
    [VolumeUnit.ml]: 0.001,
    [VolumeUnit.cl]: 0.01,
    [VolumeUnit.l]: 1,
    [VolumeUnit.kl]: 1000
}

// Weight

export const WeightUnit = {
    mg: "mg",
    cg: "cg",
    g: "g",
    kg: "kg"
}

export const WeightUnitConversionFactorsToBase = {
    [WeightUnit.mg]: 0.001,
    [WeightUnit.cg]: 0.01,
    [WeightUnit.g]:  1,
    [WeightUnit.kg]: 1000
}

// Temperature 

export const TemperatureUnit = {
    c: "c",
    f: "f"
}

export const TemperatureUnitConversionFunctionsToBase = {
    [TemperatureUnit.c]: (c) => c*(9/5)+32,
    [TemperatureUnit.f]: (f) => f*(5/9)-32,
}

// Common 

export const MeasurementType = {
    length: "length",
    volume: "volume",
    weight: "weight",
    temperature: "Temperature"
}

export const TypeToUnitFactorMap = {
    [MeasurementType.length] : LengthUnitConversionFactorsToBase,
    [MeasurementType.volume] : VolumeUnitConversionFactorsToBase,
    [MeasurementType.weight] : WeightUnitConversionFactorsToBase,
    [MeasurementType.temperature] : TemperatureUnitConversionFunctionsToBase
}

export const ErrorType = {
    InvalidConstructorParameterMeasurement: "Invalid constructor parameter while creating a measurement",
    InvalidOperationAddedDifferentMeasurements: "Two different types of measurement cannot be added",
    InvalidOperationSubtractedDifferentMeasurements: "Two different types of measurement cannot be subtracted",
}