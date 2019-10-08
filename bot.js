var five = require("johnny-five");
var board = new five.Board();
var servoC;
var servoD;
var servoE;
var servoF;
var servoG;
var servoA;
var servoB;
var servoCM;
var botProps;
var lastNote="";
var init = function(props){
  botProps = props;
  if(botProps.boardOn){
    initBoard();
  }
}

var initBoard = function(){
  board.on("ready", function() {
        servoC = new five.Servo({
          pin:10,
          center:true
        });
        
        servoD = new five.Servo({
          pin:2,
          center:true
        });
        servoE = new five.Servo({
          pin:3,
          center:true
        });
        servoF = new five.Servo({
          pin:4,
          center:true
        });
        servoG = new five.Servo({
          pin:5,
          center:true
        });
        servoA = new five.Servo({
          pin:6,
          center:true
        });
        servoB = new five.Servo({
          pin:7,
          center:true
        });
        servoCM = new five.Servo({
          pin:8,
          center:true
        });
        servoC.center();
        servoD.center();
        servoE.center();
        servoF.center();
        servoG.center();
        servoA.center();
        servoB.center();
        servoCM.center();
       

        
        
        
        /*var notes = "CM - G - F - G - C - D - E - G - E - D - G A B CM - G - F - G - - C - D - E - E - E - D - C - G A B CM B - B G A - A F G - C D E F D";
        playSong(notes);*/


  

});
}

var playTwitt = function(text){
  var song = getSongToPlay(text);

  if(!botProps.boardOn){
    log(song);
    return;
  }

  playSong(song);
}

var playSong =function(notes){
  
  var song = notes.split(" ");
      
      var index = 0;

      (function loopSong() {
          playNote(song[index]);
          if (++index < song.length) {
              setTimeout(loopSong, 340);  
          }
      })();

}

var playNote = function(str){
    
    var note = str.toUpperCase();

    switch (note) {
      case "C":
      case "DO":
        servoC.to(60);
        setTimeout(function(){
          servoC.center();
        }, 300);
        break;
      case "D":
      case "RE":
        servoD.to(60);
        setTimeout(function(){
          servoD.center();
        }, 300);
        break;
      case "E":
      case "MI":
        servoE.to(50);
        setTimeout(function(){
          servoE.center();
        }, 300);
        break;
      case "F":
      case "FA":
        servoF.to(60);
        setTimeout(function(){
          servoF.center();
        }, 300);
        break;
      case "G":
      case "SOL":
        servoG.to(60);
        setTimeout(function(){
          servoG.center();
        }, 300);
        break;
      case "A":
      case "LA":
        servoA.to(60);
        setTimeout(function(){
          servoA.center();
        }, 300);
        break;
      case "B":
      case "SI":
        servoB.to(60);
        setTimeout(function(){
          servoB.center();
        }, 300);
        break;
      case "CM":
      case "DOM":
        servoCM.to(60);
        setTimeout(function(){
          servoCM.center();
        }, 300);
        break;
      
    }
    
    
}
var getSongToPlay = function(str){
    var output ="";
    botProps.hashtags.forEach( function(element, index) {
     
        if(str.toUpperCase().includes(element.eng.toUpperCase()) || str.toUpperCase().includes(element.spa.toUpperCase())){
          
          output = element.song;
          
          if(str.toUpperCase().includes("#TWITTOFONO")){
     
              output = str.substring(str.indexOf("#twittofono")+11, str.length).trim();
          }
          
        }
    });
    console.log(output);
    return output;
}
var log = function(msg){
  if(botProps.log){
    console.log(msg);
  }
}
module.exports = {
  initBot: init,
  playTwitt:playTwitt,
  playSong:playSong
};
