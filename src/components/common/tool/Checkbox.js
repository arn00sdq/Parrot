import React from "react";
const Checkbox = ({ label, from, handles }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {label}
        <span class="check"></span>
      </label>
    </li>
  );
};

export default Checkbox;
