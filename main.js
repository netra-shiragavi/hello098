var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition() ;


function on(){
    recognition.start();

}
recognition.onresult = function(event){
    console.log(event);
    var holder = event.results[0][0].transcript;
    speak();
}


function speak(){
    var synth = speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(event.results[0][0].transcript);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Window.set({
    width: 360,
    height: 360,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

