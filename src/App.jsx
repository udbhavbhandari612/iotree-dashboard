import { useState } from "react";
import "./App.scss";
import BlynkContext from "./contexts/BlynkContext";
import HomeLayout from "./layouts/homeLayout";
import Dial from "./components/dial";

function App() {
  const [pinValues, setPinValues] = useState({});

  return (
    <BlynkContext value={{ ...pinValues }}>
      <HomeLayout>
        <Dial />
      </HomeLayout>
    </BlynkContext>
  );
}

export default App;
