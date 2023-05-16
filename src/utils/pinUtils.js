const getPinNameAndUnit = (pin) => {
  switch (pin) {
    case "v1":
      return {
        name: "Pressure",
        unit: "Pa",
      };
    case "v2":
      return {
        name: "Temperature",
        unit: "°C",
      };
    case "v3":
      return {
        name: "Humidity",
        unit: "hPa",
      };
    case "v4":
      return {
        name: "AQI",
        unit: "",
      };
    case "v5":
      return {
        name: "Soil Moisture",
        unit: "",
      };
    case "v6":
      return {
        name: "",
        unit: "ppm",
      };
    case "v7":
    default:
      return {
        name: "",
        unit: "",
      };
  }
};

const getMinMaxPinValue = (pin) => {
  switch (pin) {
    case "v1":
      return {
        min: 0,
        max: 200,
      };
    case "v2":
      return {
        min: 0,
        max: 100,
      };
    case "v3":
      return {
        min: 0,
        max: 100,
      };
    case "v4":
      return {
        min: 0,
        max: 100,
      };
    case "v5":
      return {
        min: 400,
        max: 600,
      };
    case "v6":
      return {
        min: 0,
        max: 1.1,
      };
    case "v7":
    default:
      return {
        min: 0,
        max: 100,
      };
  }
};

export { getPinNameAndUnit, getMinMaxPinValue };
