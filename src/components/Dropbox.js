const Dropdown = ({ options, active, onChange }) => {

  return (
    <select defaultValue={active} onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;