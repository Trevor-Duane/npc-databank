import React from "react";

const Dropdowm = ({id, name, options, handleChange, selectedValue, className }) => (
    <div>
        <select id={id} name={name} onChange={handleChange} value={selectedValue} className={className}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdowm;
