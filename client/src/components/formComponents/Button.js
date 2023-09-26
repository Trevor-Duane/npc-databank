import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
      <button onClick={onClick} type={type} className={type === "solid" ? "solidStyle" : "outlineStyle"}>
        {children}
      </button>
  );
};

export default Button;