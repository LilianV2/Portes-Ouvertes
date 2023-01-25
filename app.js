let cardTop = document.querySelectorAll(".top") // Quand on click sur la div
let cardContent = document.querySelectorAll(".content") // L'intérieur


for(let i = 0; i < cardTop.length; i++){
    cardTop[i].addEventListener("click", () => {
        if(cardContent[i].className === "hide content"){
            cardContent[i].className = "show content";
        }
        else if(cardContent[i].className === "show content"){
            cardContent[i].className = "hide content";
        }
    })
}
