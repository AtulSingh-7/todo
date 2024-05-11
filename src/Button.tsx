
import React from 'react';

interface ButtonProps {
  variant: 'big' | 'small';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant, children,onClick }) => {
  const className = variant === 'big' ? 'big-button' : 'small-button';
  return <button className={className} style={buttonstyle} onClick={onClick}>{children}</button>;
};

const buttonstyle = {
  backgroundColor: 'green',
  color: 'white',
  border: '1px green',
  cursor: 'pointer',
  paddingleft:'5px',
  paddingright:'5px',
  borderRadius:'5px',

};
