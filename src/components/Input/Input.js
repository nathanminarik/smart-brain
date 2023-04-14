import React from 'react';

export const Input = ({
  label,
  name,
  id,
  type,
  placeholder,
  handleChange,
  value,
}) => {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="db fw6 lh-copy f6"
      ></input>
    </p>
  );
};
