import React from 'react';
const Checkbox = ({ id,label, value, onChange }) => {
    return (
      <li>
        <label>
          <input type="checkbox" name=""/>
          {label}
          <span class="check"></span>
        </label>
      </li>
    );
  };

  export default Checkbox;