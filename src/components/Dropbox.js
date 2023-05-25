import React, { useState } from "react";

const Dropdown = ({ options, active }) => {
  const [activeOption, setActive] = useState("choose option");

  const handleChange = (event) => {
    setActive(event.target.value);
  };

  return (
    <select value={active} onChange={handleChange}>
      <option disabled value={active}>
        {activeOption}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;