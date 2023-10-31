const head=document.querySelector('.head');
const subBlock=document.querySelectorAll('.box');
/////////////////////For Create 30 Divs//////////////////
for( i=0; i<30;i++){
    const subBlockEl=document.createElement("div");
    subBlockEl.classList.add('box');
    head.appendChild(subBlockEl);

}
///////////////////// insert Background Color or Number in 30 dives//////////////////
const boxel=document.querySelectorAll('.box');

function genrateColor(){
    boxel.forEach((element )=> {
        const newColorCode =rendomcolor();
        console.log(newColorCode);
        element.style.backgroundColor = "#"+ newColorCode;
        element.innerText= "#" +newColorCode;
        
    });

}
/////////////////////For Rendom Color Genrate//////////////////

genrateColor()
function rendomcolor(){
    const chers='123456789abcdef';
    const colorcodeLength=6
    colorcode="";
    for(index=0;index<colorcodeLength;index++){
        const rendomNum= Math.floor( Math.random()*chers.length);
        colorcode+=chers.substring(rendomNum,rendomNum+1);

    }
    return colorcode;
}