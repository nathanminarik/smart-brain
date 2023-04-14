import React, { useState } from 'react';
import { Input } from './../components';

export const useForm = (inputFields) => {
  //Initialize data object according to inputFieldsuration
  const initialData = inputFields.reduce(
    (acc, field) => ({ ...acc, [field.name]: '' }),
    {}
  );

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const Inputs = inputFields.map(
    ({ name, id, type, label, placeholder, options }) => (
      <Input
        name={name}
        type={type}
        label={label}
        key={id}
        placeholder={placeholder}
        options={options}
        value={data[name]}
        handleChange={handleChange}
      />
    )
  );

  return [data, Inputs];
};
