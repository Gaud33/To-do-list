var listItemsCount = document.querySelector(".list").childElementCount;


document.querySelector(".add>.btn").addEventListener("click", function(){
    listItemsCount++;

    // add field
    const container = document.createElement("div");
    container.classList.add("item");

    const tickBtn = document.createElement("button");
    tickBtn.classList.add("strike", "btn");    
    tickBtn.innerText = "X";
    container.appendChild(tickBtn);

    const inner = document.createElement("span");
    inner.setAttribute("contentEditable", "true");
    inner.classList.add("field");
    inner.innerText = "Your to-do";
    inner.style.marginRight = "7px";
    inner.style.marginLeft = "5px";
    container.appendChild(inner);

    const delBtn = document.createElement("button");
    delBtn.classList.add("delete", "btn");    
    delBtn.innerText = "🗑️";
    container.appendChild(delBtn);
  
    
    document.querySelector(".list").appendChild(container);
  
  })
  
  document.querySelector(".list").addEventListener("click", function(event){
    const target = event.target.closest(".strike");

    if(target){
     target.parentNode.querySelector("span").classList.toggle("done");
     target.classList.toggle("completed");
    }
 })

 // remove field
 document.querySelector(".list").addEventListener("click", function(event){
  const target = event.target.closest(".delete");

  if(target){
   target.parentNode.remove();
  }
})


 // Content is editable when clicked 
 document.querySelector(".list").addEventListener("click", function(event){
  const target = event.target.closest(".field");

  if(target){
    target.setAttribute("contentEditable", "true");
  }

  
  document.addEventListener("keydown", function(ev){
    if(ev.key === "Enter"){
      target.setAttribute("contentEditable", "false");

    }
  })
 })

 // clock logic
 setInterval(displayTime, 1000);

 function displayTime(){
  let time = new Date();
  let hours = time.getHours(); 
  let mins = time.getMinutes();
  let am_pm = "AM";


  if(hours >= 12){
    hours-= 12;
    am_pm = "PM";
  } 
  else if(hours == 0){
    hours = 12;
    am_pm = "AM";
  }

  hours = (hours>=10)? hours: "0"+ hours;
  mins = (mins>=10)? mins: "0"+ mins; 

  let currentTime = hours + " : " + mins + " " + am_pm ;

  document.querySelector(".clock").innerHTML = currentTime;

 }



