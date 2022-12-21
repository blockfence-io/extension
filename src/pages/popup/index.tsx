import React, { useState } from "react";
import { render } from "react-dom";

function Panel() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>A react popup</h1>
      <p>{counter} clicks</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

render(<Panel />, window.document.querySelector("#app-container"));
