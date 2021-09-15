const Button = ({ color, text }) => {
  const handleClick = () => {
    console.log('click')
  };

  return (
    <button
      onClick={ handleClick }
      style={{ background: color }}
      className="btn"
    >
      { text }
    </button>
  )
};

export default Button