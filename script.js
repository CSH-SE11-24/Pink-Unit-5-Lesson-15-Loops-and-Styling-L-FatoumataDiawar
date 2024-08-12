console.log("Script running...");
// Task 1: All off button
// Set up the the DOM manipulation flow such that when you press the all off button, the background color of all the lightbulb p tags changes to black


let offBtn = document.querySelector("#offbtn")
let lightbulb = document.querySelectorAll(".lightbulb")

offBtn.addEventListener("click", function(event){
for(let i= 0; i<lightbulbs.length;i++){
  lightbulb[i].classList.add("offmode")
}

})

// Task 2: CSH Mode
// Set up the DOM manipulation flow such that when your mouse is over the CSH mode button, the body's background color changes to green and the lightbulb p tags text change to "💻"
// When your mouse leaves the CSH mode button, the body's background should go back to black and the lightbulb p tags text should go back to "💡"

let CSHBtn = document.querySelector("#cshMode")
let body = document.querySelector("body")

CSHBtn.addEventListener("mouseover", function(event){
  body.style.backgroundColor = "darkGreen"
  for(let i= 0; i<lightbulbs.length;i++){
    lightbulb[i].textContent= "💻"
  }
})


CSHBtn.addEventListener("mouseout", function(event){
  body.style.backgroundColor = "black"
  for(let i= 0; i<lightbulb.length;i++){
    lightbulb[i].textContent= "💡"
  }
})



// Task 3: On and off feature
// Set up the DOM manipulation flow such that when you click any of the lightbulb p tags, the p tag's background color toggles from black to white
// You should use the classList property with the appropriate class from style.css

for (let i = 0; i <lightbulb.length;i++){
lightbulb[i].addEventListener("click", function(event){
  lightbulb[i].classList.toggle("offmode")
})
  }