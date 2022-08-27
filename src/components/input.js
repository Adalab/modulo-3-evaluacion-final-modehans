// Fichero src/components/Input.js

// Que no se te olvide importar las prop types
import PropTypes from 'prop-types';

const Input = (props) => {
  const handleInput = (ev) => {
    props.handleChange({
      name: props.inputName,
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInput}
      />
    </>
  );
};

Input.defaultProps = {
  inputType: 'text',
};

// Estas son las prop types
// Fíjate en los tipos de las props y si son o no obligatorias
Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
