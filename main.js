// https://i.postimg.cc/3x3QzSGq/m.png
noseX=0;
noseY=0;
function preload(){
    mustache_image=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size (300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}

function modelloaded(){
    console.log("model is loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(mustache_image,noseX-10,noseY,30,30)
}

function take_snapshot(){    
    save('myFilterImage.png');
  }
  function gotposes(result){
  if(result.length >0)
  {
    console.log(result);
    console.log("nose x="+ result[0].pose.nose.x);
    console.log("nose y+"+result[0].pose.nose.y);
    noseX=result[0].pose.nose.x;
    noseY=result[0].pose.nose.y;
  }
}