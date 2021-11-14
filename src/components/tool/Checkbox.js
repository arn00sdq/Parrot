const Checkbox = ({ label, value, onChange }) => {
    return (
      <label className="filter-text-label">
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  export default Checkbox;