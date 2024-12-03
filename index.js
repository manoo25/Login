var userName=document.getElementById('Name');
var userEmail=document.getElementById('Email');
var userNameLogin=document.getElementById('userNameLogin');
var userPassword=document.getElementById('Password');
var PasswordLogin=document.getElementById('PasswordLogin');
const Success=document.getElementById('Success');
const warning=document.getElementById('warning');
const WarningLogin=document.getElementById('WarningLogin');
const inCorrect=document.getElementById('inCorrect');
const welcome=document.getElementById('welcome');
var usersArr=[];
usersArr=JSON.parse (localStorage.getItem("usersArr"));

// console.log(usersArr.getItem='ahmed')


function Register(){
    var userObj={
        Name:userName.value,
        Email:userEmail.value,
        password:userPassword.value
    }
    usersArr.push(userObj);
    localStorage.setItem("usersArr",JSON.stringify(usersArr ))
  
    if(userName.value!=''&&userPassword.value!=''&&userEmail.value!=''){
         warning.classList.replace('d-block','d-none')
       Success.classList.replace('d-none','d-block')
       
    }

    else{ 
        Success.classList.replace('d-block','d-none')
        warning.classList.replace('d-none','d-block')
       
    }
  clear();

}
var Un2;
function login(){
   
    const isValidUser = usersArr.some(
        user => user.Name === userNameLogin.value && user.password === PasswordLogin.value
    );
    if(isValidUser){
        uN=userNameLogin.value;
        Un2=uN;
        localStorage.setItem("Un2",JSON.stringify(Un2 ))
            inCorrect.classList.replace('d-block','d-none') ; 
            window.open("success.html",'_blank');
          
          
    }
    else if(userNameLogin.value==''||PasswordLogin.value==''){
        inCorrect.classList.replace('d-block','d-none')
        WarningLogin.classList.replace('d-none','d-block')
    }
    else{
        WarningLogin.classList.replace('d-block','d-none')
        inCorrect.classList.replace('d-none','d-block')
     
    }

}
Un2=JSON.parse (localStorage.getItem("Un2"));
welcome.innerHTML='Welcome '+Un2;


function clear(){
    userName.value="";
    userEmail.value="";
    userPassword.value="";
}





