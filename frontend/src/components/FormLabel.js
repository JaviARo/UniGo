import React from "react";

function FormLabel(props) {
  function changeLabel() {
    var label = document.getElementById(props.name);
    label.classList.remove("labelText");
    label.classList.add("labelTextSelected");
  }

  return (
    <div id="labelContainer">
      <div id={props.name}>
        <label id="label">
          <p id="labelText">{props.label}</p>
          <input 
            value={props.value}
            type="text" 
            name={props.name} 
            onClick={changeLabel} 
          />
        </label>
      </div>
    </div>
  );
}

export default FormLabel;
