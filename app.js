
let allplus = document.querySelectorAll(".plus")
//making another divs dynamically
let create = document.querySelector("#create")
let section = document.querySelector(".app-section")
let pbtn;
create.addEventListener("click", () => {
    let input = document.getElementById("inp").value
    if (input != "" && input != " ") {
        let newcard = document.createElement("div")
        let newhead = document.createElement("div")
         pbtn = document.createElement("button")
        
        pbtn.setAttribute("class", "btn plus")
        pbtn.innerHTML = "+"
       
        newhead.setAttribute("class", "col-head m-2 ")
        newhead.innerHTML = input
        newhead.appendChild(pbtn)
        newcard.appendChild(newhead)
        section.appendChild(newcard)
        console.log("hello")
        newcard.setAttribute("class", "column card m-2")
    }
})



//adding items in card
allplus.forEach(plus => {
    
    plus.addEventListener("click", () => {
        console.log(allplus)
        let itemname = prompt("Enter Name: ", "Task")
        let newitem = document.createElement("div")
        newitem.innerHTML = itemname
        newitem.setAttribute("class", "items")
        newitem.setAttribute("draggable", "true")

        plus.parentNode.parentNode.appendChild(newitem)
    })
});



let movingElm = undefined;
let destination = undefined;

let allItems = document.querySelectorAll(".items")
allItems.forEach(item => {
    item.addEventListener('mousedown', function (e) {
        console.log(e.target.className)
        movingElm = e.target
    })

})

let allColumns = document.querySelectorAll(".column")

allColumns.forEach(column => {
    column.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
    column.addEventListener('drop', function (e) {

        console.log(e.target.className)
        destination = e.target
        let iscol = destination.getAttribute("class")
        if (iscol == "column card m-2") {
            destination.appendChild(movingElm)
        }
        if (iscol === "items") {
            destination.parentNode.appendChild(movingElm)
            // movingElm.replaceWith(destination)
            // insertBefore(movingElm,destination)
        }

    })
})    
