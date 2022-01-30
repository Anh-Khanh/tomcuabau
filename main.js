const app = {
  sum: 5000,
  baucua: [
    {
      name: "Nai",
      index: 0,
      image: "./img/nai.jpg",
    },
    {
      name: "Bầu",
      index: 1,
      image: "./img/bau.jpg",
    },
    {
      name: "Gà",
      index: 2,
      image: "./img/ga.jpg",
    },
    {
      name: "Cá",
      index: 3,
      image: "./img/ca.jpg",
    },
    {
      name: "Cua",
      index: 4,
      image: "./img/cua.jpg",
    },
    {
      name: "Tôm",
      index: 5,
      image: "./img/tom.jpg",
    },
  ],
};
const img = document.querySelectorAll(".kqimg");
const imgkq = document.querySelectorAll(".img");
const xuc = document.querySelector(".xuc");
const tiens = document.querySelector(".money");
const the = document.querySelector(".ul");
const tiencuoc = document.querySelector(".tiencuoc");
const close = document.querySelector(".close");
function ketqua(){
  the.innerHTML = "<li></li>";
  const kq = document.querySelector(".ul li");
  for (let i = 0; i < 3; i++) {
    var j = Math.floor(Math.random() * 6);
    img[i].src = app.baucua[j].image;
    var s = app.baucua[j].image;
    for (var m = 0; m < app.baucua.length; m++) {
      if (s === app.baucua[m].image) {
        kq.innerHTML += app.baucua[m].name + " ";
        imgkq[j].style.border = "dashed 4px yellow";
      }
    }
  } 
}
 var array = [];
var arr = [];
var vitri = [];
var tien = 0;
function reset (){
  arr = [];
  array = [];
  vitri = [];
    for (var m = 0; m < app.baucua.length; m++) {
        imgkq[m].style.border="";
      }
      
}

tiens.innerHTML = app.sum;
let tongtien = app.sum;

function choi(tien) {
  if(tien>tongtien){
    alert("Tiền không đủ!!!")
    return tongtien;
  }
  tongtien -= tien;
  tiens.innerHTML = tongtien;
  return tongtien;
}

 function tinhtien() {
   let d = 0;
   let n=0;
   for (var m = 0; m < imgkq.length; m++) {
     let index = 0;
     if(vitri[n]==m){    
        for(let i=0; i < img.length;i++){
           if (img[i].getAttribute("src") === imgkq[m].getAttribute("src")){
             index++;
            }
        }
        if(index !== 0){
              tongtien = Number(tongtien) + Number(array[d])*Number((index+1));
        }
          n++;
          d++;
     }
     
    }   
    tiens.innerHTML = tongtien;
   return tongtien;
}

for (let i = 0; i < imgkq.length; i++) {
  imgkq[i].onclick = function () {
    vitri.push(i);
    tien = prompt();
    arr[i]= tien;
    choi(tien);
    return;
  };
}


function arrs(){
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) array.push(Number(arr[index]));
  }
  return array;
}
function vitris() {
  vitri.sort(function(a,b){
    return a-b;
  });
  return vitri;
}


ketqua();
xuc.onclick = function () {
  ketqua(); 
  arrs();
  vitris()
  tinhtien(); 
  reset();
}
