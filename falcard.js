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

var da=document.getElementById("dob");

//var dept=document.getElementById("dept");
var year=document.getElementById("year")
//var phto=document.getElementById("photo")

name.innerHTML=""+iname;
regno.innerHTML="LIET NO &nbsp :"+inreg;
dept.innerHTML= "D O B &nbsp &nbsp &nbsp:"+indept;
year.innerHTML="Batch &nbsp &nbsp &nbsp :"+inyear
da.innerHTML="QUL &nbsp &nbsp &nbsp:"+indate;

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


 


const download = document.getElementById("down");
download.addEventListener("click", function(){
const dbody=document.getElementsByClassName("cardview")
  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(dbody.msToBlob(), inreg.png);
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = dbody.toDataURL;
    a.download = inreg.png;
    a.click();
    document.body.removeChild(a);
  }
});