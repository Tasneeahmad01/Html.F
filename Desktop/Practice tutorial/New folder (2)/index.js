h1=document.querySelector("h1");
setInterval(()=>{
h1.style.color="red";
},1000);
setInterval(()=>{
    h1.style.color="green";
    },2000);
    setInterval(()=>{
        h1.style.color="brown";
       },3000);
        setInterval(()=>{
            h1.style.color="purple";
       },4000);
            setInterval(()=>{
                h1.style.color="aqua";
},5000);
function hello(){
 console.log("prees the hello function");
}
demo();
function hello(){
console.log("Calling fnx with demo");
}
demo();
function demo(){
console.log("Demo");
}
hello();
// VISUALIZING CALL STACK//
function one(){
return 1;
}
function two(){
return one() + one();
}
function three(){
 return one() + two();
}
h2=document.querySelector("h2")
setTimeout(function(){
console.log("apna college");
},2000);
console.log("hello");
setTimeout(function(){
    console.log("apna college");
    },2000);
    console.log("hello");
    setTimeout(function(){
        console.log("apna college");
        },2000);
    let a = 10;
    console.log(a);
    let b = 15;
    console.log(b);
    console.log(a+b*a/b);
  h2 = document.querySelector("h2");
 function updateColor(color, delay){
setInterval(()=>{
h2.style.color=color;
},delay);
 }
 updateColor("green",1000,);
 updateColor("yellow",2000,);
 updateColor("orange",3000,);
 function changeColor(color, delay,nextColorChange){
setInterval(()=>{
    p = document.querySelector(".pas");
 p.style.color=color;
if(nextColorChange) nextColorChange();
},delay);
};
changeColor("purple",2000,()=>{
    changeColor("grey",3000,()=>{
        changeColor("black",4000,()=>{
        });
    });
});
//SETTTING FOR PROMISSES//
function savetoDb(data){
let internetSpeed = Math.floor(Math.random()*10)+1;
if(internetSpeed > 4){
console.log("Your data was save:Saved");
}else{
console.log("Weak connection:data not saved");
}
}
function savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
     success();
    }else{
        failure();
    }
}
savetoDb(
"apna college",
() => {
console.log("Your data saved:Data");
},
()=> {
console.log("Your data not saved:weak connection");
});
async function greet(){
    throw f ();
 return "Hello world";
}
greet().then(()=>{
console.log("Greet sa deer.")
})
.catch(()=>{
console.log("Blk connection house")
});
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

   let json='{"name":"assad rajpuriya hgfdfgh ","length":456,"lname":null}';
   console.log(json);
  let ss=JSON.parse(json);
  console.log(ss);

 let sd=JSON.stringify(ss);
 console.log(sd);
let url=("https // images.unsplash.com");
h4=document.querySelector("h4");
    function updtColor(color, delay){
        setInterval(()=>{
            h4.style.color=color;
        },delay);
         }
 updtColor("red",1000);
 updtColor("#cc0033",2000);
 updtColor("green",3000);
  async function greet(){
return "Helloo world";
  }
 async function getFacts(){
try{
 let res1 = await fetch(url);
 let data1 = await res1.json();
 console.log("data1-",data1);

 let res2 = await fetch(url);
 let dat2 = await res2.json();
 console.log("data2 -",data2);
 }catch(e){
console.log("error:",e);
 }
 };
 async function urr(){
    return "tree is very big option in oxygen!";
 }
 urr()
 .then(()=>{
console.log("save data to the fnx");
 })
 .catch(()=>{
 console.log("ERROR",data);
 })
 async function show(){
 await Colorchange("red",1000);
 await Colorchange("green",2000);
 await Colorchange("pink",3000);
 await Colorchange("violet",4000);
 await Colorchange("blue",5000);
return "done";
 }
 async function getnum(){
 return new Promise((resolve, reject) => {
    setTimeout(()=>{
    let num= Math.floor(Math.random()*10)+3/5;
    console.log(num);
     resolve()
    },1000);
 });
 }
 async function demo(){
getnum();
 }
//  let jsonRes={
//     // iska url aayega //
//  }
//  let validRes = JSON.parse(jsonRes);
 let student = {
    name:"Tasneem ahmed",
    class :"B.tech",
    live :"Ratupura",
    marks:87,
 }
 let dice= Math.floor(Math.random(2)*6)+1;
 console.log(dice);
 let arr= [2,3,4,5,6,4,6,9,7,9,8];
 let num = 5;
 function getElements(arr,num){
 for (let i=0;i<arr.length;i++){
 if(arr[i]>num){
console.log(arr[i]);
 }
 }
 }
 getElements(arr,num);
 let ar = [1,2,3,4,5,6,2,3];
 let nm = 2;
 for (let i=0;i<ar.length;i++){
    if(ar[i]>nm){
    }
}
console.log(ar);
let rra = [1,2,3,4,5,6,2,3];
 let mun = 2;
 console.log(rra)
 for (let i=0;i<rra.length;i++){
    if(rra[i]==mun){
    rra.splice([i],1);
    };
};
console.log(rra);
const car ={
name:"Audi",
model:"E211",
 oil:"Collent",
 
}
console.log(car);
let dic = Math.floor(Math.random()*6)+1;
console.log(dic);
let number = 251235;
let sum = 0;
let copy=number;
while(copy>0){
 digit=copy%10;
 sum+=digit;
 copy=Math.floor(copy/10);
}
console.log(sum);
console.log(13%4);
const ages = [32,33,16,40];
function der(age){
 return age>=18;
}
const err=[1,2,3,4,5,6,2,3];
const Num = 2;
const result = err.filter((el)=>
 el!==Num);
 console.log(result);
 const Mun=123456;
 const hgf = Mun.toString();
 console.log(hgf.length);
 const ppp = 2871454352;
 const eee= Array.from(String(ppp),Number );
 const results = eee.reduce((acc,el)=> acc+el,0);
 console.log(results);
 // DOG IMAGE AHANGE //
 let btn = document.querySelector("#dee");
 let url2="https://dog.ceo/api/breeds/image/random";
 btn.addEventListener("click",async()=>{
 let link = await getImage();
 let img = document.querySelector("#result");
 img.setAttribute("src",link);
 });
 async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch (e){
   console.log("error -",e);
   return"/";
    }
 }
 // AXIOS Function Method//
   let ur = "https://catfact.ninja/fact";
   async function getFacts(){
    try{
        let res = await axios.get(ur);
        console.log(res.data);
    }catch (e){
    console.log("error -",e);
    }
   }      
   const oil=88675788;
   const iti= Array.from(String(num),Number);
   console.log("I am very younger");
   let Url = "https://icanhazdadjoke.com/";
   async function getjokes(){
   try{
    const config = {headers:{Accept:"application/json"}};
   let res = await axios.get(Url,config);
   console.log(res.data);
   }catch(err){
    console.log(err);
   }
}
let Urll = "https://icanhazdadjoke.com/";
async function getJokes(){
    try{
        let res =await axios.get(Urll);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
let urll= "http://unoversities.hipolabs.com/search?name=";
    let country = "nepal";
let btnn = document.querySelector("#qas");
btn.addEventListener("click", async()=>{
getColleges();
});
let Country = "nepal"
    async function getColleges(){
        try{
            let res = await axios.get (urll+Country);
            console.log(res);
        }catch(err){
        console.log("error :",err);
        return [];
        }
    }
    let msg = "       Hello yahoo baba.        ";
    let newmsg = msg.trim();
    console.log(msg);
    let str = "Mango";
    str.replace(3);
    console.log();
//   //let as= prompt("value")
//     function ave(a,as){ 
//       let add =(  (a+as)/5);
//       console.log(add);
//     };
    // console.log(add);
   //let ava= ave(1,as);
 let url4="http://universities.hipolabs.com/search?name=";
  let blu=document.querySelector("#click" );
 async function getcountry(input){
  try {
  let choose=await axios.get(url4+input);
     console.log(choose.data);
  } catch (error) {
     console.log("error",error);
     return [];
  }
 }
 blu.addEventListener("click",async()=>{
    console.log("button was click");  
    let input=document.querySelector("#input").value;
    let link= await getcountry(input);
  show(link);
});


  function final(link){
   let list=document.querySelector("#list").value;
   list="";
  for (lin of link) {
      console.log(lin.name);
      let li=document.createElement("li");
      li.innerText=lin.name;
      list.apendChild(li);
  } 
  }
  // CALL STACK FUNCTION///  
  function hello(){
  console.log("hello world");
  }
  demo();
  function demo(){
    console.log("YOu are very faatser");
  }
  hello();
  function hello(){
 console.log("Deer as these function create.");
  }
  demo();
function one(){
return 1;
}
function two(){
return 2;
}
function three(){
return 3;
}
let ans = three()+two();
console.log(ans);
three();
setTimeout(()=>{
 console.log("Hear was sound listing.");
},3000);
console.log("listing sound was heare.");
let urls="https://www.google.com/search?q=";
  let ww="india";
async function picture(){
    try{
    let images= await axios.get(urls+ww);
    console.log(images);
  }catch (err){
 console.log("Error -",err);
}
}
const post = {
 Name:"Tasneem ahmed",
 content:"This is my channel in social media ",
 likes:150,
 dislikes:10,
 Report:2
}
const URL = "https://www.icon.com/search?q=icons";
    async function Getjokes(){
        try{
        // const config =(e);
        let res = await axios.Get(URL);
        console.log(res.data);
    }catch (err){
    console.log(err);
    }
}
const obj2={
    name:"kumari",
    class:"B.tech",
};
var numm = -23.43; 
var resultt = Math.abs(numm);
// let f=4;
console.log(Math.sqrt(2))
var Numm = -22.32;
var rresult = Math.abs(sum);
console.log(rresult);
function calcAvg (a,b,c){
let avg = (a+b+c)/3;
console.log(avg);
}
// function findMaxValue(arr) {
//     return Math.max(...arr);
//   }
//   const numbers = [5, 2, 9, 1, 7];
//   const maxNumber = findMaxValue(numbers);
  
//   console.log("The maximum value is:", maxNumber);
 let Arr = [8,9,10,1,2,3,4,5,6,7];
 let nu= 5;
 function getElements(Arr,nu){
 for(let i=0;i<arr.length;i++){
  if(Arr[i]>nu){
console.log(Arr[i]);
  }
 }
 }
getElements(Arr,nu);
let strr = "abcdabcdefgggh";
function getUnique(strr){
let ans = "";
for(let i=0;i<strr.length;i++){
let currChar = strr[i];
if(ans.indexOf(currChar) ==-1){
ans += currChar;
}
}
return ans;
}
getUnique(strr);
let Start= 100;
let end = 200;
function generateRandom(Start,end){
    let diff = end - Start;
    return Math.floor(Math.random() * diff)+Start;
}
function isAdult(){
 let age = 21;
 if(age>=11){
console.log("Adult");
 }else{
console.log("Not Adult");
 }
}
function findMaxValue(arr){
 return Math.max(...arr);
}
const numbers=[24,244,235,7895,2345];
const maxNumber =findMaxValue(numbers);
console.log("The maximum value is :",maxNumber);
function findMinValue(arr){
 return Math.min(...arr);
}
const nnumbers=[23,44,10,9,84,4,1,2,0,5];
const minNumber =findMinValue(nnumbers);
console.log("This minimu value is :",minNumber);
var m = [1,2,3];
m.push(3);
console.log(m);
var m = [1,2,3];
m.pop(3);
console.log(m);

const im salary= 450000;
salary = 500000;
print("Yhe value of salary is :%d",salary);
return 0;


