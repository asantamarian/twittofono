
var Twitter = require('twitter');
var RestClient = require('node-rest-client').Client;

  /* Configure the Twitter API */
  var TWITTER_CONSUMER_KEY = '2b2IhyPAoUKjTieXFPMgDL0Ny';
  var TWITTER_CONSUMER_SECRET = 'USHVbGR0j9aNAglFe8WiMkvfJkm449JUhJqvTo1awIhgdfJXC9';
  var TWITTER_ACCESS_TOKEN = '783980751100473344-UNdEYhGoPurVP5FDo2pdypNMu6XugNH';
  var TWITTER_ACCESS_TOKEN_SECRET = 'hY20bQJ178JIVQPGLZ8TzGYkgbwL6YNvpOl0fZhXR2LnV';

  /* Set Twitter search phrase */
  var TWITTER_SEARCH_PHRASE = 'DO';

  var client = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
  });
  
  var hashtags = new Array(
        {
          eng:"#globalwarming",spa:"#calentamientoglobal",song:"C"
        },
        {
          eng:"#climatechange",spa:"#cambioclimatico",song:"D"
        },
        {
          eng:"#beforetheflood",spa:"#antesdelainundacion",song:"E"
        },
        {
          eng:"#environment",spa:"#medioambiente",song:"F"
        },
        {
          eng:"#climate",spa:"#clima",song:"G"
        },
        {
          eng:"#water",spa:"#agua",song:"A"
        },
        {
          eng:"#sustainable",spa:"#sustentable",song:"B"
        },
        {
          eng:"#greencity",spa:"#ecociudad",song:"CM"
        },
        {
          eng:"#lumen2016",spa:"#lumen2016",song:"C D E"
        },
        {
          eng:"#espacioludico",spa:"#espacioludico",song:"F G A"
        },
        {
          eng:"#twittofono",spa:"#twittofono",song:"C B A"
        },
        {
          eng:"#trololo",spa:"#trololo",song:"CM - G F G - C D E - G - E D - G A B CM - G F G - C D E - E - E - D - C - G A B CM B B G A - A F G - C D E F D"
        }
  );
  


var startListening = function(track,callback){
    client.stream('statuses/filter', {track: track}
                                            , function(stream) {
        stream.on('data', function(event) {
        
        
        console.log(event.text);
        
        callback(event);
        
      });

      stream.on('error', function(error) {
        //throw error;
      });
    });
}

module.exports = {
  startListening: startListening
};





/*
    1.- #globalwarming y #calentamientoglobal   = DO
    2.- #climatechange  y #cambioclimatico  = RE
    3.- #beforetheflood y #antesdelainundacion = MI
    4.- #environment y #medioambiente = FA
    5.- #climate y #clima = SOL
    6.- #water y #agua = LA
    7.- #sustainable y #sustentable  = SI
    8.- #greencity y #ecociudad = DO

    #lumen2016 = DO RE MI
    #espacioludico = FA SOL LA
    #twittofono = SI DO

*/

