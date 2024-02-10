
    //     let language = "Javascript";
    //     let text = "";
    // for(let x of language){
    // text +=x+"<br>"
    // console.log(x)
    // }    
    // let g = "You are very smart";
    // for( i of g){
    // console.log(i,"|",g);
    // }
    // let heroes= [
    // ["Your","Spidermen","Gamar","",""]
    // ]
    // div me back me color
//     let btn=document.querySelector("button");
//  btn.addEventListener("click",function(){
//    let h3=document.querySelector("h3");
//    let randomcolor=getrandomcolor();
//     h3.innerText=randomcolor;
//  let div=document.querySelector("div");
//     div.style.backgroundColor=randomcolor;
//     console.log("color updated");
//  });
//  function getrandomcolor(){
//   let red=Math.floor(Math.random()*255);
//   let green=Math.floor(Math.random()*255);
//   let blue=Math.floor(Math.random()*255);
//   let orange=Math.floor(Math.random()*350)
//   let color=` rgb( ${red}, ${green}, ${blue},${orange}) `;  
//    return color;
//  };
//  let arr = [1,2,3,4,5,6,2,3];
//  let num = 4;
//  for(let i=0;i<arr.length;i++){
//   if(arr[i]==num){
//   arr.splice(i,i)
//   }
//   }
//  console.log(arr);

// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy > 0){
//   count++;
// copy = Math.floor(copy/10);
// }
// console.log(count);
// let number = 287152;
// let sum = 0;
// let copy = number;
// while(copy > 0){
//   digit=sum%10;
//   sum = digit/sum
  
// copy = Math.floor(copy/10);
// }
// console.log(sum);
// let a = [2,3,45,54,34,22,98];
// let b =3;
// while(a>0){
//   a.splice(2,4);
// }
// console.log(b/3)
let a = [23,2142,214,134,11,13,45,35,563];
let cut = 3;
for(let i=0;i<length;i++){
 if( a[i]==cut){
  a.splice(a,i);
 }

}
console.log(a);

let arr = [23,2142,214,134,11,13,45,35,563];
let largest = 0;
for(let i=0;i<=arr.length;i++){
 if(largest < arr[i]){
  largest = arr[i];
 }

}
console.log(arr);
let p = document.querySelector("#re");
p.addEventListener("mousedown",function fn(){
   p.style.backgroundColor="black";
   this.style.color="aqua";
   p.style.border="10px solid yellow";
   });
   console.log(p);
//    let pp = document.querySelector("#pp");
// pp.addEventListener("keypress",function(event){
//    console.log(event);
//       });
//       let form = document.querySelector("form");
//      form.addEventListener("submit",function(event){
//       event.preventDefault();
//       let user = document.querySelector("#user");
//       let pass = document.querySelector("#pass");
//       console.log(user.value);
//      });
//      let x = [22,35,52,2,4,4,44,55,6,11,34,55,77,99,7,77];
//      let y = 4;
//      for(let i=0;i<x.length;i++){
//       if(x[i]==y){
//        x.splice(x[i],4,11);
//      }
//    }
//      console.log(x);
   //   let zz=document.querySelector("div");
   //   let ul=document.querySelector("ul");
   //   let lis=document.querySelectorAll("li");
   //  div.addEventListener("click",
   //  function (){
   //    console.log("Clicked the div property");
   //  })
   //  ul.addEventListener("click",
   //  function (){
   //    console.log("Ul Clicked the div property");
   //  })
   //  for(li of lis){
   //    li.addEventListener("click",
   //    function (){
   //      console.log("Clicked the div property")
   //    });
   // }
   // let bt = document.querySelector("button",function(){
   // console.log("button was clicked");
   // })
//    let btn = document.querySelector("button");
//    let ul = document.querySelector("ul");
//    let inp = document.querySelector("input");
// btn.addEventListener("click",function(){
//    console.log(inp.value);
//  let item = document.createElement("li");
//  item.innerText=inp.value;
//  ul.appendChild(item);
 
// })
    // doobarase practice kari thi Activity projects''''///
//     let btn=document.querySelector("button");
//  btn.addEventListener("click",function(){
//    let h3=document.querySelector("h3");
//    let randomcolor=getrandomcolor();
//     h3.innerText=randomcolor;
//  let div=document.querySelector("div");
//     div.style.backgroundColor=randomcolor;
//     console.log("color updated");
//  });
//  function getrandomcolor(){
//  let red = Math.floor(Math.random()*255);
//  let green = Math.floor(Math.random()*255);
//  let blue = Math.floor(Math.random()*255);
//  let color = `rgb({red},${green},)`
//  }
// SIMON GAME//
// let gameSeq =[];
// let userSeq = [];
// let h2 = document.querySelector("h2");
// let btns = ["red","q1","orng","blue"];
// let started = false;
// let level = 0;
// document.addEventListener("keypress",function(){
// if(started == false){
// started = true;
// levelUp();
// }
// });
// function btnFlash(btn){
// btn.classList.add("flash");
// setTimeout(function(){
// btn.classList.remove("flash");
// },250);
// }
// function userFlash(btn){
// btn.classList.add("userFlash");
// setTimeout(function(){
// btn.classList.remove("userFlas");
// },250);
// }
// function levelUp(){
// userSeq = [];
// level++;
// h2.innerText=`Level${level}`;
// let randldx=Math.floor(Math.random()*4);
// let randClr= btns[randldx];
// gameSeq.push(randClr);
// let randBtn = document.querySelector(`.${randClr}`);
// btnFlash(randBtn);
// }
// function checkAns(idx){
    
//     if(userSeq[idx] === gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelUp, 750);
//         }
//     }
//     else{
//         h2.innerHTML =` Game Over! Your Score was <b>${level}</b>. <br> Press Any Key to Start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function (){
//             document.querySelector("body").style.backgroundColor = "cyan";
//         },250)
//         reset();
//     }
// }

// function btnPress(){
//     let btn = this;
//     userFlash(btn);

//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length-1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click", btnPress);
// }

// function reset(){
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }
function hello(){
    console.log("Calling the hello fnx");
    }
    hello();
    function demo(){
    console.log("Calling the outside fnx");
    hello();
    }
    console.log("callinf demo fnx");
    demo();
    function hello(){
    console.log("caling by!")
    }
    demo();
    function one(){
    return 1;
    }
    function two(){
    return one()+one()
    }
    function three(){
    let ans=one()+two();
    console.log(ans);
    }
    three();

    //ismme multiple time color chalta rahega //
     h1=document.querySelector("#in");
    function changeColor(color,delay){
       setInterval(() => {
        h1.style.color=color;
       },delay);
};
    
    // changeColor("red",1000);
    // changeColor("green",1500);
    // changeColor("Yellow",3700);
    // changeColor("brown",2650);
    // changeColor("purple",3800);
    // changeColor("aqua",4930);
    // SETTING FOR PROMISES//
    function savetoDb(data){
    let internetSpeed=Math.floor(Math.random()*10+6);
    if(internetSpeed>=40){
    console.log("Success was the save data");
}else{
    console.log("failure data not saved."); 
    }}
//     //PRACTICED SET//
function savetoDb(){
 return new Promise((resolve, reject) => {
 let internetSpeed=Math.floor(Math.random)()*10+1;
 if(internetSpeed>4){
 success("success:data was saved")
 }else{
failure:("weak connection");
 }
 });
 }



    
    

   
        






   

