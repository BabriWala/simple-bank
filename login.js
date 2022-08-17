

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email === 'hanzalafarhann@gmail.com' & password === '123@gmail.com'){
        console.log("Ok");
        console.log("Gmail")
    }else{
        alert("Please Provide Valid Email and Password");
    }
})
// document.getElementById('submitBtn').addEventListener('click', ()=>{console.log("Ok")})