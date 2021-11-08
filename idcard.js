console.log("hello")
//alert("Welcome")
function myfun(){
var iname=document.getElementById("inname").value;
var inreg=document.getElementById("inreg").value;
var indept=document.getElementById("indept").value;

var indate=document.getElementById("indate").value;
var inyear=document.getElementById("inyera").value;
var photo=document.getElementById("inphoto").value;


var phto=document.getElementById("photo")
var name=document.getElementById("name");
var  regno=document.getElementById("reg");
var dept=document.getElementById("dept");

var da=document.getElementById("date");

//var dept=document.getElementById("dept");
var year=document.getElementById("year")
//var phto=document.getElementById("photo")

name.innerHTML="Student Name:"+iname;
regno.innerHTML="Reg NO:"+inreg;
dept.innerHTML= "Branch:"+indept;
year.innerHTML="concat num"+inyear
da.innerHTML="Academic Year"+indate;

//createcanvas(800,600)
//loadimage(photo)
//var barcode=document.getElementById("barcode")



 //dept.innerHTML=indept;
//year.innerHTML=inyear
//phto.innerHTML=photo
}

function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
  }


 /* var download = document.getElementById("down");
  download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } 
  else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = svg.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});*/


const download = document.getElementById("down");
download.addEventListener("click", function(){
const dbody=document.getElementsByClassName("cardview")
  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(dbody.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = dbody.toDataURL;
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});