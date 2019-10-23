import React from 'react';
import '../style/input.scss';
import * as classnames from 'classnames';

function isInvalid({ valid, touched, shouldValidate, formSubmitted }) {
  return !valid && shouldValidate && touched && formSubmitted;
}

const Input = (props) => {
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;
  const invalid = isInvalid(props);

  return (
    <div className={classnames('input', { invalid })}>
      {/*<label htmlFor={htmlFor}>{props.label}</label>*/}
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        minLength={props.minLength}
      />

      {
        invalid ? (
          <div className="input-error">
            {props.errorMessage}
          </div>
        ) :
          null
      }
    </div>
  );
};

export default Input;
