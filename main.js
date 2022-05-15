x=0;
y=0;

draw_circle="";
draw_rec="";
draw_square="";
draw_triangle="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML="system is listening to you~~~. please speak 😁 🎙️🎤";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognized as................"+content;
    if (content=="circle"|| content=="Circle")
    {
      x=Math.floor(Math.random()*900);
      y=Math.floor(Math.random()*800);
      document.getElementById("status").innerHTML="Started drawing circle 😁🔴⭕⏺️🟡🟠";
    }
    if (content=="rectangle"|| content=="Rectangle")
    {
      x=Math.floor(Math.random()*900);
      y=Math.floor(Math.random()*800);
      document.getElementById("status").innerHTML="Started drawing rectangle 😁⏹️🟧🟨🟩🟦🟪🟫🔳";
    }
}

function setup()
{
    canvas=createCanvas(900,800);
}

function draw()
{
    if (draw_circle=="set")
    {
     radius=Math.floor(Math.random()*100);
     circle(x,y,radius);
     document.getElementById("status").innerHTML=" Circle is drawn 😁🔴⭕⏺️🟡🟠";
     draw_circle="";
    }

    if (draw_rec=="set")
    {
     radius=Math.floor(Math.random()*100);
     circle(x,y,radius);
     document.getElementById("status").innerHTML=" Rectangle is drawn 😁⏹️🟧🟨🟩🟦🟪🟫🔳";
     draw_rec="";
    }
}