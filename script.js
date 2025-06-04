let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");


cvBtn.addEventListener("click",function(){
    alert("downloaded Succesfully");
})

submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value=="" && email.value ==""){
        alert("fill the details")
    }else{
        alert("Logged In");
    }
})
