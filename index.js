let container = document.getElementById("gridContainer")

for(let cellCount=1; cellCount<=16; cellCount++){
    let cellDiv = document.createElement("div")
    cellDiv.setAttribute("class","gridCell")
    container.appendChild(cellDiv)
}