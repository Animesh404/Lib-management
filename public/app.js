const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validateform(){  
  console.log("hi");
var name=document.querySelector('#name1').value;  
var password=document.querySelector('#password1').value;
console.log(password)  ;
let pattern = /[1][b][i]([1][9]|[2][0-3])[a-z]{2}[0-9]{3}/i;
let result = name.match(pattern);
console.log(result);
// let op=result[0];
if (result==null){  
  alert("Invalid username please enter USN");  
  return false;  
}
if(password.length<8){  
  alert("Password must be at least 8 characters long.");  
  return false;  
  }  
return true;
} 