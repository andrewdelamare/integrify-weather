import { iconFetcher } from "../services/iconFetcher";
export const Card = ({ weather }) => {
  const dailyFC = weather.DailyForecasts[0];
  const dayIcon = iconFetcher(dailyFC.Day.Icon);
  const nightIcon = iconFetcher(dailyFC.Night.Icon);
  return (
    <div className="card-main">
      <h2>Today</h2>
      <h3>{weather.Headline.Text}</h3>
      <div className="card-head">
        <h3>High: {dailyFC.Temperature.Maximum.Value} C </h3>
        <h3>Low: {dailyFC.Temperature.Minimum.Value} C </h3>
      </div>
      <div className="card-section">
        <img src={`${dayIcon}`} alt="nothing" className="weather-icon" />
        <div>
          <h3>Day: {dailyFC.Day.IconPhrase}</h3>
        </div>
      </div>
      <div className="card-section">
        <img src={`${nightIcon}`} alt="nothing" className="weather-icon" />
        <div>
          <h3>Night: {dailyFC.Night.IconPhrase}</h3>
        </div>
      </div>
    </div>
  );
};
