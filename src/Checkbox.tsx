import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label style={{display: 'block', position: 'relative',  cursor: 'pointer'}}>
      <input type="checkbox" style={{
        appearance: 'none',
        backgroundColor: checked ? 'green' : '#ffffff',
        border: '1px solid #999999',
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        position: 'relative',
        outline: 'none',
        cursor: 'pointer',
        marginRight:'5px',
      }} checked={checked} onChange={onChange} />
     
      {label}
    </label>
  );
};
