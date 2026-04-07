let button=document.getElementById("buttons")
button.addEventListener("click" , function(){

    let taskList = document.getElementById("taskList")
    let usertypes = document.getElementById("types");
     console.log(usertypes.value);

   let addContent =  document.createElement("li");
   addContent.innerHTML = `<span>${usertypes.value}</span>`;
   
   if(usertypes.value !== ""){
       
       taskList.appendChild(addContent)
       taskList.style.border = "2px solid grey"
       taskList.style.borderRadius = "7px"
       addContent.style.display="flex";
       addContent.querySelector("span").style.flex = "1"
       addContent.style.alignContent="center";
       addContent.style.justifyContent="space-between"
       addContent.style.gap="10px";
       addContent.style.flexWrap="nowrap"
       addContent.querySelector("span").style.wordBreak = "break-word"
       usertypes.value="";
       let btns = document.createElement("button")
       btns.innerHTML="Complete"
       btns.addEventListener("click" , function() {
           addContent.style.textDecoration="line-through";
       })
       let btnss = document.createElement("button")
       btnss.innerHTML="Delete"
       btnss.addEventListener("click" , function(){
        addContent.remove();
       })
       addContent.appendChild(btns)
       addContent.appendChild(btnss)
   }

})
