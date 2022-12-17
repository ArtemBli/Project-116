noseX=0;
noseY=0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/D0c3kqb2/Moustache-PNG-Clipart.png');
}

function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 450, 400);
    image(moustache, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+10;
        console.log("nose x = " + noseX)
        console.log("nose y = " + noseY) 
    }
}