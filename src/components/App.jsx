import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  var [ct, setCt] = useState(0);
  return (
    <div className="container">
      <h1>{ct}</h1>
      <button onClick={() => setCt(ct - 1)}>-</button>
      <button onClick={() => setCt(ct + 1)}>+</button>
    </div>
  );
}

export default App;
