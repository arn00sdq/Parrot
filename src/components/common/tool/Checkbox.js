import React from "react";
const Checkbox = ({ label, from, handles, type}) => {
  function onCheckBoxClick() {
    switch (type) {
      case "theme":
        handles.handleThemeFilterChange(label, from)
      break;
      case "tense":
        handles.handleTenseFilterChange(label, from)
      break;
      case "level":
        handles.handleLevelFilterChange(label, from)
      break;
    }
    
  }

  return (
    <li>
      <label>
        <input className="checkInput" onClick={onCheckBoxClick} type="checkbox" />
        
        <span class="check">{label}</span>
      </label>
    </li>
  );
};

export default Checkbox;
