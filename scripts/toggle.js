//difault display

toggleContentById("addMoneys", "none");
toggleContentById("withrawCash", "none");
toggleContentById("moneyTrans", "none");
toggleContentById("getBonus", "none");
toggleContentById("payBill", "none");

document.getElementById("actAddMoney").addEventListener("click",function (event) {
    toggleContentById("addMoneys", "block");
    toggleContentById("transections", "none");
    toggleContentById("withrawCash", "none");
    toggleContentById("moneyTrans", "none");
    toggleContentById("getBonus", "none");
    toggleContentById("payBill", "none");
})
document.getElementById("actWithraw").addEventListener("click",function (event) {
    toggleContentById("addMoneys", "none");
    toggleContentById("withrawCash", "block");
    toggleContentById("moneyTrans", "none");
    toggleContentById("getBonus", "none");
    toggleContentById("payBill", "none");
    toggleContentById("transections", "none");
})
document.getElementById("actTransfer").addEventListener("click",function (event) {
    toggleContentById("addMoneys", "none");
    toggleContentById("withrawCash", "none");
    toggleContentById("moneyTrans", "block");
    toggleContentById("getBonus", "none");
    toggleContentById("payBill", "none");
    toggleContentById("transections", "none");
})
document.getElementById("actBonus").addEventListener("click",function (event) {
    toggleContentById("addMoneys", "none");
    toggleContentById("withrawCash", "none");
    toggleContentById("moneyTrans", "none");
    toggleContentById("getBonus", "block");
    toggleContentById("payBill", "none");
    toggleContentById("transections", "none");
})
document.getElementById("actBill").addEventListener("click",function (event) {
    toggleContentById("addMoneys", "none");
    toggleContentById("withrawCash", "none");
    toggleContentById("moneyTrans", "none");
    toggleContentById("getBonus", "none");
    toggleContentById("payBill", "block");
    toggleContentById("transections", "none");
})
document.getElementById("actTrans").addEventListener("click",function (event) {
    toggleContentById("addMoneys", "none");
    toggleContentById("withrawCash", "none");
    toggleContentById("moneyTrans", "none");
    toggleContentById("getBonus", "none");
    toggleContentById("payBill", "none");
    toggleContentById("transections", "block");
    return
})
    
