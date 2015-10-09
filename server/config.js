var yelp = require('yelp');
var config = {

  development: {
    dbpath: 'mongodb://localhost/paireddev',
    port: 3000,
    yelp: {
      consumer_key: "xMbQVJGdx8gO-GoTwNzhoQ",
      consumer_secret: "WlaUMIrmrPG_zq3eYHw-TUv1T2Q",
      token: "Qcu_1iG7wN3wYIySD4pUMl_k-wuAEg2W",
      token_secret: "O3GBw0ThCM08gWwTOMHaEMBVVvI"
    },

    api_keys: {
      geocoding: process.env.APIKEY_GEOCODING || 'AIzaSyBZGjKmctGCiNwuYFEbSa9tr-y8Ot_E6FY',
    }
  },

  production: {
    dbpath: process.env.MONGOLAB_URI,
    port: process.env.PORT || 3000,
    yelp: {
      consumer_key: "xMbQVJGdx8gO-GoTwNzhoQ",
      consumer_secret: "WlaUMIrmrPG_zq3eYHw-TUv1T2Q",
      token: "Qcu_1iG7wN3wYIySD4pUMl_k-wuAEg2W",
      token_secret: "O3GBw0ThCM08gWwTOMHaEMBVVvI"
    },
    api_keys: {
      geocoding: process.env.APIKEY_GEOCODING,
    }
  }

};

// Set current environment here
module.exports = config[process.env.NODE_ENV || 'development'];
