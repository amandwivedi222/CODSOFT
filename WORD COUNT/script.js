var countTarget = document.querySelector("#word-count-input");
var wordCount = document.querySelector("#word-count");

var count = function () {
    var characters = countTarget.value;
    var words = characters.trim().split(/\s+/).filter(function (word) {
        return word !== "";
    });
 
    wordCount.innerHTML = words.length;
};

countTarget.addEventListener("input", count);
