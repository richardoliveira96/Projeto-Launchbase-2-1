const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const maximiza = document.querySelector('.maximiza-modal')
const modal = document.querySelector('.modal')

 for(let card of cards){
     card.addEventListener("click", function(){
        const rocketId = card.getAttribute("id") 
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br${rocketId}`
     maximiza.addEventListener("click", function(){
         modal.classList.add('maximiza')
     })   
    
    })
        
 }


 document.querySelector(".close-modal").addEventListener("click", function(){
     modalOverlay.classList.remove("active")
     modal.classList.remove("maximiza")
     modalOverlay.querySelector("iframe").src = ""
 })

