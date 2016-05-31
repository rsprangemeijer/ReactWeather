var React = require('React');

var WeatherMessage = ({temp, location}) => {
    return (
      <h3 className="text-centered">It is {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;
