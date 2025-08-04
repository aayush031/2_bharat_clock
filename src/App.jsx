import React from "react";
import "./App.css";
import ClockHeading from "./components/clockheading";
import ClockSlogan from "./components/clockslogan";
import CurrentTime from "./components/currenttime";

function App() {
  return (
    <div>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan />
        <CurrentTime />
      </center>
    </div>
  );
}

export default App;
