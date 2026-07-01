const InfoRow = ({
  label,
  value,
}) => {
  return (
    <div className="info-row">

      <div className="label">
        {label}
      </div>

      <div className="value">
        {value}
      </div>

    </div>
  );
};

export default InfoRow;