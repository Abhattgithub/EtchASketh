let container = document.getElementById("gridContainer")


makeGrid(16)
setHover()
document.getElementById("createSketchpad").addEventListener("click",()=>{
    let gridCount = prompt("Enter number of columns (max 100)")
    if(gridCount>0&&gridCount<=100)
        makeGrid(gridCount)
    else
        console.log(gridCount+"exceeds limit");
})

function makeGrid(gridCount){
    container.innerHTML=""
    let cellWidth=100/gridCount
    for(let cellCount=1; cellCount<=gridCount*gridCount; cellCount++){
        let cellDiv = document.createElement("div")
        cellDiv.setAttribute("class","gridCell")
        cellDiv.style.width = `${cellWidth}%`
        container.appendChild(cellDiv)
    }
    setHover()
}

function setHover(){
    let cells = document.getElementsByClassName("gridCell")
    Array.from(cells).forEach(cell =>{
        cell.addEventListener("mouseover",()=>{
            let blueShade = Math.floor(Math.random()*256)
            let redShade = Math.floor(Math.random()*256)
            let greenShade = Math.floor(Math.random()*256)
    
            cell.style.backgroundColor = `rgb(${redShade},${blueShade},${greenShade})`;
        })
        cell.addEventListener("mouseout",()=>{
            cell.style.backgroundColor = `white`;
        })
    })
}
