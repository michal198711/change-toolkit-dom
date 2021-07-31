(function() {
function showTooltip() {
    console.log(e.target)
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