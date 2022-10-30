
let spinput = document.querySelector('#firstinput');
spinput.innerText = '';

let resultinput = document.querySelector('#result');
resultinput.innerText ='';

let userone = (e)=>{
   console.log(e);
   spinput.innerText  = spinput.innerText + '1'
   
}

let usertwo = (e)=>{
   console.log(e);
   spinput.innerText  = spinput.innerText + '2'

}

let userthree = (e)=>{
    console.log(e);
   spinput.innerText = spinput.innerText + '3'
}

let userfour = (e)=>{
   console.log(e);
  spinput.innerText  = spinput.innerText + '4'
}

let userfive = (e)=>{
   console.log(e);
  spinput.innerText  = spinput.innerText + '5'
}

let usersix = (e)=>{
   console.log(e);
  spinput.innerText  = spinput.innerText + '6'
}

let userseven = (e)=>{
   console.log(e);
   spinput.innerText  = spinput.innerText + '7'
}

let usereight = (e)=>{
   console.log(e);
   spinput.innerText  = spinput.innerText + '8'
}

let usernine = (e)=>{
   console.log(e);
   spinput.innerText = spinput.innerText + '9'
}



let operatorAdd = (e)=>{
   console.log(e);
   spinput.innerText  = spinput.innerText + '+';
}

let operatormin = (e)=>{
   console.log(e);
   spinput.innerText  = spinput.innerText + '-';
}
let operatormulti= (e)=>{
   console.log(e);
   spinput.innerText = spinput.innerText + '*';
}
let operatordivi=(e)=>{
 console.log(e);
 spinput.innerText = spinput.innerText + '/';
}
let  operatormod = (e)=>{
   console.log(e);
   spinput.innerText = spinput.innerText + '%';
}
 
let operatorequal =(e)=>{
   console.log(e);
 let ref = document.getElementById('firstinput').innerHTML;
  //console.log(ref);
  
  let data = ref.split('');
 // console.log(data)
 let a =[];
let b =[];
let c =[];
for(let i=0;i<data.length;i++)
 {
     if(data[i] == '+' || data[i] == '-' || data[i] == '*' || data[i] == '/'|| data[i]=='%' )
     {
         b.push(a.join(''));
         a=[];
         c.push(data[i]);
     }else if((data.length)-1 == i){
         a.push(data[i]);
    }
     else{
       a.push(data[i]); 
         }
 }
 let num1 = parseInt(b);
 let num2 = parseInt(a.join(''));
 
 if(c == '+'){
   let total = num1 + num2; 
   console.log(total);
   resultinput.value = total;
}else if(c == '-'){
   let total = num1 - num2; 
   console.log(total);
   resultinput.value = total;
}else if(c == '*'){
   let total = num1 * num2; 
   console.log(total);
   resultinput.value = total;
}else if(c == '/'){
  let total = num1 / num2; 
   console.log(total); 
   resultinput.value = total;
}
else{
   let total = num1 % num2; 
   console.log(total); 
   resultinput.value = total;
}
 
 
}

let operatorclear=(e)=>{
   console.log(e);
   spinput.innerText='';
   resultinput.value ='0';
}
