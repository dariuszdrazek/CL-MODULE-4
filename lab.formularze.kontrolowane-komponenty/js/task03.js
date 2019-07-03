import React from "react";
import ReactDOM from "react-dom";




/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
  return <SelectOrType list={["BMW", "Jaguar", "Porshe"]} />;
}

ReactDOM.render(<App />, document.getElementById("app"));

export { SelectOrType, App };
