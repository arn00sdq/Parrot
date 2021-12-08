import React from "react";
const Checkbox = ({ label, from, handles, type}) => {
  function onCheckBoxClick() {
    switch (type) {
      case "theme":
        handles.handleThemeFilterChange(label, from)
      break;
    }
    
  }

  return (
    <li>
      <label>
        <input onClick={onCheckBoxClick} type="checkbox" />
        {label}
        <span class="check"></span>
      </label>
    </li>
  );
};

export default Checkbox;
