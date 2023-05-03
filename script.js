bt = document.getElementById('bt')
reset = document.getElementById('reset')

img1 = document.getElementById('p1')
img2 = document.getElementById('p2')

msg = document.getElementById('msg')
pts = document.getElementById('pts')

const variables = [1, 2, 3, 1]

p1 = p2 = 0

p1p = p2p = 0

img1.style.visibility = 'hidden'
img2.style.visibility = 'hidden'



document.onkeydown = (e) => {

    switch (e.key) {
        case 'a':
            img1.src = './assets/img1.png'
            p1 = 1
            break
        case 's':
            img1.src = './assets/img2.png'
            p1 = 2
            break
        case 'd':
            img1.src = './assets/img3.png'
            p1 = 3
            break
        case 'j':
            img2.src = './assets/img1.png'
            p2 = 1
            break
        case 'k':
            img2.src = './assets/img2.png'
            p2 = 2
            break
        case 'l':
            img2.src = './assets/img3.png'
            p2 = 3
            break
        default:
            null

    }

}

bt.addEventListener('click', (event) => {

    event.preventDefault()
    
    if (p1 != 0 && p2 != 0) {

        img1.style.visibility = 'visible'
        img2.style.visibility = 'visible'

        if (p1 == p2) {

            msg.classList.remove('error')
            msg.innerHTML = 'Empate!'

        } else if (p1 == variables[p2]) { 

            msg.classList.remove('error')
            msg.innerHTML = 'Jogador 1 Ganhou!'
            p1p += 1

        } else {
            msg.classList.remove('error')
            msg.innerHTML = 'Jogador 2 Ganhou!'
            p2p += 1

        }

        pts.innerHTML = `Pontuação <br> ${p1p}x${p2p}`

    } else {

        if (p1 == 0) {

            msg.innerHTML = 'jogador 1 ainda não escolheu <br>'
            msg.classList.add('error')

            if (p2 == 0) {

                msg.innerHTML += 'jogador 2 ainda não escolheu'
                
            }

        } else {

            msg.innerHTML = 'jogador 2 ainda não escolheu'
            msg.classList.add('error')

        }
          
    }

})

reset.addEventListener('click', (event) => {

    event.preventDefault()

    img1.style.visibility = 'hidden'
    img2.style.visibility = 'hidden'

    msg.innerHTML = ''


    p1 = p2 = 0
    
})

