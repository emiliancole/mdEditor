function load() {
var file = document.getElementById("myFile").files[0];
var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("md");
    textArea.value = e.target.result;
};
reader.readAsText(file);
}

function update() {
var md = document.getElementById("md").value;
  document.getElementById("content").innerHTML = marked(md);
}

function download(){
    var text = document.getElementById("md").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "out.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
