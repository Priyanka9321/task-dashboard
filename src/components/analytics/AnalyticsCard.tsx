interface AnalyticsCardProps {
  label: string;
  value: string | number;
}

function AnalyticsCard({ label, value }: AnalyticsCardProps) {
  return (
    <div className="analytics-card">
      <p className="analytics-label">{label}</p>
      <p className="analytics-value">{value}</p>
    </div>
  );
}

export default AnalyticsCard;
