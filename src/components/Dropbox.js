import React, { useState } from "react";

const Dropdown = ({ options, active, onChange }) => {
  const [activeOption, setActive] = useState(`${active}%`);

  return (
    <select defaultValue={active} onChange={onChange}>
      <option disabled value={active}>
        {activeOption}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.height}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;