export const helsinki = {
  Version: 1,
  Key: "133328",
  Type: "City",
  Rank: 30,
  LocalizedName: "Helsinki",
  EnglishName: "Helsinki",
  PrimaryPostalCode: "",
  Region: {
    ID: "EUR",
    LocalizedName: "Europe",
    EnglishName: "Europe",
  },
  Country: {
    ID: "FI",
    LocalizedName: "Finland",
    EnglishName: "Finland",
  },
  AdministrativeArea: {
    ID: "18",
    LocalizedName: "Uusimaa",
    EnglishName: "Uusimaa",
    Level: 1,
    LocalizedType: "Region",
    EnglishType: "Region",
    CountryID: "FI",
  },
  TimeZone: {
    Code: "EEST",
    Name: "Europe/Helsinki",
    GmtOffset: 3,
    IsDaylightSaving: true,
    NextOffsetChange: "2022-10-30T01:00:00Z",
  },
  GeoPosition: {
    Latitude: 60.17,
    Longitude: 24.939,
    Elevation: {
      Metric: {
        Value: 26,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 85,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [
    {
      Level: 2,
      LocalizedName: "Helsingin",
      EnglishName: "Helsingin",
    },
  ],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
    "Radar",
  ],
};
