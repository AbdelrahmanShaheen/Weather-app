const request = require("postman-request");

const geocode = (address, callback) => {
  const geocodeURL = `http://api.positionstack.com/v1/forward?access_key=a89bc9cda2e3791c720e195c48df3c2b&query=${address}&limit=1`;

  request({ url: geocodeURL, json: true }, (error, response, body) => {
    if (error) callback(`Unable to connect to location services!`);
    else if (body.error || !body.data.length)
      callback(`Unable to find location. try another search.`);
    else {
      const [data] = body.data;
      const { latitude, longitude, label } = data;
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: label,
      });
    }
  });
};
module.exports = geocode;
