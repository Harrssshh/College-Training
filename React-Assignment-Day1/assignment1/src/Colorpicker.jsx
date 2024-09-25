import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const handleColorChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <center>
        <input type="color" onChange={handleColorChange} />
    </center>
  );
};

export default ColorPicker;
