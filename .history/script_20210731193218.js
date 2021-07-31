(function() {


//var tooltip = null;
function createTooltip(title, options){

    var div = document.createElement("div");

    div.textContent= title;
    div.className="tooltip ";

    document.querySelector("body").appendChild(div);
    //document.body.appendChild(div);
    
    div.style.left = (options.x + options.w/2-div.offsetWidth/2)+ "px"
    div.style.top= options.y = "px";

    tooltip= div;
}

function showTooltip(e) {
    console.log(e.target.getAttribute("title"));
createTooltip(title, {
    w: e.target.offsetWidth,
    x: e.target.offsetLeft,
    y: e.target.offsetTop,
});
}
function removeTooltip() {
   // tooltip.parentNode.removeChild()
}
var title = document.querySelectorAll("[title]");

for(let i =0; i<title.length; i++) {
    title[i].addEventListener("mouseenter", showTooltip, false);
    title[i].addEventListener("mouseleave", removeTooltip, false);
}

})();