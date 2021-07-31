(function() {
var tooltip = null;
function createTooltip(text, options){

    var div = document.createElement("div");

    div.textContent= text;
    div.ClassName="tooltip hidden";

    //document.querySelector("body").appendChild(div);
    document.body.appendChild(div);
    
    div.style.left = (options.x + options.w/2-div.offsetWidth

    tooltip= div;
}

function showTooltip(e) {
    console.log(e.target.getAttribute("title"));
createTooltip(title);
}
function removeTooltip() {
    tooltip.parentNode.removeChild()
}
var title = document.querySelectorAll("[title]");

for(let i =0; i<title.length; i++) {
    title[i].addEventListener("mouseenter", showTooltip, false);
    title[i].addEventListener("mouseleave", removeTooltip, false);
}

})();