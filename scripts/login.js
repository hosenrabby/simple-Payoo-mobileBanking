
document.getElementById("login-btn").addEventListener("click",function (event) {
    event.preventDefault();
    const accountNumber = convertValueById("logAcNumb")
    const pinNumber = convertValueById("accPin")
    
    // console.log(accountNumber)
    if (accountNumber === 1864259966) {
        if (pinNumber === 1234) {
            window.location.href = "main.html";
        } else {
            document.getElementById("accPin").classList.add('outline-2', 'outline-red-500','text-red-500');
        alert('Wrong Pin Number')
        }
    } else{
        document.getElementById("logAcNumb").classList.add('outline-2', 'outline-red-500','text-red-500');
        alert('Wrong Account Number')
    }
})