let selections = [];

document.addEventListener("mouseup", function() {

    const selection = document.getSelection();
    console.log(selection);
    const text = selection.toString();
    if(text.length !== 0){
        selections.push({
            text: text,
            highlight: highlightRange(selection.getRangeAt(0))
        });
    }
});

document.addEventListener("copy", (event) => {
    event.stopPropagation();
    event.preventDefault();
    const content = selections.map(e => e.text).join(' ');
    console.log(content);
    event.clipboardData.setData('text/plain', content);
    removeHighlighting();
    selections = [];
});

document.addEventListener("paste", (event) => {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById("target").value = event.clipboardData.getData("text/plain");
});

function highlightRange(range) {
    let newNode = document.createElement("div",);
    newNode.className = "highlighted";
    newNode.setAttribute(
        "style",
        "background-color: yellow; display: inline;"
    );
    range.surroundContents(newNode);
    return newNode;
}

function removeHighlighting() {
    $(".highlighted").removeAttr("style");
    document.getSelection().removeAllRanges()
}

function clearSelections(){
    selections = [];
}

function showMenu() {
 // show the menu when destination selected
}



