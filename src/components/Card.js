import { iconFetcher } from "../services/iconFetcher";
export const Card = ({ weather }) => {
  const dayIcon = iconFetcher(weather.DailyForecasts[0].Day.Icon);
  const nightIcon = iconFetcher(weather.DailyForecasts[0].Night.Icon);
  return (
    <div className="card-main">
      <div className="card-section">
        <img src={`${dayIcon}`} alt="nothing" className="weather-icon" />
      </div>
      <div>
        <img src={`${nightIcon}`} alt="nothing" className="weather-icon" />
      </div>
    </div>
  );
};
