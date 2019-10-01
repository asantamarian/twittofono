var Twitt = require("./twitt") ;
var Bot = require("./bot.js") ;
var Data = require("./data.js") ;

var track = "#uvm,\
#uvm2017,\
#soyuvm2017,\
#comomeveoen10años?,\
#yoen10años,\
#uvmludico,\
#espacioludico,\
#twittofono";

var hashtags = new Array(
        {
          eng:"#uvm",spa:"#uvm",song:"A D E C G"
        },
        {
          eng:"#uvm2017",spa:"#uvm2017",song:"E A B G C"
        },
        {
          eng:"#soyuvm2017",spa:"#soyuvm2017",song:"D A G C A"
        },
        {
          eng:"#comomeveoen10años?",spa:"#comomeveoen10años?",song:"G A B D D G"
        },
        {
          eng:"#yoen10años",spa:"#yoen10años",song:"A B A C G"
        },
        {
          eng:"#uvmludico",spa:"#uvmludico",song:"C D E F G A B CM"
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



