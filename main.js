
function general(){
    let adat = document.getElementById('addBox').value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    var text = document.createTextNode(adat);
    let close = document.createElement("button");
    var x = document.createTextNode("x");
    close.className = "delete";

    close.appendChild(x);

    li.appendChild(input);
    li.appendChild(text);
    li.appendChild(close);

    document.getElementById('lista').appendChild(li);
    


}
function init() {
    document.getElementById('addGomb').addEventListener("click", general)
}
document.addEventListener("DOMContentLoaded",init);