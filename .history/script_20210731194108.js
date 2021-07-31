(function() {


//var tooltip = null;
function createTooltip(text, options){

    var div = document.createElement("div");

    div.textContent= text;
    div.className="tooltip hidden";

    //document.querySelector("body").appendChild(div);
    document.body.appendChild(div);

    div.style.left = (options.x + options.w/2-div.offsetWidth/2)+ "px"
    div.style.top = (options.y - div.offsetHeight-10) = "px";
div.classList.remove("hidden")
    tooltip= div;
}

function showTooltip(e) {
    var title =target.getAttribute("title");
        
    createTooltip(title, {
    w: e.target.offsetWidth,
    x: e.target.offsetLeft,
    y: e.target.offsetTop
});
}
function removeTooltip(e) {
    tooltip.parentNode.removeChild()
}
var title = document.querySelectorAll("[title]");

for(let i =0; i<title.length; i++) {
    title[i].addEventListener("mouseenter", showTooltip, false);
    title[i].addEventListener("mouseleave", removeTooltip, false);
}

})();