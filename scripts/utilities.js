//convart value
function convertValueById (id) {
    const value = document.getElementById(id).value;
    const convertValue = parseInt(value);
    return convertValue;
}
// toggle content
function toggleContentById(id,disValue) {
    document.getElementById(id).style.display = disValue;
}
function redirectToTrans() {
        toggleContentById("addMoneys", "none");
        toggleContentById("withrawCash", "none");
        toggleContentById("moneyTrans", "none");
        toggleContentById("getBonus", "none");
        toggleContentById("payBill", "none");
        toggleContentById("transections", "block");
        return
}