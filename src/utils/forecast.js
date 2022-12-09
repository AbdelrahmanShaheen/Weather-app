const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=34e0232c7197852734de80320230b9bc&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, function (error, response, body) {
    if (error) {
      callback(`Unable to connect to location services!`, undefined);
    } else if (body.error) {
      callback(`Unable to find location. try another search.`, undefined);
    } else {
      const current = body.current;
      const {
        weather_descriptions: [weatherDesc],
        temperature,
        feelslike,
      } = current;
      callback(
        undefined,
        `${weatherDesc}. It's currently ${temperature} degress out. There is a ${feelslike}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
