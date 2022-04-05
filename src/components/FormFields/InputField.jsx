import React, { useState } from 'react';

 const InputText = ({ value, onChange, label }) => {
    return (
      <div className="form-field">
        <label className="input-label">{label}</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
    );
  };

 const InputPassword = ({ value, onChange, label }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="form-field">
        <label className="input-label">{label}</label>
        <input
          type="password"
          placeholder="password"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

export { InputText , InputPassword };

