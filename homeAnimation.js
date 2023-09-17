let imagesBank = []
let imagesLive = []
let noise = []
let changeOn = []

let currentTime, randomBank, randomNoise
let noiseTime = [];
let prevTime = []
randomLive = []
let timers = []

function preload() {

    for (let i = 0; i < 21; i++) {
        imagesBank[i] = loadImage(`./images/home/img_${i}.png`);
    }

    for (let i = 0; i < 4; i++) {
        noise[i] = loadImage(`./images/home/noise_${i}.gif`);
    }
}

function setup() {
    pixelDensity(1);
    // canvas = createCanvas(windowWidth / 3, windowHeight - 40); // canvas do tamanho da janela
    // canvas.position(windowWidth / 2 - canvas.width / 2, 40);
    canvasCreation()
    for (let i = 0; i < imagesBank.length; i++) {
        imagesBank[i].loadPixels();
    }

    for (let i = 0; i < 12; i++) {
        let img = int(random(imagesBank.length))
        imagesLive[i] = imagesBank[img];
    }

    currentTime = millis();

    for (let i = 0; i < 6; i++) {
        prevTime[i] = currentTime;
        changeOn[i] = false;
        timers[i] = 200 + i * 100
    }

}


function draw() {
    let size = canvas.width / 4.25;
    let margem = (canvas.width / 4 - canvas.width / 4.25)
    background(0, 0);
    currentTime = millis();

    // to clean background
    rectMode(CORNER);
    fill(color('#FFFEF7'), 255);
    noStroke();
    rect(0, canvas.height / 2.5 - (size + margem), canvas.width, canvas.height / 2.5 + (size + margem));

    for (let i = 0; i < imagesLive.length; i++) {
        if (i < 4)
            image(imagesLive[i], size * i + margem * i, canvas.height / 2.5 - (size + margem), size, size);

        if (i >= 4 && i < 8)
            image(imagesLive[i], size * (i - 4) + margem * (i - 4), canvas.height / 2.5, size, size);

        if (i >= 8)
            image(imagesLive[i], size * (i - 8) + margem * (i - 8), canvas.height / 2.5 + (size + margem), size, size);
    }

    for (let i = 0; i < 6; i++) {
        if (i < 3)
            changeImg(timers[i], i);
        else
        changeImg(timers[i], i-3);
    }

}

function windowResized() {

    // mudar canvas conforme win size
    if (windowWidth < 768)
        resizeCanvas(windowWidth / 1.5, windowHeight - 40); // actualiza o tamanho da janela caso se diminua ou aumente
    else if (windowWidth < 992)
        resizeCanvas(windowWidth / 2, windowHeight - 40);
    else if (windowWidth < 1200)
        resizeCanvas(windowWidth / 2.5, windowHeight - 40);
    else
        resizeCanvas(windowWidth / 3, windowHeight - 40);


    canvas.position(windowWidth / 2 - canvas.width / 2, 40);


}

function canvasCreation() {
    // mudar canvas conforme win size
    if (windowWidth < 768)
        canvas = createCanvas(windowWidth / 1.5, windowHeight - 40); // actualiza o tamanho da janela caso se diminua ou aumente
    else if (windowWidth < 992)
        canvas = createCanvas(windowWidth / 2, windowHeight - 40);
    else if (windowWidth < 1200)
        canvas = createCanvas(windowWidth / 2.5, windowHeight - 40);
    else
        canvas = createCanvas(windowWidth / 3, windowHeight - 40);


    canvas.position(windowWidth / 2 - canvas.width / 2, 40);

}

function changeImg(timer, funcNum) {
    if (currentTime - prevTime[funcNum] > timer) {

        let randomNoise = int(random(noise.length))
        randomLive[funcNum] = int(random(imagesLive.length / 3)) + 3 * funcNum


        imagesLive[randomLive[funcNum]] = noise[randomNoise];
        prevTime[funcNum] = currentTime;

        noiseTime[funcNum] = random(1.65, 3)
        changeOn[funcNum] = true
    }

    if (changeOn[funcNum]) {
        if (currentTime - prevTime[funcNum] > timer / noiseTime[funcNum]) {
            console.log('comeback img');
            let randomBank = int(random(imagesBank.length))
            imagesLive[randomLive[funcNum]] = imagesBank[randomBank];

            prevTime[funcNum] = currentTime;
            timers[funcNum] = 200 + int(random(0, 200))
            changeOn[funcNum] = false
        }
    }
}