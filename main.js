var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    
    console.log("reached inside start function");
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult =  function (event) {

 console.log(event); 

var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();
   
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds";
       
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);

    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});


