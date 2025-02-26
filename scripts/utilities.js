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