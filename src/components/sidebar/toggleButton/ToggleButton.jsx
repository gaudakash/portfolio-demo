const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 162 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39 36H123"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        />
        <path
          d="M39 75H123"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        />
        <path
          d="M39 114H123"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
