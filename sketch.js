
var beat = [];
var timeStamp = [];

var measure = [];
var measureGen = [];
var library = [];


var cols = 50;
var rows = 100;

var maxTime = 8000;

var quart = 1000;
var eighth = 500;
var sixt = 250;
var sixt2 = 125;

var modConst = 50;
var libCount = 0;

var click;
var clickInterval;
var play = 0;

var isMade = false;
var isPlayed = false;

var title;
var buttonX = 100;
var buttonY = 500;
var buttonYOffset = 25;

var playButton;

function preload(){
  //sets accepted sound files to be loaded
  soundFormats('mp3','wav');
  
  click = loadSound('assets/click.wav');
}


function setup() {
  createCanvas(0, 0);

  
  title = createElement('h1','RhythmaCoin');
  title.position(30,10);


  //playClick();

  measure[0] = sixt;
  measure[1] = quart;
  measure[2] = eighth;
  measure[3] = sixt2;

  for(sets = 0 ; sets < cols; ++sets){
    library[sets] = [];
    for(var j = 0; j < rows; ++j){      
    }
  }

  sets = 0;
  rep = 0;

  var genButton = createButton("Generate Pattern");
  genButton.mousePressed(generateRyt);
  genButton.position(buttonX);
  
  
}



function playRyt()
{
  playClick();
  
  var grandTotal = 0;

  for(var i = 0 ; i < library[libCount-1].length ; ++i)
  {
      if(library[libCount-1][i+1] == null)
      {
        grandTotal = library[libCount-1][i];   
   //     total[i] = 0;   
        continue;
      }
      else if(i == 1)
      {
        makeBeat(library[libCount-1][0]);
        continue;
      }
      
      grandTotal = library[libCount-1][i] + library[libCount-1][i+1];
      
      makeBeat(grandTotal);
      
  

 /* for(var i = 0 ; i < measureGen.length ; ++i)
  {
      if(measureGen[i+1] == null)
      {
        grandTotal = measureGen[i];   
   //     total[i] = 0;   
        continue;
      }
      else if(i == 1)
      {
        makeBeat(measureGen[0]);
        continue;
      }
      
      grandTotal = measureGen[i] + measureGen[i+1];
      
      makeBeat(grandTotal);
      
  }*/
}
}

function makeBeat(elt)
{

  setTimeout(playClick,elt);
  
}

function draw() {
  background(220);
  //currTime = millis();

  


  
  }

function playClick()
{
  click.play();

}

/*
function keyPressed()
{
  
  //checks if spacebar is pressed
  if(keyCode == 32)
  {
    click.play();

    //stores current time program has been running in ms
    timeStamp[timeIndex] = currTime;
    
    //will start measuring after 1st key press
    if(timeIndex > 0)
    {
      //takes difference between current time and prev time
      timeElapsed = timeStamp[timeIndex] - timeStamp[timeIndex-1];
      
      
    }
    
    console.log(timeIndex+" " + timeElapsed);
    
    var mod = timeElapsed % modConst;
  
    if(mod > modConst/2)
    {
      var diff = modConst - mod;
      beat[sets][rep] = timeElapsed + diff;
    //  console.log("rounding up: "+beat[set][rep]);
    }
    else if(mod <= modConst/2 && mod != 0)
    {
    
      beat[sets][rep] = timeElapsed - mod;
    //  console.log("rounding down: "+ beat[set][rep]);
    }
    else if(mod == 0)
    {
      beat[sets][rep] = timeElapsed;
     // console.log("staying the same: "+ beat[set][rep]);
    }
    
    rep++;
    ++timeIndex;
  }
  
  
  if(keyCode == ENTER)
  {
    
    for(var i = 0 ; i > rep ; ++i)
    {
        clickInterval =  beat[sets][i]
        setTimeout(playClick, clickInterval*2);
       // playClick();
        
        console.log("playback time "+beat[sets][i]);
    }


    ++sets;
    rep = 0;
   // timeIndex = 0;
    console.log("rhythm stored!");
  }


  

}
*/

function generateRyt()
{
  
  var measureTotal = 0;
  var i = 0;
  
  while(measureTotal < maxTime)
  {
    var randomNote = Math.floor(Math.random() * measure.length);
    var note = measure[randomNote];
    console.log(note);

    measureGen[i] = note;

    measureTotal += note;
    ++i;


  }

  
  for(var i = 0 ; i < measureGen.length ; ++i)
  {
    library[libCount][i] = measureGen[i];
  } 


  playButton = createButton("Play Beat "+ (libCount+1));
  
  playButton.position(buttonX, buttonY);
  playButton.mousePressed(playRyt);
  buttoxX =+ buttonYOffset;
  buttonY += buttonYOffset;

  console.log("first save: "+ library[libCount-1]);
  libCount++;



}

