//your JS code here. If required.
let colorBox = document.querySelectorAll(".square")

for(let i of colorBox){
    i.addEventListener("mouseover",changeColorIn)
    i.addEventListener("mouseout",changeColorOut)

}
function changeColorIn(e){
    for(let i of colorBox){
        if(i.id != e.target.id){
            i.style.backgroundColor = "#6F4E37";
        }
    }
}
function changeColorOut(e){
    for(let i of colorBox){
        if(i.id != e.target.id){
            i.style.backgroundColor = "#E6E6FA";
        }
    }
}