const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <input
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          className='form-input'
        >
        
        </input>
      </div>
    );
  };
  export default FormRowSelect;