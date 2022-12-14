import React from "react";
import "./formLabel.css";

function FormLabel(props) {
  function changeLabel() {
    var label = document.getElementById(props.name);
    console.log(props);
    //   { document.getElementById("label") ?
    //   label.classList.remove("label")
    //   label.classList.add("selected") :
    //   label.classList.add("label");
    // }

    // label.classList.remove("label");
    label.classList.remove("labelText");
    // label.classList.add("selected");
    label.classList.add("labelTextSelected");
  }

  return (
    <div id="labelContainer">
      <div id={props.name}>
        <label id="label">
          <p id="labelText">{props.label}</p>
          <input type="text" name={props.name} onClick={changeLabel} />
        </label>
      </div>
    </div>
  );
}

export default FormLabel;
