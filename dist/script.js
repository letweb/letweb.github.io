var orgIm = null, grayIm = null, redIm = null, greenIm = null, blueIm = null, filIm=null;
var colorFlag = 0;
var filename = null;
function clearCanvas(){
  var canvas1 = document.getElementById('canvas1');
  var ctx1 = canvas1.getContext("2d");
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);
}

function displayIm(im){
  var canvas = document.getElementById('canvas1');
  var ctx1 = canvas1.getContext("2d");
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);
  im.drawTo(canvas);
}

function checkIm(filIm){
    if((filIm==null)||(!filIm.complete()))
      alert("Image is Not Available!");
}

function uploadIm(){
  var canvas = document.getElementById('canvas1');
  filename = document.getElementById('imfile');
  grayIm = new SimpleImage(filename);
  orgIm = new SimpleImage(filename);
  redIm = new SimpleImage(filename);
  greenIm = new SimpleImage(filename);
  blueIm = new SimpleImage(filename);
  orgIm.drawTo(canvas);
}

function displayOrigin(){
  var canvas = document.getElementById('canvas1');
  var ctx1 = canvas1.getContext("2d");
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);
  orgIm.drawTo(canvas);
}

function grayFilter(){
  filIm = grayIm;
  var averPix = 0;
  for (var pixel of filIm.values()){
    averPix = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(averPix);
    pixel.setGreen(averPix);
    pixel.setBlue(averPix);
  }
  displayIm(filIm);
}

function redFilter(){
  colorFlag = 0;
  filIm = redIm;
  for (var pixel of filIm.values()){
    pixel.setRed(255);
  }
  displayIm(filIm);
}

function greenFilter(){
  colorFlag = 1;
  filIm = greenIm;
  for (var pixel of filIm.values()){
    pixel.setGreen(255);
  }
  displayIm(filIm);
}

function blueFilter(){
  colorFlag = 2;
  filIm = blueIm;
  for (var pixel of filIm.values()){
    pixel.setBlue(255);
  }
  displayIm(filIm);
}

function adjustRed(){
  var slider = document.getElementById('redSlider');
  
  if (colorFlag==0)
     filIm = redIm;
  else if(colorFlag==1)
     filIm = greenIm;
  else
     filIm = blueIm;
  
  var level = slider.value;
  
  for (var pixel of filIm.values()){
    if (colorFlag==0)
      pixel.setRed(level);
    else if(colorFlag==1)
      pixel.setGreen(level);
    else
      pixel.setBlue(level);
  }
  
  displayIm(filIm);
}

function doDownload(){
  var canvas = document.getElementById('canvas1');
  var link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL()
  link.click();
  link.delete;
}

function duplicateImage()
{
  var outIm = new SimpleImage(filename);
  return outIm;
}