const playgame=()=>{
    const coin=document.querySelector('.coin-inner')

    const buttons=document.querySelectorAll('button')

    let userchoice="",computerchoice=""
        const choice=["HEADS","TAILS"]

    const tailspic=document.querySelector('.cointails')

    const headspic=document.querySelector('.coinheads')

    coin.addEventListener('animationend',() =>{
        coin.style.animation=""
        document.querySelector('.result').style.opacity="1"
        document.querySelector('.declarewinner').style.opacity="1"
        declarewinner(userchoice,computerchoice)
    })

    buttons.forEach(btn =>{
        btn.addEventListener('click',() => {
            document.querySelector('.result').style.opacity="0"
            document.querySelector('.declarewinner').style.opacity="0"
            coin.style.animation="rotate 2s forwards ease-in-out";
            userchoice=(btn.textContent).toLowerCase()
        computerchoice=(choice[Math.floor(Math.random() * choice.length )]).toLowerCase()
        if(computerchoice=="tails"){
            tailspic.style.backgroundImage="url('heads.png')"
            headspic.style.backgroundImage="url('tails.png')"
        }
        else
        {
            tailspic.style.backgroundImage="url('tails.png')"
            headspic.style.backgroundImage="url('heads.png')"
        }
        })
    })

    const declarewinner=(userchoice,computerchoice) =>{
        const declarewinner= document.querySelector('.declarewinner')
        document.querySelector('#useroption').textContent=userchoice
        document.querySelector('#compoption').textContent=computerchoice
        if(userchoice==computerchoice){
            declarewinner.textContent="You WON the Game"
        }
        else{
            declarewinner.textContent="You LOSS the Game"
        }

    }

}


playgame()



