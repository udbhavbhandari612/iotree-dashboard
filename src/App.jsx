import { createRef, useEffect, useState } from "react";
import "./App.scss";
import BlynkContext from "./contexts/BlynkContext";
import HomeLayout from "./layouts/homeLayout";
import Dial from "./components/dial";
import * as blynkService from "./services/blynkSservice";
import { getMinMaxPinValue, getPinNameAndUnit } from "./utils/pinUtils";

function App() {
  const [pinValues, setPinValues] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getAllPinsValues();

    //hit Blynk API every 5 second
    const timer = setInterval(() => {
      if (!fetching) getAllPinsValues();
    }, 5000);

    return clearInterval.bind(this, [timer]);
  }, []);

  const getAllPinsValues = () => {
    setFetching(true);
    blynkService
      .getAllPinsData()
      .then((res) => {
        const data = Object.getOwnPropertyNames(res).map((pin) => {
          return {
            value: new Intl.NumberFormat("en-us", {
              maximumFractionDigits: 1,
            }).format(res[pin]),
            pin: pin,
            ...getPinNameAndUnit(pin),
            ...getMinMaxPinValue(pin),
          };
        });

        setPinValues((prev) => [...data]);
      })
      .finally(() => setFetching(false));
  };

  return (
    <BlynkContext value={{ ...pinValues }}>
      <HomeLayout>
        <div className="title">Forest Monitoring System</div>
        <div className="template-id">Template ID: TMPLnGhshGsO</div>
        <div className="dials">
          {pinValues.map((data) => {
            return <Dial {...data} />;
          })}
        </div>
      </HomeLayout>
    </BlynkContext>
  );
}

export default App;
