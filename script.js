//your JS code here. If required.
let colorBox = document.querySelectorAll(".square")

for(let i of colorBox){
    i.addEventListener("mouseover",changeColorIn)
    i.addEventListener("mouseout",changeColorOut)

}
function changeColorIn(e){
    for(let i of colorBox){
        if(i.id != e.target.id){
            i.style.cssText=`
			width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37; /*coffee */
			cursor: pointer;`
        }
    }
}
function changeColorOut(e){
    for(let i of colorBox){
        if(i.id != e.target.id){
            i.style.cssText=`
			width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #E6E6FA; /*lavender */
			cursor: pointer;`
        }
    }
}