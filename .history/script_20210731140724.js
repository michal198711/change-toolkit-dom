(function() {
function showTooltip() {
    console.log("najechane")
}
function removeTooltip() {
    console.log("nwyjechane")
}
const title = document.querySelectorAll("[title]");

for(let i =0; i<title.length; i++) {
    title[i].addEventListener("mouseenter", showTooltip, false);
    title[i].addEventListener("mousele", removeTooltip, false);
}

})();