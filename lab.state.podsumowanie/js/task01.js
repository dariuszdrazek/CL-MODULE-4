import React from "react";
import ReactDOM from "react-dom";


/**
 * Nie modyfikujcie kodu poniżej
 */
function App() {
  return <Clock />;
}

ReactDOM.render(<App />, document.getElementById("app"));

export { App, Clock, ClockDate, ClockTime, ClockTimeHours, ClockTimeMinutes, ClockTimeSeconds, ClockDateDay, ClockDateMonth, ClockDateYear };
