(function() {

function createTooltip(title){
    let div = document.create
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