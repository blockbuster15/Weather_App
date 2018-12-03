const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'Address',
        description: 'Address to fetch weather for',
        string: true
      }
   })
   .help()
   .alias('help','h')
   .argv;

   var encodedAddress = encodeURIComponent(argv.Address);

request({
  url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAGgtGFxJXvCyX1dGRgfDzLomGiFhwLa1k`,
  json: true
}, (error, response, body) => {

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

});
