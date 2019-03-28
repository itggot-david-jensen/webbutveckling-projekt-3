function MenuToggle(event){
    let BackGround = document.querySelector(".menubackground")
    let Menu = document.querySelector(".menu")
    BackGround.classList.toggle("closed")
    Menu.classList.toggle("closed")
    
}

function Pun(event){
    let pun_num = Math.floor(Math.random() * 10)

    if(pun_num == 0){
        document.getElementById("pun").innerHTML = "To us, no step is too fire."

    }else if(pun_num == 1){
        document.getElementById("pun").innerHTML = "All's fire in love and war."

    }else if(pun_num == 2){
        document.getElementById("pun").innerHTML = "Our services are of the utmost quality; we flame to please."
        
    }else if(pun_num == 3){
        document.getElementById("pun").innerHTML = "For when you want need to tell your ex burn voyage."

    }else if(pun_num == 4){
        document.getElementById("pun").innerHTML = "Turn suburban to suburburn."

    }else if(pun_num == 5){
        document.getElementById("pun").innerHTML = "Give your mother in law a sweet chilli blaze."

    }else if(pun_num == 6){
        document.getElementById("pun").innerHTML = "Send your extended family some conflagrations on the new house."

    }else if(pun_num == 7){
        document.getElementById("pun").innerHTML = "Your boss seems thirsty, why not send him a bottle of scorch?"

    }else if(pun_num == 8){
        document.getElementById("pun").innerHTML = "Give your neighbor an embership in our exclusive club!"

    }else if(pun_num == 9){
        document.getElementById("pun").innerHTML = "Baby too loud? Why don't you give them a pacifire?"
    }
}

window.onload = Pun()