
function general(){
    let adat = document.getElementById('addBox').value;
    if (adat=="") {
        alert("A mezőt ki kell tölteni,nem lehet üres");
        return;
    } else {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        let label = document.createElement("label");
        var text = document.createTextNode(adat);
        label.appendChild(text);
        let close = document.createElement("button");
        var x = document.createTextNode("x");
        

        close.appendChild(x);
        input.addEventListener("click", finished);
        close.addEventListener("click", del);

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(close);

        document.getElementById('lista').appendChild(li);
    

    }
}
function finished(a) {
    let sor = a.target.parentNode;
    let szoveg = sor.getElementsByTagName("label")[0];
    szoveg.classList.toggle("checked");
}
function del(b) {
    b.target.parentNode.remove();
}

function init() {
    document.getElementById('addGomb').addEventListener("click", general)
}
document.addEventListener("DOMContentLoaded",init);