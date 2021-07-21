Webcam.set({
 width:350,
 height:300,
 image_format:'png',
 png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function TakeSnapshot() {
    Webcam.snap(function (img_uri) {
       document.getElementById("result").innerHTML="<img id='Snap' src='"+img_uri+"'>"; 
    });
}
console.log("ml5 version:-", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ODRFbYBBb/model.json",model_loaded);
function model_loaded() {
    console.log("model loaded")
}
function Identify() {
    img=document.getElementById("Snap");
    classifier.classify(img,getResult);
}
function getResult(error,result) {
    if (error) {
        console.log(error)
    }else{
        console.log(result)
    document.getElementById("object_name").innerHTML=result[0].label
    document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3)
    }
}
