function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(700, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function modelLoaded(){
console.log('PoseNet Is Initialized');
}

function draw(){
    background('#969A97');
}