import { useState } from 'react';

const TextInput = ({ id, label, value, onChange, maxLength, type = 'text', className, showLength = true }) => {
  const displayLength = maxLength ? Math.min(value.length, maxLength) : value.length;

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (!maxLength || newValue.length <= maxLength) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-lg font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        className={className}
        required
      />
      {showLength && maxLength && (
        <p className="text-sm text-gray-500">
          {displayLength}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default TextInput;
