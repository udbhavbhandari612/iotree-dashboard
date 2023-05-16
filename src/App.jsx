import { createRef, useEffect, useState } from "react";
import "./App.scss";
import BlynkContext from "./contexts/BlynkContext";
import HomeLayout from "./layouts/homeLayout";
import Dial from "./components/dial";

function App() {
  const [pinValues, setPinValues] = useState({});

  useEffect(() => {
    fetch(
      "https://blynk.cloud/external/api/get?token=ZU9Oh1lwTNjRrLL0MHN5FjoH1hvlTym8&v1"
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <BlynkContext value={{ ...pinValues }}>
      <HomeLayout>
        <Dial min={0} max={100} value={50} unit={"°C"} />
      </HomeLayout>
    </BlynkContext>
  );
}

export default App;
