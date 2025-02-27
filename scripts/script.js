document.getElementById("addMoney").addEventListener("click" , function(event){
    event.preventDefault()
    const selectedValue = document.getElementById("selectData").value;
    const accNo = convertValueById("accAddMoney");
    const addAmount = convertValueById("addAmount");
    const pin = convertValueById("addMoneyPin");
    const mainBlnc = parseFloat(document.getElementById("mainBlnc").innerText);
    
    if (accNo === 1864259966) {
        if (pin === 1234) {
            const updateBlnc = mainBlnc+addAmount;
            document.getElementById("mainBlnc").innerText = updateBlnc;
            const container = document.getElementById("allTrans");
            const div = document.createElement('div');
            div.innerHTML = `
                <h1 class="text-lg font-semibold">$ ${addAmount} Credit to Your Account no:${accNo} from ${selectedValue}</h1>
                <p>Drawable Balance $${updateBlnc}</p> <hr>`;
            container.appendChild(div);
            
            redirectToTrans()
            
        } else {
            document.getElementById("addMoneyPin").classList.add('outline-2', 'outline-red-500','text-red-500');
        alert('Wrong Pin Number')
        }
    } else{
        document.getElementById("accAddMoney").classList.add('outline-2', 'outline-red-500','text-red-500');
        alert('Wrong Account Number')
    }
})

document.getElementById("cashOut").addEventListener("click" , function(event){
    event.preventDefault()
    const accNo = convertValueById("cashOutAcc");
    const cashOut = convertValueById("cashOutAmnt");
    const outPin = convertValueById("cashOutPin");
    const mainBlnc = parseFloat(document.getElementById("mainBlnc").innerText);
    
    if (accNo === 1864259966) {
        if (outPin === 1234) {
            const updateBlnc = mainBlnc-cashOut;
            document.getElementById("mainBlnc").innerText = updateBlnc;
            const container = document.getElementById("allTrans");
            const div = document.createElement('div');
            div.innerHTML = `
                <h1 class="text-lg font-semibold">$ ${cashOut} Debit to Your Account no:${accNo} </h1>
                <p>Drawable Balance $${updateBlnc}</p> <hr>`;
            container.appendChild(div);
        
            redirectToTrans()
            
        } else {
            document.getElementById("addMoneyPin").classList.add('outline-2', 'outline-red-500','text-red-500');
        alert('Wrong Pin Number')
        }
    } else{
        document.getElementById("accAddMoney").classList.add('outline-2', 'outline-red-500','text-red-500');
        alert('Wrong Account Number')
    }
})
        