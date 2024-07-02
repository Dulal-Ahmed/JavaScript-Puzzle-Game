dragImageId = null;
dragimageClass = null;
 let second = 100;
let secondCount = document.getElementById('showTime');
setIimeId=null;
let dragAllow = false;

function imageDragStart(catchEvent){
    dragImageId = catchEvent.target.id;
    dragimageClass = document.getElementById(dragImageId).className;
}

function whenimageOver(catchEvent){
    catchEvent.preventDefault();
}
function winner(){
    clearTimeout(setIimeId);
    dragAllow = false;
    secondCount.innerText = " ";
   let rslt = document.getElementById('showResult');
   rslt.textContent = `Congratulations!!! You solve the puzzle within  ${second} Seconds And Remain ${100 - second} Seconds `; 
}
function imageDrop(catchEvent){
    let targetImageId = catchEvent.target.id;
   let targetImageClass = document.getElementById(targetImageId).className;

    let dragImgId  = document.getElementById(dragImageId);
    let trgtImgid = document.getElementById(targetImageId);

    let dragImageStore = dragImgId.src;
    let storeDragImageClass = dragimageClass;
    if(dragAllow){
    dragImgId.src = trgtImgid.src;

    trgtImgid.src = dragImageStore;

    dragImgId.className = targetImageClass;
    trgtImgid.className = storeDragImageClass;

    if( 
        document.getElementById('image1').className == "image1"
    &&  document.getElementById('image2').className == "image2"
    &&  document.getElementById('image3').className == "image3"
    &&  document.getElementById('image4').className == "image4"
    &&  document.getElementById('image5').className == "image5"
    &&  document.getElementById('image6').className == "image6"
    &&  document.getElementById('image7').className == "image7"
    &&  document.getElementById('image8').className == "image8"
    &&  document.getElementById('image9').className == "image9"
    ){
         winner(); 
    }

    }
}
 function timeUpdate(){
  
   if(second >=0){
    secondCount.innerText = second; 
    second--;
     setIimeId =  setTimeout(timeUpdate, 1000);}else{
        clearTimeout(setIimeId);
        dragAllow = false;
        secondCount.innerText = " ";
        let rslt = document.getElementById('showResult');
        rslt.textContent = `Time Up!!! You can't solve the puzzle within 100 Seconds And Remain 0 Seconds `;
     }
    
 }

 function startGame(){
    dragAllow = true;
    if(!setIimeId){
    timeUpdate();}
 }
