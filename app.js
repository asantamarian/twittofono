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
          eng:"#globalwarming",spa:"#calentamientoglobal",song:"C F"
        },
        {
          eng:"#climatechange",spa:"#cambioclimatico",song:"D G"
        },
        {
          eng:"#climate",spa:"#clima",song:"E C"
        },
        {
          eng:"#environment",spa:"#medioambiente",song:"F CM"
        },
        {
          eng:"#climate",spa:"#clima",song:"G A"
        },
        {
          eng:"#water",spa:"#agua",song:"A E"
        },
        {
          eng:"#sustainable",spa:"#sustentable",song:"B F"
        },
        {
          eng:"#greencity",spa:"#ecociudad",song:"CM"
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
	
	//Data.saveTwitt(twitt);
	
	Bot.playTwitt(twitt.text);
	
});



