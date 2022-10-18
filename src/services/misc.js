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

export const helWeather = {
  Headline: {
    EffectiveDate: "2022-10-18T08:00:00+03:00",
    EffectiveEpochDate: 1666069200,
    Severity: 5,
    Text: "Expect showers Tuesday morning",
    Category: "rain",
    EndDate: "2022-10-18T14:00:00+03:00",
    EndEpochDate: 1666090800,
    MobileLink:
      "http://www.accuweather.com/en/fi/oulu/135967/daily-weather-forecast/135967?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/fi/oulu/135967/daily-weather-forecast/135967?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2022-10-18T07:00:00+03:00",
      EpochDate: 1666065600,
      Sun: {
        Rise: "2022-10-18T08:19:00+03:00",
        EpochRise: 1666070340,
        Set: "2022-10-18T17:46:00+03:00",
        EpochSet: 1666104360,
      },
      Moon: {
        Rise: "2022-10-18T21:38:00+03:00",
        EpochRise: 1666118280,
        Set: "2022-10-19T18:25:00+03:00",
        EpochSet: 1666193100,
        Phase: "WaningCrescent",
        Age: 22,
      },
      Temperature: {
        Minimum: {
          Value: -0.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 5,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: -2.8,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cold",
        },
        Maximum: {
          Value: 4.5,
          Unit: "C",
          UnitType: 17,
          Phrase: "Chilly",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: -2.8,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cold",
        },
        Maximum: {
          Value: 4.5,
          Unit: "C",
          UnitType: 17,
          Phrase: "Chilly",
        },
      },
      HoursOfSun: 1.8,
      DegreeDaySummary: {
        Heating: {
          Value: 16,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Mold",
          Value: 405,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "UVIndex",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
      ],
      Day: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        ShortPhrase: "A morning shower; cloudy",
        LongPhrase: "A shower in places this morning; otherwise, cloudy",
        PrecipitationProbability: 40,
        ThunderstormProbability: 8,
        RainProbability: 40,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 38,
            Localized: "NE",
            English: "NE",
          },
        },
        WindGust: {
          Speed: {
            Value: 29.6,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 127,
            Localized: "SE",
            English: "SE",
          },
        },
        TotalLiquid: {
          Value: 0.2,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0.2,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.5,
        HoursOfRain: 0.5,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 93,
        Evapotranspiration: {
          Value: 0.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 197.2,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        ShortPhrase: "Clearing",
        LongPhrase: "Clearing",
        PrecipitationProbability: 25,
        ThunderstormProbability: 0,
        RainProbability: 11,
        SnowProbability: 14,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 1,
            Localized: "N",
            English: "N",
          },
        },
        WindGust: {
          Speed: {
            Value: 24.1,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 9,
            Localized: "N",
            English: "N",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 63,
        Evapotranspiration: {
          Value: 0.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 0,
          Unit: "W/m²",
          UnitType: 33,
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/fi/oulu/135967/daily-weather-forecast/135967?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/fi/oulu/135967/daily-weather-forecast/135967?day=1&unit=c&lang=en-us",
    },
  ],
};
