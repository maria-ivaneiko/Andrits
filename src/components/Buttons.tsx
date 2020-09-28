import React from 'react';

// Default button
type IButtonProps = {
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export const Button:React.FC<IButtonProps> = ({
  color = 'primary', size = 'md', type = 'button', children
}) => {
  return (
    <button
      className={`btn btn-${color} btn-${size}`}
      type={type}
    >{children}</button>
  )
}

// Button with scaled
type IButtonScaleProps = {
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode
}

export const ButtonScale:React.FC<IButtonScaleProps> = ({
  color = 'primary', size = 'md', type = 'button', children
}) => {
  return (
    <button
      className={`btn btn-${color} btn-${size} btn-scale`}
      type={type}
    ><span>{children}</span></button>
  )
};
