

const NumberDisplay = ({ number }) => {
  const formattedNumber = number.toLocaleString('en');

  return (
    <div>
      {formattedNumber}
    </div>
  );
};

export default NumberDisplay;