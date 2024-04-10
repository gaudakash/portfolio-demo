import React from "react";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <img src="src/assests/toggle.svg" alt="svg" />
    </button>
  );
};

export default ToggleButton;
