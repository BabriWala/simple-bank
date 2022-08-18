const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', ()=>{
    const depositAmount = document.getElementById('depositAmount');
    // console.log(depoistAmount);
    // console.log(typeof depoistAmount);
    const depositNumber = parseFloat(depositAmount.value);
    if(isNaN(depositNumber)){
        alert('Please Provide Digit Only')
    }else if(depositNumber === 0){
        alert("Please Provide Greater Than Zero Digit")
    }else{
        const depositBalance = document.getElementById('depositBalance');
        // console.log(depositBalance);
        const depositBalanceNumber = parseFloat(depositBalance.innerText);
        // console.log(depositBalanceNumber);
        depositBalance.innerText =  depositNumber;
        
        const mainBalance = document.getElementById('mainBalance');
        const mainBalanceNumber = parseFloat(mainBalance.innerText);
    
        mainBalance.innerText = mainBalanceNumber + parseFloat(depositBalance.innerText);

        depositAmount.value = "";
    }
})


const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', ()=>{
    const withdrawAmount = document.getElementById('withdrawAmount');
    // console.log(depoistAmount);
    // console.log(typeof depoistAmount);
    const withdrawNumber = parseFloat(withdrawAmount.value);
    if(isNaN(withdrawNumber)){
        alert('Please Provide Digit Only')
    }else if(withdrawNumber === 0){
        alert("Please Provide Greater Than Zero Digit")
    }else{
        const withdrawBalance = document.getElementById('withdrawBalance');
        // console.log(withdrawBalance);
        const withdrawBalanceNumber = parseFloat(withdrawBalance.innerText);
        // console.log(withdrawBalanceNumber);
        withdrawBalance.innerText =  withdrawNumber;
        
        const mainBalance = document.getElementById('mainBalance');
        const mainBalanceNumber = parseFloat(mainBalance.innerText);
    
        mainBalance.innerText = mainBalanceNumber - parseFloat(withdrawBalance.innerText);

        withdrawAmount.value = "";
    }
})