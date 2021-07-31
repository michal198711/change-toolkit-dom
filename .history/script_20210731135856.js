(function() {
function showTooltip() {
    console.log("najechane"
}
const title = dosument.querySelectorAll("[title]");

for(let i =0; i<title.length; i++) {
    title[i].addEventListener("mouseenter", showTooltip, false);
}

})();