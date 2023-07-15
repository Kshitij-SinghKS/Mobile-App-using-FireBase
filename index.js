let list = []
const inputFieldEl = document.querySelector("#input-field")
const buttonEl = document.querySelector("#add-btn")

buttonEl.addEventListener("click",function(){
    let inputvalue = inputFieldEl.value
    list.push(inputvalue)
})

