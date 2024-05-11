
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Button } from './Button';

interface TodoRowProps {
  label: string;
  onDelete: () => void;
}

export const TodoRow: React.FC<TodoRowProps> = ({ label,onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
    >
      <Checkbox  label={label} checked={checked} onChange={() => setChecked(!checked)} />
      {hover && <Button variant="small" onClick={onDelete} >✖</Button>}
    </div>
  );
};


