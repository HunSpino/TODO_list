
function general(){
    let adat = document.getElementById('addBox').value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";


}
function init() {
    document.getElementById('addGomb').addEventListener("click", general)
}
document.addEventListener("DOMContentLoaded",init);