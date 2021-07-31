(function() {
var tooltip = null;
function createTooltip(text, options){

    var div = document.createElement("div");

    div.textContent= text;
    div.ClassName="tooltip hidden";

    //document.querySelector("body").appendChild(div);
    document.body.appendChild(div);
    
    div.style.left = (options.x + options.w/2-div.offsetWidth/2)+ "px"
    div.style.top= pptions.y = "px";

    tooltip= div;
}

function showTooltip(e) {
    console.log(e.target.getAttribute("title"));
createTooltip(title, {
    w: e.target.offsetWidth,
    x: e.target.offsetLeft,
    y:
});
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