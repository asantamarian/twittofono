var Twitt = require("./twitt") ;
var Bot = require("./bot.js") ;
var Data = require("./data.js") ;

var track = "#sustentable,\
#sustainable,\
#energy,\
#globalwarming,\
#calentamientoglobal,\
#climatechange,\
#cambioclimatico,\
#beforetheflood,\
#antesdelainundacion,\
#environment,\
#medioambiente,\
#climate,\
#clima,\
#water,\
#agua,\
#greencity,\
#ecociudad,\
#twittofono";

var hashtags = new Array(
        {
          eng:"#globalwarming",spa:"#calentamientoglobal",song:"C"
        },
        {
          eng:"#climatechange",spa:"#cambioclimatico",song:"C D"
        },
        {
          eng:"#beforetheflood",spa:"#antesdelainundacion",song:"C D E"
        },
        {
          eng:"#environment",spa:"#medioambiente",song:"C D E F"
        },
        {
          eng:"#climate",spa:"#clima",song:"C D E F G"
        },
        {
          eng:"#water",spa:"#agua",song:"C D E F G A"
        },
        {
          eng:"#sustainable",spa:"#sustentable",song:"C D E F G A B"
        },
        {
          eng:"#greencity",spa:"#ecociudad",song:"C D E F G A B CM"
        },
        {
          eng:"#trololo",spa:"#trololo",song:"CM - G - F - G - C - D - E - G - E - D - G A B CM - G - F - G - - C - D - E - E - E - D - C - G A B CM B - B G A - A F G - C D E F D"
        },
        {
          eng:"#twittofono",spa:"#twittofono",song:""
        }
  );
var botProps ={
	hashtags:hashtags,
	boardOn:true,
  log:true
}
Bot.initBot(botProps);

Twitt.startListening(track,function(twitt){
	
	Data.saveTwitt(twitt);
	
	Bot.playTwitt(twitt.text);
	
});



