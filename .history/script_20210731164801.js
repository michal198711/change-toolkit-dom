(function() {
let tooltip = 
function createTooltip(text){
    const div = document.createElement("div");

    div.textContent= text;
    div.ClassName="tooltip hidden";

    //document.querySelector("body").appendChild(div);
    document.body.appendChild(div);
}

function showTooltip(e) {
    console.log(e.target.getAttribute("title"));
createTooltip(title);
}
function removeTooltip() {
    console.log("wyjechane")
}
const title = document.querySelectorAll("[title]");

for(let i =0; i<title.length; i++) {
    title[i].addEventListener("mouseenter", showTooltip, false);
    title[i].addEventListener("mouseleave", removeTooltip, false);
}

})();