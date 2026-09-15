function AttendanceCard({ title, value, className }) {
  return (
    <div className={`attendance-card ${className}`}>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

export default AttendanceCard;