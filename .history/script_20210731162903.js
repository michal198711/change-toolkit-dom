(function() {

function createTool

function showTooltip(e) {
    console.log(e.target.getAttribute("title"));
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