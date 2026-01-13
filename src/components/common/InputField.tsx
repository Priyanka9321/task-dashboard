import type { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'date';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default InputField;
